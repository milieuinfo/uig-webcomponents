import { Page, config, VlElement } from "../../../../utils/test";
import VlPager from "./pager";

export default class VlPagerPage extends Page {
  async _getPager(selector) {
    return new VlPager(this.driver, selector);
  }

  async getDefaultPager() {
    return this._getPager("#pager-default");
  }

  async getSinglePager() {
    return this._getPager("#pager-single");
  }

  async getPagerZonderPaginaItems() {
    return this._getPager("#pager-no-pagination");
  }

  async getPagerEventListener() {
    return this._getPager("#pager-event-listener");
  }

  async getPagerEventListenerLog() {
    return new VlElement(this.driver, "#pager-event-listener-log");
  }

  async getPagerCenter() {
    return this._getPager("#pager-center");
  }

  async getPagerRight() {
    return this._getPager("#pager-right");
  }

  async load() {
    await super.load(config.baseUrl + "components/pager/test/e2e");
  }
}
