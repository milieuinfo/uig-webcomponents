import { getCookieValue, submitCookies } from './cookies';
import { addAnalytics, removeAnalytics } from './analytics';

const isUncontrolled = (open) => open === undefined;

export const canModalOpen = (open) => {
  const hasConsentCookie = getCookieValue('cookie-consent');
  const consentDateCookie = getCookieValue('cookie-consent-date');
  const isConsentDateCookieValid =
    !Number.isNaN(consentDateCookie) && new Date(consentDateCookie) > new Date('2019/05/14');
  const needsCookiesConsent = !hasConsentCookie || consentDateCookie === undefined || !isConsentDateCookieValid;

  return isUncontrolled(open) && needsCookiesConsent;
};

export const submit = (reference) => {
  if (reference.optIns.some((optIn) => optIn.name === 'analytics')) {
    addAnalytics();
  } else {
    removeAnalytics();
  }

  const optInsWithDate = reference.optIns.map((optIn) =>
    optIn.name === 'cookie-consent-date' ? { ...optIn, value: new Date().getTime() } : optIn,
  );

  const submittedCookies = submitCookies(optInsWithDate);
  reference.dispatchEvent(
    new CustomEvent('vl-submitted', {
      bubbles: true,
      composed: true,
      detail: submittedCookies,
    }),
  );

  if (isUncontrolled(reference.open)) {
    reference.modalRef.value.close();
  }
};

export { defaultOptIns, handleOptIns } from './optins';
export { resetCookieConsent, getAllCookies, getActiveCookies } from './cookies';
