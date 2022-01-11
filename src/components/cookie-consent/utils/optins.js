const functionalOptIn = {
  name: 'functional',
  label: 'Noodzakelijke cookies toestaan (verplicht)',
  checked: true,
  mandatory: true,
  description:
    'Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.',
};

export const defaultOptIns = [
  { name: 'cookie-consent', checked: true, mandatory: true },
  { name: 'cookie-consent-date', checked: true, mandatory: true, value: new Date().getTime() },
];

const addFunctionalOptIn = (instance) => {
  if (!instance.optIns.find((optIn) => optIn.name === functionalOptIn.name)) {
    instance.optIns = [functionalOptIn, ...instance.optIns];
  }
};

const filterFunctionalOptIn = (instance) => {
  instance.optIns = instance.optIns.filter((optIn) => optIn.name !== functionalOptIn.name);
};

export const handleFuntionalOptIn = (instance) => {
  if (instance.functionalOptInDisabled) {
    filterFunctionalOptIn(instance);
  } else {
    addFunctionalOptIn(instance);
  }
};

export const getNewOptIns = (extraOptIns) =>
  extraOptIns.map((optIn) => ({
    ...optIn,
    checked: optIn.defaultChecked || optIn.mandatory || false,
  }));
