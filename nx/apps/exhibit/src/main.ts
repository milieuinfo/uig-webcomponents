import './app/app.element.ts';
import './app/landing/landing.element.ts';
import { VlButton } from '@uig/dv-components';
import { define } from '../../../libs/publish/dv-components/src/lib/utils/core';

define('vl-button', VlButton, { extends: 'button' });
