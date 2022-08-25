import { VlElement } from '../../../../../../utils/test';

export class VlTestMapCurrentLocation extends VlElement {
  async getMapLegendStyle() {
    const div = await this.getElementInShadow(this, '.uig-map-current-location');
    const style = await div.getAttribute('style');
    return this.cssToObj(style);
  }

  cssToObj(css) {
    const obj = {};
    const s = css
      .toLowerCase()
      .replace(/-(.)/g, (m, g) => g.toUpperCase())
      .replace(/;\s?$/g, '')
      .split(/:|;/g);
    for (let i = 0; i < s.length; i += 2) {
      obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '');
    }
    return obj;
  }

  async getLegendItems() {
    const list = await this.findShadowDomElements(this, `div.uig-map-legend-item span.uig-map-legend-text`);
    const asyncItemInfos = [];
    list.forEach((e) => {
      asyncItemInfos.push(this.getItemInfo(e));
    });
    return Promise.all(asyncItemInfos).then((items) => items);
  }

  async getItemInfo(item) {
    const itemInfo = {};
    itemInfo.title = await item.getText();
    return itemInfo;
  }
}
