/* eslint-disable consistent-return */
export const functionalOptIn = {
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

export const getCookieName = (name) => `vl-cookie-consent-${name}`;

export const getCookie = (name) => {
  const cookieName = `${getCookieName(name)}=`;
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    let currentCookie = cookie;
    while (cookie.charAt(0) === ' ') {
      currentCookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      try {
        return JSON.parse(cookie.substring(cookieName.length, currentCookie.length));
      } catch (error) {
        return currentCookie.substring(cookieName.length, currentCookie.length);
      }
    }
  });
};

export const submitCookies = (optIns) =>
  optIns.map(({ checked, name, value }) => {
    const cookieName = getCookieName(name);
    const cookieValue = value || checked || false;
    document.cookie = `${cookieName}=${cookieValue};Max-Age=2147483647;path=/;SameSite=Strict;`;
    return { name: cookieName, value: cookieValue };
  });

export const resetCookies = (optIns) =>
  optIns.map(({ name }) => {
    const cookieName = getCookieName(name);
    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    return { name: cookieName };
  });

export const getNewOptIns = (extraOptIns) =>
  extraOptIns.map((optIn) => ({
    ...optIn,
    checked: optIn.defaultChecked || optIn.mandatory || false,
  }));

export const canModalOpen = (autoOpenDisabled) => {
  const hasConsentCookie = getCookie('cookie-consent');
  const consentDateCookie = getCookie('cookie-consent-date');
  const isConsentDateCookieValid =
    !Number.isNaN(consentDateCookie) && new Date(consentDateCookie) > new Date('2019/05/14');
  if (!autoOpenDisabled && (!hasConsentCookie || consentDateCookie === undefined || !isConsentDateCookieValid)) {
    return true;
  }
  return false;
};
