// TODO dit wordt gebruikt in toggle-button maar die moet nog geimplementeerd worden als native element

export const IconPlacement = {
    BEFORE: 'before',
    AFTER: 'after',
};

export type IconPlacement = typeof IconPlacement[keyof typeof IconPlacement];
