export const configUtil = {
  UTIL: [
    {
      name: "structuredClone()",
      syntax: "structuredClone(value[, options])",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно глубоко скопировать",
        },
        {
          name: "options",
          description:
            "Необязательный объект с параметрами клонирования:\n • transfer - массив Transferable объектов (ArrayBuffer, MessagePort, ImageBitmap) для передачи владения без копирования\n • shared - boolean, если true, то SharedArrayBuffer клонируется без копирования (по ссылке)",
        },
      ],
      description:
        "Встроенная функция, возвращает глубокую копию обьекта (value).",
      example: "structuredClone({a: 1, b: {c: 2}})",
      specification:
        "https://tc39.es/ecma262/multipage/structured-data.html#sec-structuredclone",
      errors: [
        "DataCloneError — возникает при клонировании функций или DOM-элементов.",
      ],
    },
    {
      name: "Symbol()",
      syntax: "Symbol([description])",
      parameters: [
        {
          name: "description",
          description: "Необязательное строковое описание символа",
        },
      ],
      description:
        "Встроенная функция, позволяющая создавать уникальные символы. Не является конструктором.",
      example: "Symbol('id')",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-description",
      errors: [
        "TypeError — если вызывается как конструктор с оператором 'new'.",
      ],
    },
    {
      name: "isNaN()",
      syntax: "isNaN(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно проверить на NaN",
        },
      ],
      description:
        "Встроенная функция, которая преобразует указанное значение в число и проверяет является ли он NaN. Возвращает true, если является, и false, если является числом.",
      example: "isNaN('abc')",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isnan-number",
    },
    {
      name: "isFinite()",
      syntax: "isFinite(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно проверить на конечность",
        },
      ],
      description:
        "Встроенная функция, которая преобразует указанное значение в число и возвращает true, если он является обычным числом, т.е. не NaN/Infinity/-Infinity, иначе false.",
      example: "isFinite('123')",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isfinite-number",
    },
    {
      name: "parseInt()",
      syntax: "parseInt(string[, radix])",
      parameters: [
        {
          name: "string",
          description: "Строка, которую нужно преобразовать в целое число",
        },
        {
          name: "radix",
          description:
            "Необязательное основание системы счисления (от 2 до 36)",
        },
      ],
      description:
        "Встроенная функция, преобразует строку в целое число. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",
      example: "parseInt('123px')",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parseint-string-radix",
    },
    {
      name: "parseFloat()",
      syntax: "parseFloat(string)",
      parameters: [
        {
          name: "string",
          description:
            "Строка, которую нужно преобразовать в число с плавающей точкой",
        },
      ],
      description:
        "Встроенная функция, преобразует строку в число с плавающей точкой. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",
      example: "parseFloat('12.34px')",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parsefloat-string",
    },
    {
      name: "setTimeout()",
      syntax: "setTimeout(func[, delay[, ...args]])",
      parameters: [
        {
          name: "func",
          description: "Функция, которую нужно вызвать после задержки",
        },
        {
          name: "delay",
          description:
            "Задержка в миллисекундах перед вызовом функции (по умолчанию 0)",
        },
        {
          name: "...args",
          description:
            "Дополнительные аргументы, которые будут переданы функции",
        },
      ],
      description:
        "Функция, позволяющая вызвать функцию один раз через указанный интервал времени. Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения. В браузере устанавливает this=window.",
      example: "setTimeout(() => console.log('Hello'), 1000)",
      specification:
        "https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setTimeout",
      errors: ["TypeError — если первый параметр не является функцией."],
    },
    {
      name: "clearTimeout()",
      syntax: "clearTimeout(timeoutID)",
      parameters: [
        {
          name: "timeoutID",
          description: "Идентификатор таймера, полученный из setTimeout()",
        },
      ],
      description: "Функция, которая используется для отмены таймера.",
      example: "clearTimeout(setTimeout(() => {}, 1000))",
      specification:
        "https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearTimeout",
      errors: [
        "TypeError — если аргумент не является числовым идентификатором таймера.",
      ],
    },
    {
      name: "setInterval()",
      syntax: "setInterval(func[, delay[, ...args]])",
      parameters: [
        {
          name: "func",
          description: "Функция, которую нужно вызывать повторно",
        },
        {
          name: "delay",
          description:
            "Интервал в миллисекундах между вызовами функции (по умолчанию 0)",
        },
        {
          name: "...args",
          description:
            "Дополнительные аргументы, которые будут переданы функции",
        },
      ],
      description:
        "Функция, позволяющая вызывать функцию регулярно, повторяя вызов через указанный интервал времени. Вызов setInterval возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения. В браузере устанавливает this=window.",
      example: "setInterval(() => console.log('Tick'), 1000)",
      specification:
        "https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setInterval",
      errors: ["TypeError — если первый параметр не является функцией."],
    },
    {
      name: "clearInterval()",
      syntax: "clearInterval(intervalID)",
      parameters: [
        {
          name: "intervalID",
          description: "Идентификатор таймера, полученный из setInterval()",
        },
      ],
      description: "Функция, которая используется для отмены таймера.",
      example: "clearInterval(setInterval(() => {}, 1000))",
      specification:
        "https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearInterval",
      errors: [
        "TypeError — если аргумент не является числовым идентификатором таймера.",
      ],
    },
  ],
};
