import './vl-button.element';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'Elements/vl-button',
};

export const vlButton1 = () =>
    '<div style="display: flex; align-items: center; justify-content: center;">' +
    '   <div style="width: 800px">' +
    '       <button is="vl-button" data-vl-error data-vl-wide>knopje</button>' +
    '   </div>' +
    '</div>';
