export const defaultOptIns = [
  { name: 'cookie-consent', checked: true, mandatory: true },
  { name: 'cookie-consent-date', checked: true, mandatory: true },
  {
    name: 'functional',
    label: 'Essentiële cookies',
    checked: true,
    mandatory: true,
  },
];

const mapExtraOptIns = (extraOptIns) => {
  if (extraOptIns) {
    return extraOptIns.map((optIn) => ({
      ...optIn,
      checked: optIn.defaultChecked || optIn.mandatory || false,
    }));
  }
  return [];
};

export const handleOptIns = (reference) => {
  const newOptIns = [...defaultOptIns, ...mapExtraOptIns(reference.extraOptIns)];

  if (reference.analytics) {
    reference.optIns = [
      ...newOptIns,
      {
        name: 'analytics',
        checked: true,
        mandatory: true,
      },
    ];
  } else {
    reference.optIns = newOptIns;
  }
};
