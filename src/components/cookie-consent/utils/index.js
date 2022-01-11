import { getCookie, submitCookies, resetCookies } from './cookies';
import { handleAnalytics, removeAnalytics } from './analytics';

export { defaultOptIns, getNewOptIns, handleFuntionalOptIn } from './optins';

export const canModalOpen = (autoOpenDisabled) => {
  const hasConsentCookie = getCookie('cookie-consent');
  const consentDateCookie = getCookie('cookie-consent-date');
  const isConsentDateCookieValid =
    !Number.isNaN(consentDateCookie) && new Date(consentDateCookie) > new Date('2019/05/14');
  const needsCookiesConsent = !hasConsentCookie || consentDateCookie === undefined || !isConsentDateCookieValid;
  if (!autoOpenDisabled && needsCookiesConsent) {
    return true;
  }
  return false;
};

export const submit = (instance) => {
  handleAnalytics(instance.analytics, instance.functionalOptInDisabled);
  const submittedCookies = submitCookies(instance.optIns);
  instance.dispatchEvent(
    new CustomEvent('vl-submitted', {
      bubbles: true,
      composed: true,
      detail: submittedCookies,
    }),
  );
  instance.modalRef.value.close();
};

export const reset = (instance) => {
  removeAnalytics();
  const resettedCookies = resetCookies(instance.optIns);
  instance.dispatchEvent(
    new CustomEvent('vl-reset', {
      bubbles: true,
      composed: true,
      detail: resettedCookies,
    }),
  );
};
