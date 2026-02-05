import { Topics, type IConfig } from '@/entities/topic';
import { configTypesOfData } from './configTypesOfData.ts';
import { configIntroductionToJS } from './configIntroductionToJS.ts';

export const config: IConfig = {
  [Topics.BASIC]: [configIntroductionToJS, configTypesOfData],
  [Topics.FUNCTION]: [],
  [Topics.OBJECT]: [],
  [Topics.PROMISE]: [],
};
