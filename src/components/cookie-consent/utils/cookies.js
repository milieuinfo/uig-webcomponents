/* eslint-disable consistent-return */
const getCookieName = (name) => `vl-cookie-consent-${name}`;

export const getCookie = (name) => {
  const cookieName = `${getCookieName(name)}=`;
  const cookies = document.cookie.split(';');
  for (let index = 0; index < cookies.length; index += 1) {
    const x = cookies[index].replace(/\s/g, '');
    if (x.includes(cookieName)) {
      const value = x.substring(cookieName.length, x.length);
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }
  }
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
