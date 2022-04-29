import { getCookieValueByName, submitCookies } from './cookies';
import { addAnalytics, removeAnalytics } from './analytics';

const isUncontrolled = (open) => open === undefined;
const dateCookieName = 'cookie-consent-date';

export const canModalOpen = (open) => {
  const [hasConsentCookie, consentDateCookie] = [
    getCookieValueByName('cookie-consent'),
    getCookieValueByName(dateCookieName),
  ];
  const isDateCookieValid = new Date(consentDateCookie) > new Date('2019/05/14');
  const needsCookiesConsent = !hasConsentCookie || !isDateCookieValid;
  return isUncontrolled(open) && needsCookiesConsent;
};

export const submit = (reference) => {
  if (reference.optIns.some((optIn) => optIn.name === 'analytics')) {
    addAnalytics();
  } else {
    removeAnalytics();
  }

  const optInsWithDate = reference.optIns.map((optIn) =>
    optIn.name === dateCookieName ? { ...optIn, value: new Date().getTime() } : optIn,
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
export { getVlCookies, getCookieValueByName } from './cookies';
