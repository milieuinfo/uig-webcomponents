export class OpenLayersUtil {
  static createDummyLayer(id, source) {
    return {
      id,
      addEventListener: () => {},
      getSource: () => source || OpenLayersUtil.createDummySource(),
    };
  }

  static createDummyLayerGroup(id) {
    return {
      id,
      getLayers: () => ({
        getArray: () => {},
      }),
      addEventListener: () => {},
    };
  }

  static createDummySource(features) {
    return {
      addEventListener: () => {},
      getExtent: () => {},
      getFeatures: () => features,
      clear: () => {},
      addFeatures: () => {},
    };
  }

  static createClusterFeaturesObject(features) {
    return {
      get: (value) => {
        if (value == 'features') {
          return features;
        }
      },
    };
  }
}
