export const configNumber = {
  NUMBER: [
    {
      name: "toFixed()",
      syntax: "num.toFixed([digits])",
      parameters: [
        {
          name: "digits",
          description: "Количество цифр после десятичной точки (от 0 до 100)",
        },
      ],
      description:
        "Метод объекта Number, округляет число до указанного количества знаков после запятой. Возвращает строку.",
      example: "3.14159.toFixed(2)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tofixed",
      errors: [
        "RangeError — если аргумент (digits) не в диапазоне от 0 до 100.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toString()",
      syntax: "num.toString([radix])",
      parameters: [
        {
          name: "radix",
          description:
            "Основание системы счисления (от 2 до 36), по умолчанию 10",
        },
      ],
      description:
        "Метод объекта Number, возвращает строковое представление числа в указанной системе счисления.",
      example: "(123).toString()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring",
      errors: [
        "RangeError — если основание (radix) не в диапазоне от 2 до 36.",
        "TypeError — если this является null или undefined.",
      ],
    },
    {
      name: "toExponential()",
      syntax: "num.toExponential([fractionDigits])",
      parameters: [
        {
          name: "fractionDigits",
          description: "Количество цифр после десятичной точки (от 0 до 100)",
        },
      ],
      description:
        "Метод объекта Number, возвращает строковое представление числа в экспоненциальной записи.",
      example: "123456.789.toExponential(2)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toexponential",
      errors: [
        "RangeError — если аргумент (fractionDigits) не в диапазоне от 0 до 100.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toPrecision()",
      syntax: "num.toPrecision([precision])",
      parameters: [
        {
          name: "precision",
          description: "Количество значащих цифр в результате (от 1 до 100)",
        },
      ],
      description:
        "Метод объекта Number, возвращает строковое представление числа в формате с фиксированным количеством значащих цифр.",
      example: "123.456.toPrecision(4)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toprecision",
      errors: [
        "RangeError — если аргумент (precision) не в диапазоне от 1 до 100.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toLocaleString()",
      syntax: "num.toLocaleString([locales[, options]])",
      parameters: [
        {
          name: "locales",
          description:
            "Строка с кодом локали или массив таких строк (например, 'ru-RU', 'en-US')",
        },
        {
          name: "options",
          description:
            "Объект с настройками форматирования:\n • style: 'decimal' (по умолчанию), 'currency', 'percent', 'unit'\n • currency: код валюты (например, 'USD', 'EUR', 'RUB') - обязателен при style: 'currency'\n • currencyDisplay: 'symbol' (по умолчанию), 'code', 'name'\n • useGrouping: true/false - использовать ли разделители групп разрядов\n • minimumIntegerDigits: минимальное количество целых цифр (1-21)\n • minimumFractionDigits: минимальное количество дробных цифр (0-20)\n • maximumFractionDigits: максимальное количество дробных цифр (0-20)\n • minimumSignificantDigits: минимальное количество значащих цифр (1-21)\n • maximumSignificantDigits: максимальное количество значащих цифр (1-21)\n • unit: единица измерения ('liter', 'meter', 'kilogram', и т.д.) - для style: 'unit'\n • unitDisplay: 'short', 'long', 'narrow' - для style: 'unit'",
        },
      ],
      description:
        "Метод объекта Number, преобразует число в строку с учётом локали (языка и региона). Поддерживает различные стили форматирования: десятичные числа, валюту, проценты, единицы измерения. Позволяет настраивать количество цифр, разделители и другие параметры отображения. Игнорирует невалидные значения.",
      example:
        "123456.789.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tolocalestring",
      errors: [
        "RangeError — если аргумент (locales) содержит недопустимые значения языковых тегов.",
        "TypeError — если this не является числом или если аргумент (options) содержит недопустимые свойства.",
      ],
    },
    {
      name: "Number.isInteger()",
      syntax: "Number.isInteger(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно проверить на целочисленность",
        },
      ],
      description:
        "Статический метод объекта Number, проверяет, является ли указанное значение целым числом. Возвращает true, если является целым числом, иначе false.",
      example: "Number.isInteger(42)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isinteger",
    },
    {
      name: "Number.isNaN()",
      syntax: "Number.isNaN(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно проверить на NaN",
        },
      ],
      description:
        "Статический метод объекта Number, возвращает true только если указанное значение имеет тип number и является NaN. Во всех остальных случаях возвращает false.",
      example: "Number.isNaN(NaN)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isnan",
    },
    {
      name: "Number.isFinite()",
      syntax: "Number.isFinite(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое нужно проверить на конечность",
        },
      ],
      description:
        "Статический метод объекта Number, возвращает true только в том случае, если значение (value) принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.",
      example: "Number.isFinite(42)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isfinite",
    },
  ],
};
