import { analytics as matomo } from './matomo';

export const addAnalytics = () => {
  if (!document.getElementById(matomo.scriptId)) {
    document.head.appendChild(matomo.script);
  }
};

export const removeAnalytics = () => {
  const script = document.getElementById(matomo.scriptId);
  if (script) {
    document.head.removeChild(script);
  }
};
