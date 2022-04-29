import { getVlCookies } from './cookies';

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

export const handleOptIns = (reference) => {
  const newOptIns = [...defaultOptIns, ...reference.extraOptIns];

  // compare current cookies from browser with showed optins
  const matchedOptIns = newOptIns.map((optIn) => {
    const matchedOptIn = getVlCookies().find((cookie) => cookie.name === optIn.name);
    return matchedOptIn ? { ...optIn, checked: !!matchedOptIn.value } : optIn;
  });

  if (reference.analytics) {
    reference.optIns = [
      ...matchedOptIns,
      {
        name: 'analytics',
        checked: true,
        mandatory: true,
      },
    ];
  } else {
    reference.optIns = matchedOptIns;
  }
};
