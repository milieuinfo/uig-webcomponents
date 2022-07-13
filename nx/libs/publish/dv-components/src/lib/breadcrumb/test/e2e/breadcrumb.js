import { VlElement, By } from '../../../../utils/test';

export class VlBreadcrumb extends VlElement {
  async getLink(number) {
    const links = await this.getLinks();
    return links[number - 1];
  }

  async getLinks() {
    const links = await this.findElements(By.css('vl-breadcrumb-item'));
    return Promise.all(links.map((link) => new VlElement(this.driver, link)));
  }
}
