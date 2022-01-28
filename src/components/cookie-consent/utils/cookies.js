/* eslint-disable consistent-return */
import { removeAnalytics } from './analytics';

export const cookiePrefix = 'vl-cookie-consent-';

const getCookieName = (name) => `${cookiePrefix}${name}`;

export const getAllCookies = () => document.cookie.split(';').map((cookie) => cookie.replace(/\s/g, ''));

export const getCookieValue = (name) => {
  const cookieName = `${getCookieName(name)}=`;
  const cookies = getAllCookies();
  for (let index = 0; index < cookies.length; index += 1) {
    const currentCookie = cookies[index];
    if (currentCookie.includes(cookieName)) {
      const value = currentCookie.substring(cookieName.length, currentCookie.length);
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

export const resetCookieConsent = () => {
  removeAnalytics();
  const cookies = getAllCookies();
  const vlCookies = cookies.filter((cookie) => cookie.includes(cookiePrefix));
  const removedCookies = vlCookies.map((cookie) => {
    document.cookie = `${cookie};expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    return cookie;
  });
  return removedCookies;
};
