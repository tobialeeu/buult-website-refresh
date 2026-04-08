export const DEFAULT_SHOWCASE_VIEWPORT_WIDTH = 1440;
export const DEFAULT_SHOWCASE_VIEWPORT_HEIGHT = 900;

export const PHONE_SHOWCASE_VIEWPORT_WIDTH = 390;
export const PHONE_SHOWCASE_VIEWPORT_HEIGHT = 844;

export type WebsiteShowcaseSlide = {
  id: string;
  title: string;
  html: string;
  posterSrc: string;
  viewportWidth?: number;
  viewportHeight?: number;
  preloadPriority?: number;
};

import { fixFastSlide } from './fixFast';
import { novaNightsSlide } from './novaNights';
import { maisonEmberSlide } from './maisonEmber';
import { vectorFlowSlide } from './vectorFlow';
import { wildKinSlide } from './wildKin';

export {
  fixFastSlide,
  novaNightsSlide,
  maisonEmberSlide,
  vectorFlowSlide,
  wildKinSlide,
};

export const websiteShowcaseSlides: WebsiteShowcaseSlide[] = [
  fixFastSlide,
  novaNightsSlide,
  maisonEmberSlide,
  vectorFlowSlide,
  wildKinSlide,
];
