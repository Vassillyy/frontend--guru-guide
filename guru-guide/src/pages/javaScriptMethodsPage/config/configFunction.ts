export const configFunction = {
  FUNCTION: [
    {
      name: "name",
      syntax: "function.name",
      description:
        "Свойство объектов функции, которое возвращает имя функции. Для анонимных функций возвращает пустую строку или имя переменной. Свойство только для чтения (read-only).",
      example: "(function test() {}).name",
      specification:
        "https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-name",
      errors: ["TypeError — если this не является функцией."],
    },
    {
      name: "length",
      syntax: "function.length",
      description:
        "Свойство объектов функции, которое возвращает количество параметров, указанных в объявлении функции. Не учитывает параметры по умолчанию и rest параметры. Свойство только для чтения (read-only).",
      example: "(function(a, b, c) {}).length",
      specification:
        "https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-length",
      errors: ["TypeError — если this не является функцией."],
    },
    {
      name: "call()",
      syntax: "func.call(thisArg, ...args)",
      parameters: [
        {
          name: "thisArg",
          description:
            "Значение, которое будет использоваться как this при вызове функции",
        },
        {
          name: "...args",
          description: "Аргументы, которые будут переданы функции",
        },
      ],
      description:
        "Встроенный метод функции, который позволяет вызывать функцию, явно устанавливая this. Запускает функцию, используя первый аргумент как её контекст this, а последующие – как её аргументы.",
      example: "Math.max.call(null, 1, 2, 3)",
      specification:
        "https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.call",
      errors: ["TypeError — если this не является функцией."],
    },
    {
      name: "apply()",
      syntax: "func.apply(thisArg, argsArray)",
      parameters: [
        {
          name: "thisArg",
          description:
            "Значение, которое будет использоваться как this при вызове функции",
        },
        {
          name: "argsArray",
          description:
            "Массив или псевдомассив аргументов, которые будут переданы функции",
        },
      ],
      description:
        "Встроенный метод функции, который позволяет вызывать функцию, явно устанавливая this. Запускает функцию, используя первый аргумент как её контекст this, а второй параметр – как массив её аргументов. Единственное отличие от call() – передача аргументов массивом.",
      example: "Math.max.apply(null, [1, 2, 3])",
      specification:
        "https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.apply",
      errors: ["TypeError — если this не является функцией."],
    },
    {
      name: "bind()",
      syntax: "func.bind(thisArg, ...args)",
      parameters: [
        {
          name: "thisArg",
          description:
            "Значение, которое будет использоваться как this в новой функции (или null/undefined для глобального контекста)",
        },
        {
          name: "...args",
          description:
            "Аргументы, которые будут частично применены к новой функции",
        },
      ],
      description:
        "Встроенный метод функции, который создаёт новую функцию с фиксированным this и начальными аргументами. Возвращает функцию-обёртку, которая при вызове вызывает оригинальную функцию с указанным контекстом и предустановленными аргументами, дополненными новыми аргументами при вызове.",
      example: "Math.max.bind(null, 1, 2)(3)",
      specification:
        "https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.bind",
      errors: ["TypeError — если this не является функцией."],
    },
  ],
};
