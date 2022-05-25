// Use these functions to get an element in storybook.
// Needed for stories in the docs tab, because storybook can render the canvas en doc tab at the same time in the DOM when in the doc tab,
// thus the element is rendered multiple times. Because this only happens in the doc tab, we can take the last element that is found.

export const getLastElement = (element) => {
  const [lastItem] = [...document.querySelectorAll(element)].slice(-1);
  return lastItem;
};

// Make sure the class that is given is unique and is not being used in other stories of the component.
export const getLastElementByClassName = (className) => {
  const items = document.getElementsByClassName(className);
  return items[items.length - 1];
};
