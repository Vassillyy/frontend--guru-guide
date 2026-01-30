export const configTypesOfData = {
  value: 'data-types',
  title: 'Типы данных',
  content: {
    sections: [
      {
        title: 'Примитивные типы',
        description: 'JavaScript имеет 7 примитивных типов данных.',
        examples: [
          '// Number',
          'let num = 42;',
          '',
          '// String',
          'let str = "Hello";',
          '',
          '// Boolean',
          'let bool = true;',
        ],
      },
      {
        title: 'Ссылочные типы',
        description: 'Объекты, массивы, функции и другие сложные типы.',
        examples: [
          '// Object',
          'let obj = { name: "John" };',
          '',
          '// Array',
          'let arr = [1, 2, 3];',
          '',
          '// Function',
          'let func = () => {};',
        ],
      },
    ],
    tips: [
      'Используйте typeof для проверки типа примитивов',
      'Используйте Array.isArray() для проверки массивов',
      'null имеет тип object - это историческая ошибка',
    ],
    warnings: [
      'Не путайте undefined (переменная объявлена, но не имеет значения) и null (явное отсутствие значения)',
      'NaN (Not a Number) имеет тип number',
    ],
  },
};
