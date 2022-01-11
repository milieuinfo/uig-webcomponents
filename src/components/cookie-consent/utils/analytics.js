import { analytics as matomo } from '../analytics';

const addAnalytics = () => {
  if (!document.getElementById(matomo.scriptId)) {
    document.head.appendChild(matomo.script);
  }
};

export const handleAnalytics = (analytics, functionalOptInDisabled) => {
  if (analytics) {
    if (!functionalOptInDisabled) {
      addAnalytics();
    } else {
      throw new Error('analytics can only be added when the functional cookies opt-in has been activated.');
    }
  }
};

export const removeAnalytics = () => {
  const script = document.getElementById(matomo.scriptId);
  if (script) {
    document.head.removeChild(script);
  }
};
