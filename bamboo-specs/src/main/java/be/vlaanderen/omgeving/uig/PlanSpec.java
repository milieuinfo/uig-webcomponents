package be.vlaanderen.omgeving.uig;
import com.atlassian.bamboo.specs.api.BambooSpec;
import com.atlassian.bamboo.specs.api.builders.BambooKey;
import com.atlassian.bamboo.specs.api.builders.BambooOid;
import com.atlassian.bamboo.specs.api.builders.Variable;
import com.atlassian.bamboo.specs.api.builders.notification.Notification;
import com.atlassian.bamboo.specs.api.builders.permission.PermissionType;
import com.atlassian.bamboo.specs.api.builders.permission.Permissions;
import com.atlassian.bamboo.specs.api.builders.permission.PlanPermissions;
import com.atlassian.bamboo.specs.api.builders.plan.Job;
import com.atlassian.bamboo.specs.api.builders.plan.Plan;
import com.atlassian.bamboo.specs.api.builders.plan.PlanIdentifier;
import com.atlassian.bamboo.specs.api.builders.plan.Stage;
import com.atlassian.bamboo.specs.api.builders.plan.branches.BranchCleanup;
import com.atlassian.bamboo.specs.api.builders.plan.branches.PlanBranchManagement;
import com.atlassian.bamboo.specs.api.builders.plan.configuration.ConcurrentBuilds;
import com.atlassian.bamboo.specs.api.builders.project.Project;
import com.atlassian.bamboo.specs.api.builders.requirement.Requirement;
import com.atlassian.bamboo.specs.builders.notification.PlanFailedNotification;
import com.atlassian.bamboo.specs.builders.notification.ResponsibleRecipient;
import com.atlassian.bamboo.specs.builders.notification.WatchersRecipient;
import com.atlassian.bamboo.specs.builders.task.CheckoutItem;
import com.atlassian.bamboo.specs.builders.task.ScriptTask;
import com.atlassian.bamboo.specs.builders.task.TestParserTask;
import com.atlassian.bamboo.specs.builders.task.VcsCheckoutTask;
import com.atlassian.bamboo.specs.builders.trigger.ScheduledTrigger;
import com.atlassian.bamboo.specs.model.task.TestParserTaskProperties;
import com.atlassian.bamboo.specs.util.BambooServer;

@BambooSpec
public class PlanSpec {
    
    public Plan plan() {
        final Plan plan = new Plan(new Project()
                .oid(new BambooOid("rnl8i5pnnoqp"))
                .key(new BambooKey("WEBCO"))
                .name("Webcomponenten"),
            "uig-webcomponents",
            new BambooKey("UIGWEBCOMPONENTS"))
            .oid(new BambooOid("rnbjakcfuhoo"))
            .pluginConfigurations(new ConcurrentBuilds())
            .stages(new Stage("Build")
                    .jobs(new Job("Test",
                            new BambooKey("BD"))
                            .tasks(new VcsCheckoutTask()
                                    .checkoutItems(new CheckoutItem().defaultRepository())
                                    .cleanCheckout(true),
                                new ScriptTask()
                                    .inlineBody("#!/bin/bash\nset -e\nexport SHM-SIZE=11g\nexport browserstack_username=\"${bamboo_browserstack_username}\"\nexport browserstack_password=\"${bamboo_browserstack_password}\"\ndocker-compose -f docker/docker-compose-test.yml up --scale selenium-chrome=3 --scale selenium-firefox=3 --exit-code-from tests --force-recreate\n"))
                            .finalTasks(new ScriptTask()
                                    .inlineBody("/opt/scripts/docker/stop-docker-containers.sh"),
                                new TestParserTask(TestParserTaskProperties.TestType.JUNIT)
                                    .resultDirectories("results"))
                            .requirements(new Requirement("REMOTE_ONLY"))),
                new Stage("Release")
                    .manual(true)
                    .jobs(new Job("Release",
                            new BambooKey("REL"))
                            .tasks(new VcsCheckoutTask()
                                    .checkoutItems(new CheckoutItem().defaultRepository())
                                    .cleanCheckout(true),
                                new ScriptTask()
                                    .inlineBody("#!/bin/bash\nset -e\nset -x\n/opt/scripts/git/git-repository-information-restore.sh\nexport git_repo=\"${bamboo_repository_git_repositoryUrl}\"\nexport release_version=\"${bamboo.release_version}\"\ndocker-compose -f docker/docker-compose-release.yml run release\n"))
                            .finalTasks(new ScriptTask()
                                    .inlineBody("/opt/scripts/docker/stop-docker-containers.sh"))
                            .requirements(new Requirement("REMOTE_ONLY"))))
            .linkedRepositories("uig-webcomponents")
            
            .triggers(new ScheduledTrigger())
            .variables(new Variable("release_version",
                    "patch"))
            .planBranchManagement(new PlanBranchManagement()
                    .createForVcsBranch()
                    .delete(new BranchCleanup()
                        .whenRemovedFromRepositoryAfterDays(1)
                        .whenInactiveInRepositoryAfterDays(30))
                    .triggerBuildsManually()
                    .notificationLikeParentPlan()
                    .issueLinkingEnabled(false))
            .notifications(new Notification()
                    .type(new PlanFailedNotification())
                    .recipients(new ResponsibleRecipient(),
                        new WatchersRecipient()))
            .forceStopHungBuilds();
        return plan;
    }
    
    public PlanPermissions planPermission() {
        final PlanPermissions planPermission = new PlanPermissions(new PlanIdentifier("WEBCO", "UIGWEBCOMPONENTS"))
            .permissions(new Permissions()
                    .groupPermissions("bamboo-admin", PermissionType.EDIT, PermissionType.VIEW, PermissionType.BUILD, PermissionType.ADMIN, PermissionType.CLONE)
                    .groupPermissions("bamboo-release", PermissionType.EDIT, PermissionType.VIEW, PermissionType.BUILD, PermissionType.ADMIN, PermissionType.CLONE)
                    .groupPermissions("developer-admin", PermissionType.EDIT, PermissionType.VIEW, PermissionType.BUILD, PermissionType.ADMIN, PermissionType.CLONE));
        return planPermission;
    }
    
    public static void main(String... argv) {
        //By default credentials are read from the '.credentials' file.
        BambooServer bambooServer = new BambooServer("https://www.milieuinfo.be/bamboo");
        final PlanSpec planSpec = new PlanSpec();
        
        final Plan plan = planSpec.plan();
        bambooServer.publish(plan);
        
        final PlanPermissions planPermission = planSpec.planPermission();
        bambooServer.publish(planPermission);
    }
}
