export const defaultOptIns = [
  { name: 'cookie-consent', checked: true, mandatory: true },
  { name: 'cookie-consent-date', checked: true, mandatory: true, value: new Date().getTime() },
];

export const mapExtraOptIns = (extraOptIns) =>
  extraOptIns.map((optIn) => ({
    ...optIn,
    checked: optIn.defaultChecked || optIn.mandatory || false,
  }));
