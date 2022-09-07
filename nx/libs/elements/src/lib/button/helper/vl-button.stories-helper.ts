export const sharedButtonArgs = {
    loading: false,
    disabled: false,
    error: false,
    block: false,
    large: false,
    wide: false,
    narrow: false,
};

export const buttonArgs = {
    content: 'Button',
    secondary: false,
    tertiary: false,
    ...sharedButtonArgs,
};

export const sharedButtonArgTypes = {
    disabled: {
        type: { summary: 'Boolean' },
        description: 'Used to indicate to the user that the functionality is not active.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    error: {
        name: 'data-vl-error',
        type: { summary: 'Boolean' },
        description: 'Used to emphasize the importance or consequences of an action.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    block: {
        name: 'data-vl-block',
        type: { summary: 'Boolean' },
        description:
            'Used to ensure that the button is shown as a block element and will therefore take the width of the parent.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    large: {
        name: 'data-vl-large',
        type: { summary: 'Boolean' },
        description: "Used to grab the user's attention by increasing the font size.",
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    wide: {
        name: 'data-vl-wide',
        type: { summary: 'Boolean' },
        description: 'Makes the button appear wider on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    narrow: {
        name: 'data-vl-narrow',
        type: { summary: 'Boolean' },
        description: 'Causes the button to appear narrower on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    loading: {
        name: 'data-vl-loading',
        type: { summary: 'Boolean' },
        description: 'Used to indicate to the user that their action is currently being processed.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    content: {
        name: 'content (for demo purposes)',
        type: { summary: 'String' },
    },
};

export const buttonArgTypes = {
    secondary: {
        name: 'data-vl-secondary',
        type: { summary: 'Boolean' },
        description: 'Used in conjunction with a regular button to provide alternate actions.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    tertiary: {
        name: 'data-vl-tertiary',
        type: { summary: 'Boolean' },
        description: 'Used in conjunction with regular and secondary buttons to provide alternate actions.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    ...sharedButtonArgTypes,
};
