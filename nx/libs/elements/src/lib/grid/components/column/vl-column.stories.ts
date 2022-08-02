import { html } from 'lit-html';
import '../../vl-grid.element';
import { args, argTypes } from './helper/vl-column.stories-helper';

export default {
  title: 'Elements/vl-grid/vl-column',
  args: {
    ...args,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?',
  },
  argTypes: {
    ...argTypes,
    content: {
      name: 'content (for demo purposes)',
    },
  },
};

interface DefaultInterface {
  push: string,
  content: any
}
export const Default = ({ push, content }: DefaultInterface) => html`<section is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid">
      <div is="vl-column" data-vl-push=${push}>${content}</div>
    </div>
  </div>
</section>`;

const disableArgTypes = () =>
  Object.keys(argTypes).reduce(
    (previous, current) => ({
      ...previous,
      [current]: { control: { disable: current !== 'push' } },
    }),
    {},
  );

Default.argTypes = {
  ...disableArgTypes(),
};

interface WithCustomSizesInterface {
  size: string,
  maxSize: string,
  mediumSize: string,
  mediumMaxSize: string,
  smallSize: string,
  smallMaxSize: string,
  extraSmallSize: string,
  extraSmallMaxSize: string,
  push: string,
  content: any,
}

export const WithCustomSizes = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
  push,
  content,
}: WithCustomSizesInterface) => html`<section is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid">
      <div
        is="vl-column"
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
        ${content}
      </div>
    </div>
  </div>
</section>`;
