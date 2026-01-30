export interface ISection {
  value: string;
  title: string;
}

export type IConfig = {
  [key in Topics]: ISection[];
};

export const enum Topics {
  BASIC = 'BASIC',
  FUNCTION = 'FUNCTION',
  OBJECT = 'OBJECT',
  PROMISE = 'PROMISE',
}

export const labelTopics = {
  [Topics.BASIC]: 'Основы JavaScript',
  [Topics.FUNCTION]: 'Функции',
  [Topics.OBJECT]: 'Объекты и ООП',
  [Topics.PROMISE]: 'Объекты и ООП',
};
