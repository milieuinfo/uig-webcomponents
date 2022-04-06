if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = () => {};
}
if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = () => {};
}
