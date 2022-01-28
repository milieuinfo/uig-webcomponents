import { getCookieValue, submitCookies } from './cookies';
import { addAnalytics } from './analytics';

export { defaultOptIns, handleOptIns } from './optins';
export { resetCookieConsent } from './cookies';

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
  if (reference.analytics) {
    addAnalytics();
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
