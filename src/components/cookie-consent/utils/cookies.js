const cookiePrefix = 'vl-cookie-consent-';

export const getVlCookies = () => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.replace(/\s/g, ''));
  const vlCookies = cookies.filter((cookie) => cookie.includes(cookiePrefix));
  return vlCookies.map((cookie) => {
    const [name, value] = cookie.split('=');
    return { name: name.split(cookiePrefix).pop(), value: JSON.parse(value), fullName: name, cookie };
  });
};

export const getCookieValueByName = (name) => {
  const matchedCookie = getVlCookies().find((cookie) => cookie.name === name);
  if (matchedCookie) {
    return matchedCookie.value;
  }
  return undefined;
};

export const submitCookies = (optIns) => {
  optIns.forEach(({ checked, name, value }) => {
    const cookieValue = value || checked || false;
    document.cookie = `${cookiePrefix}${name}=${cookieValue};Max-Age=2147483647;path=/;SameSite=Strict;`;
  });
  return getVlCookies();
};
