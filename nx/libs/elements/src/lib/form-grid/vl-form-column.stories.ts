import { html } from 'lit-html';
import '../form/vl-form.element';
import '../form-grid/vl-form-grid.element';
// import '../input-field/vl-input-field.element';
import '../button/vl-button.element';
import '../form-message/vl-form-message.element';
import { args, argTypes } from '../grid/components/column/helper/vl-column.stories-helper';

export default {
  title: 'Elements/vl-form-grid/vl-form-column',
  args,
  argTypes,
};

interface DefaultInterface {
  size: string,
  maxSize: string,
  mediumSize: string,
  mediumMaxSize: string,
  smallSize: string,
  smallMaxSize: string,
  extraSmallSize: string,
  extraSmallMaxSize: string,
  push: string,
}

export const Default = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
  push,
}: DefaultInterface) => html`
  <form is="vl-form">
    <div is="vl-form-grid">
      <div
        is="vl-form-column"
        data-vl-size=${size}
        data-vl-max-size=${maxSize}
        data-vl-medium-size=${mediumSize}
        data-vl-medium-max-size=${mediumMaxSize}
        data-vl-small-size=${smallSize}
        data-vl-small-max-size=${smallMaxSize}
        data-vl-extra-small-size=${extraSmallSize}
        data-vl-extra-small-max-size=${extraSmallMaxSize}
        data-vl-push=${push}
      >
        <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />
      </div>
    </div>
  </form>
`;
