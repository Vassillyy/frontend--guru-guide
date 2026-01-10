export const configString = {
  STRING: [
    {
      name: "toUpperCase()",
      syntax: "str.toUpperCase()",
      description:
        "Метод объекта String, возвращает новую строку, приведённую в верхний регистр.",
      example: "'hello'.toUpperCase()",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.touppercase",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "toLowerCase()",
      syntax: "str.toLowerCase()",
      description:
        "Метод объекта String, возвращает новую строку, приведённую в нижний регистр.",
      example: "'HELLO'.toLowerCase()",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolowercase",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "startsWith()",
      syntax: "str.startsWith(searchString[, position])",
      parameters: [
        {
          name: "searchString",
          description: "Подстрока для проверки",
        },
        {
          name: "position",
          description: "Необязательный индекс, с которого начинать поиск",
        },
      ],
      description:
        "Метод объекта String, проверяет, начинается ли строка указанной подстрокой, если да - возвращает true, иначе false.",
      example: "'Hello World'.startsWith('Hello')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.startswith",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "endsWith()",
      syntax: "str.endsWith(searchString[, position])",
      parameters: [
        {
          name: "searchString",
          description: "Подстрока для проверки",
        },
        {
          name: "position",
          description:
            "Необязательный индекс, с которого начинать поиск (длина строки, если не указан)",
        },
      ],
      description:
        "Метод объекта String, проверяет, заканчивается ли строка указанной подстрокой, если да - возвращает true, иначе false.",
      example: "'Hello World'.endsWith('World')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.endswith",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "replace()",
      syntax: "str.replace(pattern, replacement)",
      parameters: [
        {
          name: "pattern",
          description: "Подстрока или регулярное выражение для поиска",
        },
        {
          name: "replacement",
          description: "Подстрока или функция для замены найденного совпадения",
        },
      ],
      description:
        "Метод объекта String, позволяет заменить подстроку в исходной строке другой подстрокой. Возвращает новую строку.",
      example: "'Hello World'.replace('World', 'JavaScript')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replace",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "replaceAll()",
      syntax: "str.replaceAll(pattern, replacement)",
      parameters: [
        {
          name: "pattern",
          description:
            "Подстрока или регулярное выражение с флагом 'g' для поиска",
        },
        {
          name: "replacement",
          description:
            "Подстрока или функция для замены всех найденных совпадений",
        },
      ],
      description:
        "Метод объекта String, позволяет заменить все вхождения подстроки в исходной строке на другую подстроку. Возвращает новую строку.",
      example: "'Hello World World'.replaceAll('World', 'JavaScript')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replaceall",
      errors: [
        "TypeError — если this не является строкой или если первый аргумент (pattern) является регулярным выражением без флага 'g'.",
      ],
    },
    {
      name: "at()",
      syntax: "str.at(index)",
      parameters: [
        {
          name: "index",
          description:
            "Индекс символа (может быть отрицательным - отсчёт с конца)",
        },
      ],
      description:
        "Метод объекта String, возвращает символ по указанному индексу. Если индекс выходит за границы строки, возвращает undefined.",
      example: "'Hello'.at(1)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.at",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "charAt()",
      syntax: "str.charAt(index)",
      parameters: [
        {
          name: "index",
          description: "Индекс символа (от 0 до length-1)",
        },
      ],
      description:
        "Метод объекта String, возвращает символ по указанному индексу. Если индекс выходит за границы строки - возвращает пустую строку.",
      example: "'Hello'.charAt(1)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charat",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "indexOf()",
      syntax: "str.indexOf(searchValue[, startIndex])",
      parameters: [
        {
          name: "searchValue",
          description: "Подстрока для поиска",
        },
        {
          name: "startIndex",
          description: "Необязательный индекс начала поиска",
        },
      ],
      description:
        "Метод объекта String, выполняет поиск подстроки в исходной строке. Метод возвращает индекс первого совпадения или -1, если подстрока не найдена.",
      example: "'Hello World'.indexOf('World')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.indexof",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "lastIndexOf()",
      syntax: "str.lastIndexOf(searchValue[, fromIndex])",
      parameters: [
        {
          name: "searchValue",
          description: "Подстрока для поиска",
        },
        {
          name: "fromIndex",
          description:
            "Необязательный индекс начала поиска в обратном направлении",
        },
      ],
      description:
        "Метод объекта String, выполняет поиск подстроки в исходной строке с конца. Метод возвращает индекс последнего совпадения или -1, если подстрока не найдена.",
      example: "'Hello World World'.lastIndexOf('World')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.lastindexof",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "includes()",
      syntax: "str.includes(searchString[, position])",
      parameters: [
        {
          name: "searchString",
          description: "Подстрока для поиска",
        },
        {
          name: "position",
          description: "Необязательный индекс начала поиска",
        },
      ],
      description:
        "Метод объекта String, проверяет, содержит ли строка указанную подстроку. Возвращает true если содержит, иначе false.",
      example: "'Hello World'.includes('World')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.includes",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "slice()",
      syntax: "str.slice([start[, end]])",
      parameters: [
        {
          name: "start",
          description: "Индекс начала подстроки (может быть отрицательным)",
        },
        {
          name: "end",
          description:
            "Необязательный индекс конца подстроки (не включая, может быть отрицательным)",
        },
      ],
      description:
        "Метод объекта String, возвращает подстроку от индекса, указанного в первом аргументе до индекса, указанного во втором аргументе. Если второй аргумент отсутствует, метод возвращает символы от указанного индекса и до конца строки. Если аргументы не переданы, то возвращает копию строки. Поддерживает отрицательные индексы (отсчёт с конца строки).",
      example: "'Hello World'.slice(6, 11)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.slice",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "substring()",
      syntax: "str.substring(start[, end])",
      parameters: [
        {
          name: "start",
          description: "Индекс начала подстроки",
        },
        {
          name: "end",
          description: "Необязательный индекс конца подстроки (не включая)",
        },
      ],
      description:
        "Метод объекта String, возвращает подстроку от индекса, указанного в первом аргументе до индекса, указанного во втором аргументе. Если второй аргумент отсутствует, метод возвращает символы от указанного индекса и до конца строки. Если значение первого аргумента больше второго, то они автоматически меняются местами. Отрицательные значения интерпретируются как 0.",
      example: "'Hello World'.substring(6, 11)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.substring",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "codePointAt()",
      syntax: "str.codePointAt(index)",
      parameters: [
        {
          name: "index",
          description: "Индекс символа, код которого нужно получить",
        },
      ],
      description:
        "Метод объекта String, возвращает код символа (Unicode) по указанному индексу. Возвращает целое число от 0 до 1114111 (0x10FFFF) или undefined, если индекс выходит за границы строки. Корректно обрабатывает суррогатные пары.",
      example: "'Hello'.codePointAt(1)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.codepointat",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "localeCompare()",
      syntax: "str.localeCompare(compareString[, locales[, options]])",
      parameters: [
        {
          name: "compareString",
          description: "Строка для сравнения с исходной строкой",
        },
        {
          name: "locales",
          description:
            "Необязательная строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: "options",
          description:
            "Необязательный объект с настройками сравнения:\n • sensitivity: 'base' — различает только базовые буквы (a ≠ b), 'accent' — различает диакритики (a ≠ á), 'case' — различает регистр (a ≠ A), 'variant' — различает всё (по умолчанию)\n • ignorePunctuation: true/false — игнорировать знаки пунктуации\n • numeric: true/false — числовое сравнение ('2' > '10' при true)\n • caseFirst: 'upper' — заглавные буквы первыми, 'lower' — строчные первыми, 'false' — порядок локали\n • usage: 'sort' (по умолчанию) или 'search' — цель сравнения (поиск или сортировка)",
        },
      ],
      description:
        "Метод объекта String, сравнивает две строки с учётом правил языка. Возвращает число:\n • отрицательное, если исходная строка меньше строки для сравнения;\n • положительное, если больше;\n • 0, если равны.",
      example: "'ä'.localeCompare('z', 'de', { sensitivity: 'base' })",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.localecompare",
      errors: [
        "TypeError — если this не является строкой.",
        "RangeError — если аргумент (locales) содержит недопустимые значения языковых тегов.",
      ],
    },
    {
      name: "trim()",
      syntax: "str.trim()",
      description:
        "Метод объекта String, создаёт новую строку на основе исходной строки, удаляя все пробельные символы (пробелы, табуляции, неразрывные пробелы) с её начала и конца.",
      example: "'  Hello World  '.trim()",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "repeat()",
      syntax: "str.repeat(count)",
      parameters: [
        {
          name: "count",
          description: "Количество повторений строки (целое число от 0)",
        },
      ],
      description:
        "Метод объекта String, создаёт новую строку, состоящую из повторений исходной строки заданное количество раз. Если аргумент равен 0, возвращает пустую строку.",
      example: "'Hello'.repeat(3)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.repeat",
      errors: [
        "TypeError — если this не является строкой.",
        "RangeError — если аргумент (count) отрицательный или превышает максимально допустимое значение.",
      ],
    },
    {
      name: "String.fromCodePoint()",
      syntax: "String.fromCodePoint(...codePoints)",
      parameters: [
        {
          name: "...codePoints",
          description:
            "Один или несколько кодов Unicode для преобразования в символы",
        },
      ],
      description:
        "Статический метод объекта String, создаёт символ по указанному коду.",
      example: "String.fromCodePoint(65)",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcodepoint",
    },
    {
      name: "concat()",
      syntax: "str.concat(...strings)",
      parameters: [
        {
          name: "...strings",
          description:
            "Одна или несколько строк для объединения с исходной строкой",
        },
      ],
      description:
        "Метод объекта String возвращает новую строку, в которую копирует данные из исходной строки и аргументов.",
      example: "'Hello'.concat(' ', 'World')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.concat",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "split()",
      syntax: "str.split([separator[, limit]])",
      parameters: [
        {
          name: "separator",
          description:
            "Разделитель для разбиения строки (строка или регулярное выражение)",
        },
        {
          name: "limit",
          description:
            "Необязательное ограничение количества элементов в результате",
        },
      ],
      description:
        "Метод объекта String, разбивает строку на массив по указанному разделителю. Если значение второго аргумента меньше длинны строки, то остаток строки будет отброшен.",
      example: "'a,b,c'.split(',')",
      specification:
        "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split",
      errors: ["TypeError — если this не является строкой."],
    },
  ],
};
