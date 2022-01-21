export const defaultOptIns = [
  { name: 'cookie-consent', checked: true, mandatory: true },
  { name: 'cookie-consent-date', checked: true, mandatory: true, value: new Date().getTime() },
];

const functionalOptIn = {
  name: 'functional',
  checked: true,
  mandatory: true,
};

const mapExtraOptIns = (extraOptIns) =>
  extraOptIns.map((optIn) => ({
    ...optIn,
    checked: optIn.defaultChecked || optIn.mandatory || false,
  }));

export const handleOptIns = (reference) => {
  const newOptIns = [...defaultOptIns, ...mapExtraOptIns(reference.extraOptIns)];

  if (reference.analytics) {
    reference.optIns = [...newOptIns, functionalOptIn];
  } else {
    reference.optIns = newOptIns;
  }
};
