export interface IMethod {
  name: string;
  description: string;
  example: string;
  syntax: string;
  errors?: string[];
}

interface IConfig {
  [key: string]: IMethod[];
}

const enum Sections {
  ARRAY = "ARRAY",
  STRING = "STRING",
  NUMBER = "NUMBER",
  SYMBOL = "SYMBOL",
  OBJECT = "OBJECT",
  MAP = "MAP",
  WEAK_MAP = "WEAK_MAP",
  SET = "SET",
  WEAK_SET = "WEAK_SET",
  MATH = "MATH",
  DATE = "DATE",
  JSON = "JSON",
  PROMISE = "PROMISE",
  FUNCTION = "FUNCTION",
  CONSOLE = "CONSOLE",
  UTIL = "UTIL",
}

export const labelSections = {
  [Sections.ARRAY]: "Array",
  [Sections.STRING]: "String",
  [Sections.NUMBER]: "Number",
  [Sections.OBJECT]: "Object",
  [Sections.MAP]: "Map",
  [Sections.WEAK_MAP]: "WeakMap",
  [Sections.SET]: "Set",
  [Sections.WEAK_SET]: "WeakSet",
  [Sections.MATH]: "Math",
  [Sections.DATE]: "Date",
  [Sections.JSON]: "JSON",
  [Sections.PROMISE]: "Promise",
  [Sections.FUNCTION]: "Function",
  [Sections.CONSOLE]: "Console",
  [Sections.SYMBOL]: "Symbol",
  [Sections.UTIL]: "Util",
};

export const config: IConfig = {
  NUMBER: [
    {
      name: "toFixed()",
      syntax: "num.toFixed(digits)",
      description:
        "Метод объекта Number, округляет число до количества знаков после запятой, заданного параметром (digits). Возвращает строку.",
      example: "3.14159.toFixed(2)",
      errors: [
        "RangeError — если параметр digits не в диапазоне от 0 до 20.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toString()",
      syntax: "num.toString([base])",
      description:
        "Метод объекта Number, возвращает строковое представление числа. Параметр base определяет систему счисления для представления числа (от 2 до 36). По умолчанию используется десятичная система счисления (base = 10).",
      example: "(123).toString()",
      errors: [
        "RangeError — если основание (base) не в диапазоне от 2 до 36.",
        "TypeError — если this является null или undefined.",
      ],
    },
    {
      name: "toExponential()",
      syntax: "num.toExponential([fractionDigits])",
      description:
        "Метод объекта Number, возвращает строковое представление числа в экспоненциальной записи. Параметр (fractionDigits) определяет количество цифр после десятичной точки (от 0 до 100).",
      example: "123456.789.toExponential(2)",
      errors: [
        "RangeError — если параметр (fractionDigits) не в диапазоне от 0 до 100.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toPrecision()",
      syntax: "num.toPrecision([precision])",
      description:
        "Метод объекта Number, возвращает строковое представление числа. Параметр (precision) задаёт количество значащих цифр в результате (от 1 до 100).",
      example: "123.456.toPrecision(4)",
      errors: [
        "RangeError — если параметр precision не в диапазоне от 1 до 100.",
        "TypeError — если this не является числом.",
      ],
    },
    {
      name: "toLocaleString()",
      syntax: "num.toLocaleString([locales[, options]])",
      description: `Метод объекта Number, преобразует число в строку с учётом локали (языка и региона) и игнорирует невалидные значения.
        Параметр locales может быть строкой (например, 'ru-RU', 'en-US') или массивом таких строк.
        Параметр options - объект с настройками форматирования:
          • style: 'decimal' (по умолчанию), 'currency', 'percent', 'unit'
          • currency: код валюты (например, 'USD', 'EUR', 'RUB') - обязателен при style: 'currency'
          • currencyDisplay: 'symbol' (по умолчанию), 'code', 'name'
          • useGrouping: true/false - использовать ли разделители групп разрядов
          • minimumIntegerDigits: минимальное количество целых цифр (1-21)
          • minimumFractionDigits: минимальное количество дробных цифр (0-20)
          • maximumFractionDigits: максимальное количество дробных цифр (0-20)
          • minimumSignificantDigits: минимальное количество значащих цифр (1-21)
          • maximumSignificantDigits: максимальное количество значащих цифр (1-21)
        Для style: 'unit' также доступны:
          • unit: единица измерения ('liter', 'meter', 'kilogram', и т.д.)
          • unitDisplay: 'short', 'long', 'narrow'`,
      example:
        "123456.789.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })",
      errors: [
        "RangeError — если параметр locales содержит недопустимые значения языковых тегов.",
        "TypeError — если this не является числом или если options содержит недопустимые свойства.",
      ],
    },
    {
      name: "Number.isInteger()",
      syntax: "Number.isInteger(value)",
      description:
        "Статический метод объекта Number, проверяет, является ли параметр (value) целым числом. Возвращает true, если является целым числом, иначе false.",
      example: "Number.isInteger(42)",
    },
    {
      name: "Number.isNaN()",
      syntax: "Number.isNaN(value)",
      description:
        "Статический метод объекта Number, возвращает true только если параметр (value) имеет тип number и является NaN. Во всех остальных случаях возвращает false.",
      example: "Number.isNaN(NaN)",
    },
    {
      name: "Number.isFinite()",
      syntax: "Number.isFinite(value)",
      description:
        "Статический метод объекта Number, возвращает true только в том случае, если параметр (value) принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.",
      example: "Number.isFinite(42)",
    },
  ],
  STRING: [
    {
      name: "toUpperCase()",
      syntax: "str.toUpperCase()",
      description:
        "Метод объекта String, возвращают новую строку, приведённую в верхний регистр",
      example: "'hello'.toUpperCase()",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "toLowerCase()",
      syntax: "str.toLowerCase()",
      description:
        "Метод объекта String, возвращают новую строку, приведённую в нижний регистр",
      example: "'HELLO'.toLowerCase()",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "startsWith()",
      syntax: "str.startsWith(searchString, [position])",
      description:
        "Метод объекта String, проверяет, начинается ли строка подстрокой, указанной в первом параметре (searchString), если да - возвращает true, иначе false. Второй параметр (position) — индекс, с которого начинать поиск.",
      example: "'Hello World'.startsWith('Hello')",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "endsWith()",
      syntax: "str.endsWith(searchString, [position])",
      description:
        "Метод объекта String, проверяет, заканчивается ли строка подстрокой, указанной в первом параметре (searchString), если да - возвращает true, иначе false. Второй параметр (position) — индекс, с которого начинать поиск.",
      example: "'Hello World'.endsWith('World')",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "replace()",
      syntax: "str.replace(pattern, replacement)",
      description:
        "Метод объекта String, позволяет заменить подстроку в исходной строке. Метод имеет два параметра: первый - подстрока или регулярное выражение для поиска (pattern), второй - подстрока или функция для замены (replacement). Возвращает новую строку.",
      example: "'Hello World'.replace('World', 'JavaScript')",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "replaceAll()",
      syntax: "str.replaceAll(pattern, replacement)",
      description:
        "Метод объекта String, позволяет заменить все вхождения подстроки в исходной строке. Метод имеет два параметра: первый - подстрока или регулярное выражение для поиска (pattern), второй - подстрока или функция для замены (replacement). Возвращает новую строку.",
      example: "'Hello World World'.replaceAll('World', 'JavaScript')",
      errors: [
        "TypeError — если this не является строкой или если первый параметр (pattern) является регулярным выражением без флага 'g'.",
      ],
    },
    {
      name: "at()",
      syntax: "str.at(index)",
      description:
        "Метод объекта String, возвращает символ по индексу, указанному в параметре (index). Поддерживает отрицательные индексы (отсчёт с конца строки). Если индекс выходит за границы строки, возвращает undefined.",
      example: "'Hello'.at(1)",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "charAt()",
      syntax: "str.charAt(index)",
      description:
        "Метод объекта String, возвращает символ по индексу, указанному в параметре (index). Поддерживает только положительные индексы. Если индекс выходит за границы строки - возвращает пустую строку.",
      example: "'Hello'.charAt(1)",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "indexOf()",
      syntax: "str.indexOf(searchValue, [startIndex])",
      description:
        "Метод объекта String, выполняет поиск подстроки в исходной строке. Первый параметр (searchValue) — искомый элемент. Метод возвращает индекс первого совпадения или -1, если подстрока не найдена. Второй параметр (startIndex) определяет начальную позицию для поиска.",
      example: "'Hello World'.indexOf('World')",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "lastIndexOf()",
      syntax: "str.lastIndexOf(searchValue, [fromIndex])",
      description:
        "Метод объекта String, выполняет поиск подстроки в строке с конца. Первый параметр (searchValue) — искомый элемент. Метод возвращает индекс последнего совпадения или -1, если подстрока не найдена. Второй параметр (fromIndex) определяет позицию, с которой начинается поиск в обратном направлении.",
      example: "'Hello World World'.lastIndexOf('World')",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "includes()",
      syntax: "str.includes(searchString, [position])",
      description:
        "Метод объекта String, проверяет, содержит ли строка подстроку, указанную в первом параметре (searchString). Возвращает true если содержит, иначе false. Второй параметр (position) определяет позицию, с которой начинается поиск.",
      example: "'Hello World'.includes('World')",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "slice()",
      syntax: "str.slice([start], [end])",
      description:
        "Метод объекта String, возвращает подстроку от индекса, указанного в первом параметре (start) до индекса, указанного во втором параметре (end) (не включительно). Если второй параметр отсутствует, метод возвращает символы от указанного индекса (start) и до конца строки. Если параметры не переданы, то возвращает копию строки. Поддерживает отрицательные индексы (отсчёт с конца строки). Возвращает новую строку.",
      example: "'Hello World'.slice(6, 11)",
      errors: ["TypeError — если this не является строкой или массивом."],
    },
    {
      name: "substring()",
      syntax: "str.substring(start, [end])",
      description:
        "Метод объекта String, возвращает подстроку от индекса, указанного в первом параметре (start) до индекса, указанного во втором параметре (end) (не включительно). Если второй параметр отсутствует, метод возвращает символы от указанного индекса (start) и до конца строки. Если значение первого параметра (start) больше второго (end), то они автоматически меняются местами. Отрицательные значения интерпретируются как 0. Возвращает новую строку.",
      example: "'Hello World'.substring(6, 11)",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "codePointAt()",
      syntax: "str.codePointAt(index)",
      description:
        "Метод объекта String, возвращает код символа (Unicode) по индексу, указанному в параметре (index). Возвращает целое число от 0 до 1114111 (0x10FFFF) или undefined, если индекс выходит за границы строки. Корректно обрабатывает суррогатные пары.",
      example: "'Hello'.codePointAt(1)",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "localeCompare()",
      syntax: "str.localeCompare(compareString, [locales], [options])",
      description: `Метод объекта String, сравнивает две строки с учётом правил языка. Возвращает число:
          • отрицательное, если исходная строка (str) меньше строки для сравнения, указанной в первом параметре (compareString);
          • положительное, если больше;
          • 0, если равны.
        Второй параметр (locales) (строка или массив строк) определяет локаль для сравнения (например, 'ru-RU', 'en-US').
        Третий параметр (options) (объект) позволяет настроить сравнение:
        • sensitivity: 'base' — различает только базовые буквы (a ≠ b), 'accent' — различает диакритики (a ≠ á), 'case' — различает регистр (a ≠ A), 'variant' — различает всё (по умолчанию)
        • ignorePunctuation: true/false — игнорировать знаки пунктуации
        • numeric: true/false — числовое сравнение ('2' > '10' при true)
        • caseFirst: 'upper' — заглавные буквы первыми, 'lower' — строчные первыми, 'false' — порядок локали
        • usage: 'sort' (по умолчанию) или 'search' — цель сравнения (поиск или сортировка)`,
      example: "'ä'.localeCompare('z', 'de', { sensitivity: 'base' })",
      errors: [
        "TypeError — TypeError — если this не является строкой.",
        "RangeError — если параметр (locales) содержит недопустимые значения языковых тегов.",
      ],
    },
    {
      name: "trim()",
      syntax: "str.trim()",
      description:
        "Метод объекта String, создаёт новую строку на основе исходной строки (str), удаляя все пробельные символы (пробелы, табуляции, неразрывные пробелы) с её начала и конца.",
      example: "'  Hello World  '.trim()",
      errors: ["TypeError — если this не является строкой."],
    },
    {
      name: "repeat()",
      syntax: "str.repeat(count)",
      description:
        "Метод объекта String, создаёт новую строку, состоящую из повторений исходной строки (str). Параметр (count) определяет количество повторений — целое число от 0 до максимально допустимого (обычно 2^28-1). Если параметр (count) равен 0, возвращает пустую строку.",
      example: "'Hello'.repeat(3)",
      errors: [
        "TypeError — если this не является строкой.",
        "RangeError — если параметр (count) отрицательный или превышает максимально допустимое значение.",
      ],
    },
    {
      name: "String.fromCodePoint()",
      syntax: "String.fromCodePoint(code)",
      description:
        "Статический метод объекта String, создаёт символ по коду, указанному в параметре (code).",
      example: "String.fromCodePoint(65)",
    },
    {
      name: "concat()",
      syntax: "str.concat(param1, param2, ..., paramN)",
      description:
        "Метод объекта String, принимает неограниченное количество параметров и возвращает новую строку, в которую копирует данные из исходной строки и параметров.",
      example: "'Hello'.concat(' ', 'World')",
      errors: ["TypeError —если this не является строкой или массивом."],
    },
    {
      name: "split()",
      syntax: "str.split(delim, [limit])",
      description:
        "Метод объекта String, разбивает строку на массив по разделителю, указанному в первом параметре (delim). Можно передать второй параметр (limit) – ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен.",
      example: "'a,b,c'.split(',')",
      errors: ["TypeError — если this не является строкой."],
    },
  ],
  SYMBOL: [
    {
      name: "description",
      syntax: "symbol.description",
      description:
        "Свойство объекта Symbol, которое возвращает имя символа. Возвращает строку, переданную в качестве параметра при создании символа. Для символов, созданных без описания, свойство возвращает undefined. Свойство только для чтения (read-only).",
      example: "Symbol('userId').description",
    },
    {
      name: "Symbol.for()",
      syntax: "Symbol.for(key)",
      description:
        "Статический метод объекта Symbol, служит поиска или создания символа в глобальном реестре. Параметр (key) — имя символа для поиска. Если в реестре уже существует символ с указанным в параметре (key) именем, метод возвращает этот символ. Если такого символа нет, метод создаёт новый символ и записывает его в реестр под ключом, переданным в параметре (key).",
      example: "Symbol.for('id')",
    },
    {
      name: "Symbol.keyFor()",
      syntax: "Symbol.keyFor(symbol)",
      description:
        "Статический метод объекта Symbol, служит для получения имени глобального символа. Параметр (symbol) — глобальный символ. Метод возвращает имя символа (ключ из глобального реестра), переданного в параметре (symbol). Метод не будет работать для не глобальных символов (возвращает undefined).",
      example: "Symbol.keyFor(Symbol.for('id'))",
    },
    {
      name: "Symbol.toPrimitive",
      syntax: "obj[Symbol.toPrimitive](hint)",
      description:
        "Встроенный символ, используется как ключ для определения метода преобразования объекта в примитивное значение. Параметр (hint) — строка, указывающая тип преобразования ('number', 'string', 'default'). Если метод определён для объекта с этим символом в качестве ключа, он будет использоваться для всех хинтов преобразования.",
      example:
        "String(({[Symbol.toPrimitive](hint) { return hint === 'string' ? 'test' : 42; }}))",
      errors: ["TypeError — если метод возвращает не примитивное значение."],
    },
    {
      name: "Symbol.isConcatSpreadable",
      syntax: "obj[Symbol.isConcatSpreadable]",
      description:
        "Встроенный символ, который определяет поведение объекта при вызове метода concat(). Если свойство установлено в true, элементы объекта будут добавлены по отдельности; если false или отсутствует, объект будет добавлен целиком как один элемент.",
      example:
        "[1, 2].concat({0: 'a', 1: 'b', length: 2, [Symbol.isConcatSpreadable]: true})",
    },
    {
      name: "Symbol.iterator",
      syntax: "obj[Symbol.iterator]",
      description:
        "Встроенный символ,который используется для определения метода, позволяющего объекту быть итерируемым. Если объект имеет свойство с ключом Symbol.iterator, то это свойство должно указывать на функцию, которая возвращает объект-итератор.",
      example:
        "[...{[Symbol.iterator]() { let n = 0; return {next() { return n < 3 ? {value: n++, done: false} : {done: true}; }}; }}]",
    },
    {
      name: "Symbol.asyncIterator",
      syntax: "obj[Symbol.asyncIterator]",
      description:
        "Встроенный символ, который используется для определения метода, позволяющего объекту быть асинхронно итерируемым. Если объект имеет свойство с ключом Symbol.asyncIterator, то это свойство должно указывать на функцию, которая возвращает объект-асинхронный итератор.",
      example:
        "(async () => { for await (const item of {[Symbol.asyncIterator]() { let n = 0; return {next() { return n < 3 ? Promise.resolve({value: n++, done: false}) : Promise.resolve({done: true}); }}; }}) { console.log(item); } })()",
    },
  ],
  ARRAY: [
    {
      name: "pop()",
      syntax: "arr.pop()",
      description:
        "Метод объекта Array, удаляет последний элемент из массива и возвращает его.",
      example: "[1, 2, 3].pop()",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "push()",
      syntax: "arr.push(element1, element2, ..., elementN)",
      description:
        "Метод объекта Array, добавляет элемент или несколько элементов в конец массива. Возвращает новую длину массива.",
      example: "[1, 2].push(3, 4)",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "shift()",
      syntax: "arr.shift()",
      description:
        "Метод объекта Array, удаляет из массива первый элемент и возвращает его.",
      example: "[1, 2, 3].shift()",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "unshift()",
      syntax: "arr.unshift(element1, element2, ..., elementN)",
      description:
        "Метод объекта Array, добавляет элемент или несколько элементов в начало массива. Возвращает новую длину массива.",
      example: "[2, 3].unshift(0, 1)",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toString()",
      syntax: "arr.toString()",
      description:
        "Метод объекта Array, возвращает строку в виде списка элементов массива, разделённых запятыми.",
      example: "[1, 2, 3].toString()",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "indexOf()",
      syntax: "arr.indexOf(searchElement, [fromIndex])",
      description:
        "Метод объекта Array, выполняет поиск элемента в исходном массиве. Первый параметр (searchElement) — искомый элемент. Метод возвращает индекс первого совпадения или -1, если элемент не найден. Второй параметр (fromIndex) определяет начальную позицию для поиска.",
      example: "[1, 2, 3, 2, 1].indexOf(2)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "lastIndexOf()",
      syntax: "arr.lastIndexOf(searchElement, [fromIndex])",
      description:
        "Метод объекта Array, выполняет поиск элемента в массиве с конца. Первый параметр (searchElement) — искомый элемент. Метод возвращает индекс последнего совпадения или -1, если элемент не найден. Второй параметр (fromIndex) определяет позицию, с которой начинается поиск в обратном направлении.",
      example: "[1, 2, 3, 2, 1].lastIndexOf(2)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "at()",
      syntax: "arr.at(index)",
      description:
        "Метод объекта Array, возвращает элемент массива по индексу указанному в параметре (index). Поддерживает отрицательные индексы (отсчёт с конца массива). Если индекс выходит за границы массива, возвращает undefined.",
      example: "[10, 20, 30, 40].at(2)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "includes()",
      syntax: "arr.includes(searchElement, [fromIndex])",
      description:
        "Метод объекта Array, проверяет, содержит ли массив элемент, указанный в первом параметре (searchElement), используя алгоритм SameValueZero (правильно обрабатывает NaN в отличие от indexOf). Возвращает true если содержит, иначе false. Второй параметр (fromIndex) определяет позицию, с которой начинается поиск.",
      example: "[1, 2, 3, NaN, 5].includes(NaN)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "slice()",
      syntax: "arr.slice([start], [end])",
      description:
        "Метод объекта Array, возвращает подмассив от индекса, указанного в первом параметре (start) до индекса, указанного во втором параметре (end) (не включительно). Если второй параметр отсутствует, метод возвращает элементы от указанного индекса (start) и до конца массива. Если параметры не переданы, то возвращает поверхностную копию массива. Поддерживает отрицательные индексы (отсчёт с конца массива). Возвращает новый массив.",
      example: "[1, 2, 3, 4, 5].slice(1, 4)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "splice()",
      syntax: "arr.splice(start [, deleteCount, elem1, ..., elemN])",
      description:
        "Метод объекта Array, изменяет массив начиная с индекса, указанного в первом параметре (start), удаляет количество элементов, указанных во втором параметре (deleteCount) и затем вставляет элементы, указанные начиная с третьего параметра (elem1, ..., elemN) на их место. Возвращает массив из удалённых элементов.",
      example: "[1, 2, 3, 4, 5].splice(1, 2, 'a', 'b')",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toSpliced()",
      syntax: "arr.toSpliced(start [, deleteCount, elem1, ..., elemN])",
      description:
        "Метод объекта Array, возвращает новый массив, изменяя копию исходного массива: начиная с индекса, указанного в первом параметре (start), удаляет количество элементов, указанных во втором параметре (deleteCount) и затем вставляет элементы, указанные начиная с третьего параметра (elem1, ..., elemN) на их место.",
      example: "[1, 2, 3, 4, 5].toSpliced(1, 2, 'a', 'b')",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "concat()",
      syntax: "arr.concat(param1, param2, ..., paramN)",
      description:
        "Метод объекта Array, принимает неограниченное количество параметров и возвращает новый массив, в который копирует данные из исходного массива и параметров.",
      example: "[1, 2].concat([3, 4], 5)",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "forEach()",
      syntax: "arr.forEach(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, вызывает функцию, указанную в параметре для каждого элемента массива. Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). Возвращает undefined.",
      example: "[1, 2, 3].forEach(x => console.log(x))",
      errors: [
        "TypeError — если this не является массивом, множеством или коллекцией, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "find()",
      syntax: "arr.find(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, ищет элемент в массиве, соответствующий условию, заданному в функции из параметра (fn). Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). Метод возвращает первый элемент, для которого функция возвращает true. Если ни один элемент не удовлетворяет условию, возвращает undefined.",
      example: "[1, 2, 3, 4].find(x => x > 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "findLast()",
      syntax: "arr.findLast(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, ищет элемент в массиве с конца, соответствующий условию, заданному в функции из параметра (fn). Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). Метод возвращает последний элемент, для которого функция возвращает true. Если ни один элемент не удовлетворяет условию, возвращает undefined.",
      example: "[1, 2, 3, 4].findLast(x => x > 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "findIndex()",
      syntax: "arr.findIndex(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, ищет элемент в массиве, соответствующий условию, заданному в функции из параметра (fn). Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). Метод возвращает индекс первого элемента, для которого функция возвращает true. Если ни один элемент не удовлетворяет условию, возвращает -1.",
      example: "[1, 2, 3, 4].findIndex(x => x > 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "findLastIndex()",
      syntax: "arr.findLastIndex(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, ищет элемент в массиве с конца, соответствующий условию, заданному в функции из параметра (fn). Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). Метод возвращает индекс последнего элемента, для которого функция возвращает true. Если ни один элемент не удовлетворяет условию, возвращает -1.",
      example: "[1, 2, 3, 4].findLastIndex(x => x > 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "filter()",
      syntax: "arr.filter(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, возвращает новый массив со всеми элементами исходного массива, прошедшими проверку, заданную в функции из параметра (fn). Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr).",
      example: "[1, 2, 3, 4].filter(x => x > 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "map()",
      syntax: "arr.map(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, вызывает функцию, указанную в параметре (fn), для каждого элемента массива и возвращает массив результатов выполнения этой функции. Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr).",
      example: "[1, 2, 3].map(x => x * 2)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "sort()",
      syntax: "arr.sort([fn(a, b)])",
      description:
        "Метод объекта Array, используется для сортировки элементов массива. Этот метод изменяет исходный массив и может принимать функцию сравнения (fn) в параметре, которая определяет порядок сортировки. Она принимает 2 параметра: первый элемент для сравнения (a), второй элемент для сравнения (b). Функция должна вернуть число, где:\n • отрицательное значение указывает на то, что первый элемент (a) должен стоять перед вторым элементом (b);\n • положительное значение указывает на то, что первый элемент (a) должен идти после второго элемента (b);\n • ноль указывает, что элементы (a и b) считаются равными.\n Если функция сравнения не передана, элементы массива будут сортироваться в порядке их строкового представления.",
      example: "[3, 1, 4, 2].sort((a, b) => a - b)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "toSorted()",
      syntax: "arr.toSorted([fn(a, b)])",
      description:
        "Метод объекта Array, используется для сортировки элементов массива. Этот метод создаёт новый массив с отсортированными элементами и может принимать функцию сравнения (fn) в параметре, которая определяет порядок сортировки. Она принимает 2 параметра: первый элемент для сравнения (a), второй элемент для сравнения (b). Функция должна вернуть число, где:\n • отрицательное значение указывает на то, что первый элемент (a) должен стоять перед вторым элементом (b);\n • положительное значение указывает на то, что первый элемент (a) должен идти после второго элемента (b);\n • ноль указывает, что элементы (a и b) считаются равными.\n Если функция сравнения не передана, элементы массива будут сортироваться в порядке их строкового представления.",
      example: "[3, 1, 4, 2].toSorted((a, b) => a - b)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "reverse()",
      syntax: "arr.reverse()",
      description:
        "Метод объекта Array, изменяет исходный массив (arr), меняя порядок элементов на обратный.",
      example: "[1, 2, 3].reverse()",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toReversed()",
      syntax: "arr.toReversed()",
      description:
        "Метод объекта Array, создаёт новый массив на освнове исходного (arr) с элементами в обратном порядке.",
      example: "[1, 2, 3].toReversed()",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "join()",
      syntax: "arr.join([glue])",
      description:
        "Метод объекта Array, создаёт строку из элементов массива, вставляя разделитель из параметра (glue) между ними.",
      example: "['a', 'b', 'c'].join(', ')",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "reduce()",
      syntax: "arr.reduce(fn(acc, item, [index], [arr]), [initial])",
      description:
        "Метод объекта Array, используется для вычисления единого значения на основе всего массива. Параметр (fn) — функция, которая может принимать до 4 параметров: аккумулятор (acc), текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого параметра. Второй параметр (initial) — начальное значение аккумулятора.",
      example: "[1, 2, 3].reduce((sum, x) => sum + x, 0)",
      errors: [
        "TypeError — если this не является массивом или если параметр (fn) не является функцией, или если массив пуст и не указано начальное значение.",
      ],
    },
    {
      name: "reduceRight()",
      syntax: "arr.reduceRight(fn(acc, item, [index], [arr]), [initial])",
      description:
        "Метод объекта Array, используется для вычисления единого значения на основе всего массива, проходя массив справа налево. Параметр (fn) — функция, которая может принимать до 4 параметров: аккумулятор (acc), текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr). При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого параметра. Второй параметр (initial) — начальное значение аккумулятора.",
      example: "[1, 2, 3].reduceRight((sum, x) => sum + x, 0)",
      errors: [
        "TypeError — если this не является массивом или если параметр (fn) не является функцией, или если массив пуст и не указано начальное значение.",
      ],
    },
    {
      name: "fill()",
      syntax: "arr.fill(x, [start], [end])",
      description:
        "Метод объекта Array, заполняет исходный массив повторяющимися значениями и возвращает его. Метод может принимать до 3 параметров: значение, которым будет заполняться массив (x), индекс, с которого начинается заполнение массива (start), индекс, на котором заканчивается заполнение массива (end). Если параметры (start) и (end) не переданы, то массив будет полностью заполнен значением из параметра (x).",
      example: "[1, 2, 3, 4, 5].fill(0, 1, 4)",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "copyWithin()",
      syntax: "arr.copyWithin(target, [start], [end])",
      description:
        "Метод объекта Array, копирует свои элементы, начиная с индекса, указанного во втором параметре (start), до индекса указанного в третьем параметре (end), на позицию указанную в первом параметре (target). Метод изменяет текущий массив и возвращает его.",
      example: "[1, 2, 3, 4, 5].copyWithin(0, 3)",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "flat()",
      syntax: "arr.flat([depth])",
      description:
        "Метод объекта Array, возвращает новый массив, в котором все элементы вложенных подмассивов рекурсивно подняты на уровень, указанный в параметре (depth).",
      example: "[[1, 2], [3, [4, 5]]].flat(2)",
      errors: [
        "TypeError — если this не является массивом или если параметр (depth) не является числом.",
      ],
    },
    {
      name: "some()",
      syntax: "arr.some(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, возвращает true если хотя бы один элемент удовлетворяет условию, заданному в функции из параметра (fn), иначе false. Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr).",
      example: "[1, 2, 3, 4].some(x => x > 3)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "every()",
      syntax: "arr.every(fn(item, [index], [arr]))",
      description:
        "Метод объекта Array, возвращает true если все элементы удовлетворяют условию, заданному в функции из параметра (fn), иначе false. Эта функция может принимать до трёх параметров: текущий элемент массива (item), индекс текущего элемента (index), массив, по которому производится итерация (arr).",
      example: "[1, 2, 3, 4].every(x => x > 0)",
      errors: [
        "TypeError — если this не является массивом, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "with()",
      syntax: "arr.with(index, value)",
      description:
        "Метод объекта Array, возвращает новый массив с изменённым элементом по указанному индексу. Первый параметр (index) – индекс изменяемого элемента, второй параметр (value) – новое значение этого элемента.",
      example: "[1, 2, 3, 4, 5].with(2, 'three')",
      errors: [
        "TypeError — если this не является массивом.",
        "RangeError — если параметр (index) выходит за границы массива.",
      ],
    },
    {
      name: "Array.isArray()",
      syntax: "Array.isArray(arr)",
      description:
        "Статический метод объекта Array, возвращает true если переданный параметр (arr) является массивом, иначе false.",
      example: "Array.isArray([1, 2, 3])",
    },
    {
      name: "Array.from()",
      syntax: "Array.from(arrayLike, [mapFn], [thisArg])",
      description:
        "Статический метод объекта Array, делает из итерируемого объекта или псевдомассива «настоящий» массив. Второй параметр (mapFn) может быть функцией, которая будет применена к каждому элементу перед добавлением в массив, а третий параметр (thisArg) позволяет установить this для этой функции.",
      example: "Array.from('hello')",
    },
    {
      name: "keys()",
      syntax: "arr.keys()",
      description:
        "Метод объекта Array, возвращает итерируемый объект по ключам (индексам) массива.",
      example: "[...['a', 'b', 'c'].keys()]",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "values()",
      syntax: "arr.values()",
      description:
        "Метод объекта Array, возвращает итерируемый объект по значениям массива.",
      example: "[...['a', 'b', 'c'].values()]",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "entries()",
      syntax: "arr.entries()",
      description:
        "Метод объекта Array, возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for of.",
      example: "[...['a', 'b', 'c'].entries()]",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
  ],
  OBJECT: [
    {
      name: "assign()",
      syntax: "Object.assign(dest, x, ..., xn)",
      description:
        "Статический метод объекта Object, принимает неограниченное количество параметров. Первый параметр (dest) — целевой объект, остальные (x, ..., xn) являются исходными объектами. Метод копирует собственные перечисляемые свойства всех исходных объектов (x, ..., xn) в целевой объект (dest). Происходит только поверхностное копирование, если свойство является объектом, то будет скопирована только ссылка. Также копирует как строковые, так и символьные свойства. Возвращает целевой объект (dest).",
      example: "Object.assign({}, {a: 1}, {b: 2})",
      errors: [
        "TypeError — если первый параметр (dest) является null или undefined.",
      ],
    },
    {
      name: "toString()",
      syntax: "obj.toString()",
      description:
        "Метод объекта Object, возвращает примитивное значение объекта. По умолчанию обычный объект имеет метод toString, который возвращает строку '[object Object]'. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при строковом преобразовании.",
      example: "({}).toString()",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "valueOf()",
      syntax: "obj.valueOf()",
      description:
        "Метод объекта Object, возвращает примитивное значение объекта. По умолчанию обычный объект имеет метод valueOf, который возвращает сам объект. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при математических операциях.",
      example: "({}).valueOf()",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "Object.is()",
      syntax: "Object.is(value1, value2)",
      description:
        "Статический метод объекта Object, сравнивает два значения и определяет, являются ли они строго равными. Он работает аналогично оператору строгого равенства, кроме двух случаев:\n Object.is(NaN, NaN) === true\n Object.is(0, -0) === false.",
      example: "Object.is(NaN, NaN)",
    },
    {
      name: "Object.keys()",
      syntax: "Object.keys(obj)",
      description:
        "Статический метод объекта Object, возвращает массив строковых ключей объекта из параметра (obj). Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.keys({a: 1, b: 2, c: 3})",
      errors: ["TypeError — если параметр (obj) является null или undefined."],
    },
    {
      name: "Object.values()",
      syntax: "Object.values(obj)",
      description:
        "Статический метод объекта Object, возвращает массив значений объекта из параметра (obj). Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.values({a: 1, b: 2, c: 3})",
      errors: ["TypeError — если параметр (obj) является null или undefined."],
    },
    {
      name: "Object.entries()",
      syntax: "Object.entries(obj)",
      description:
        "Статический метод объекта Object, возвращает массив по парам вида [ключ, значение] из параметра (obj). Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.entries({a: 1, b: 2, c: 3})",
      errors: ["TypeError — если параметр (obj) является null или undefined."],
    },
    {
      name: "Object.fromEntries()",
      syntax: "Object.fromEntries(arr)",
      description:
        "Статический метод объекта Object, берет из параметра итерируемый объект пар вида [ключ, значение] и создаёт из него объект. Обратный метод к Object.entries().",
      example: "Object.fromEntries([['a', 1], ['b', 2], ['c', 3]])",
      errors: [
        "TypeError — если параметр (arr) не является итерируемым объектом с парами вида [ключ, значение].",
      ],
    },
  ],
  MAP: [
    {
      name: "size",
      syntax: "map.size",
      description:
        "Свойство объекта Map, возвращает количество элементов. Свойство только для чтения (read-only).",
      example: "new Map([['a', 1], ['b', 2]]).size",
      errors: [
        "TypeError — если this не является коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "forEach()",
      syntax: "map.forEach(fn(value, [key], [map]))",
      description:
        "Метод объекта Map, вызывает функцию, указанную в параметре для каждой пары (ключ/значение) коллекции. Эта функция может принимать до трёх параметров: значение (value), ключ (key), объект по которому производится итерация (map). Возвращает undefined.",
      example:
        "new Map([['a', 1], ['b', 2]]).forEach((v, k) => console.log(k, v))",
      errors: [
        "TypeError — если this не является множеством, массивом  или коллекцией, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "set()",
      syntax: "map.set(key, value)",
      description:
        "Метод объекта Map, записывает по ключу, указанному в первом параметре, значение, указанное во втором параметре. Каждый вызов set() возвращает объект Map, что позволяет использовать цепочки вызовов. Если ключ уже существует в Map, его значение обновляется.",
      example: "new Map().set('a', 1).set('b', 2).get('a')",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "get()",
      syntax: "map.get(key)",
      description:
        "Метод объекта Map, возвращает значение по ключу, указанному в параметре, или undefined если ключ отсутствует.",
      example: "new Map([['a', 1], ['b', 2]]).get('a')",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "has()",
      syntax: "map.has(key)",
      description:
        "Метод объекта Map, возвращает true, если ключ, указанный в параметре, присутствует в коллекции, иначе false.",
      example: "new Map([['a', 1], ['b', 2]]).has('a')",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "delete()",
      syntax: "map.delete(key)",
      description:
        "Метод объекта Map, удаляет элемент (пару вида «ключ/значение») по ключу, указанному в параметре и возвращает true, если оно было в коллекции на момент вызова, иначе false.",
      example: "new Map([['a', 1], ['b', 2]]).delete('a')",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "clear()",
      syntax: "map.clear()",
      description: "Метод объекта Map, очищает коллекцию от всех элементов.",
      example: "new Map([['a', 1], ['b', 2]]).clear()",
      errors: [
        "TypeError — если this не является коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "keys()",
      syntax: "map.keys()",
      description:
        "Метод объекта Map, возвращает итерируемый объект по ключам коллекции.",
      example: "[...new Map([['a', 1], ['b', 2]]).keys()]",
      errors: [
        "TypeError — если this не является  коллекцией (map), массивом или множеством (set).",
      ],
    },
    {
      name: "values()",
      syntax: "map.values()",
      description:
        "Метод объекта Map, возвращает итерируемый объект по значениям коллекции.",
      example: "[...new Map([['a', 1], ['b', 2]]).values()]",
      errors: [
        "TypeError — если this не является  коллекцией (map), массивом или множеством (set).",
      ],
    },
    {
      name: "entries()",
      syntax: "map.entries()",
      description:
        "Метод объекта Map, возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for of.",
      example: "[...new Map([['a', 1], ['b', 2]]).entries()]",
      errors: [
        "TypeError — если this не является  коллекцией (map), массивом или множеством (set).",
      ],
    },
  ],
  WEAK_MAP: [
    {
      name: "set()",
      syntax: "weakMap.set(key, value)",
      description:
        "Метод объекта WeakMap, записывает по ключу, указанному в первом параметре, значение, указанное во втором параметре. Каждый вызов set() возвращает объект WeakMap, что позволяет использовать цепочки вызовов. Ключами в WeakMap могут быть только объекты.",
      example: "new WeakMap().set({}, 1).set({}, 2).get({})",
      errors: [
        "TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.",
      ],
    },
    {
      name: "get()",
      syntax: "weakMap.get(key)",
      description:
        "Метод объекта WeakMap, возвращает значение по ключу, указанному в переданном параметре, или undefined если ключ отсутствует.",
      example: "new WeakMap().set({}, 1).get({})",
      errors: [
        "TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.",
      ],
    },
    {
      name: "has()",
      syntax: "weakMap.has(key)",
      description:
        "Метод объекта WeakMap, возвращает true, если ключ, указанный в переданном параметре, присутствует в коллекции, иначе false.",
      example: "new WeakMap().set({}, 1).has({})",
      errors: [
        "TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.",
      ],
    },
    {
      name: "delete()",
      syntax: "weakMap.delete(key)",
      description:
        "Метод объекта WeakMap, удаляет элемент (пару вида «ключ/значение») по ключу, указанному в параметре и возвращает true, если оно было в коллекции на момент вызова, иначе false.",
      example: "new WeakMap().set({}, 1).delete({})",
      errors: [
        "TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.",
      ],
    },
  ],
  SET: [
    {
      name: "size",
      syntax: "set.size",
      description:
        "Свойство объекта Set, возвращает количество элементов. Свойство только для чтения (read-only).",
      example: "new Set([1, 2, 3]).size",
      errors: [
        "TypeError — если this не является множеством (set) или коллекцией (map).",
      ],
    },
    {
      name: "forEach()",
      syntax: "set.forEach(fn(value, [valueAgain], [set]))",
      description:
        "Метод объекта Set, вызывает функцию, указанную в параметре для каждого значения коллекции. Эта функция может принимать до трёх параметров: значение (value), снова значение (valueAgain - для совместимости с объектом Map), объект по которому производится итерация (set). Возвращает undefined.",
      example: "new Set([1, 2, 3]).forEach(v => console.log(v))",
      errors: [
        "TypeError — если this не является коллекцией, массивом  или множеством, или если параметр (fn) не является функцией.",
      ],
    },
    {
      name: "add()",
      syntax: "set.add(value)",
      description:
        "Метод объекта Set, добавляет значение, указанное в параметре, (если оно уже есть во множестве, то ничего не делает), возвращает тот же объект Set.",
      example: "new Set([1, 2]).add(3).add(4)",
      errors: [
        "TypeError — если this не является множеством (set или weakSet).",
      ],
    },
    {
      name: "has()",
      syntax: "set.has(value)",
      description:
        "Метод объекта Set, возвращает true, если значение, указанное в параметре, присутствует в множестве, иначе false.",
      example: "new Set([1, 2, 3]).has(2)",
      errors: [
        "TypeError — если this не является множеством (set или weakSet).",
      ],
    },
    {
      name: "delete()",
      syntax: "set.delete(value)",
      description:
        "Метод объекта Set, удаляет значение, указанное в параметре, и возвращает true, если оно было в множестве на момент вызова, иначе false.",
      example: "new Set([1, 2, 3]).delete(2)",
      errors: [
        "TypeError — если this не является множеством (set или weakSet).",
      ],
    },
    {
      name: "clear()",
      syntax: "set.clear()",
      description: "Метод объекта Set, очищает коллекцию от всех элементов.",
      example: "new Set([1, 2, 3]).clear()",
      errors: [
        "TypeError — если this не является множеством (set) или коллекцией (map).",
      ],
    },
    {
      name: "keys()",
      syntax: "set.keys()",
      description:
        "Метод объекта Set, возвращает итерируемый объект по ключам множества (ключами в Set являются значения). Для Set методы keys() и values() идентичны.",
      example: "[...new Set([1, 2, 3]).keys()]",
      errors: [
        "TypeError — если this не является  множеством (set), массивом или коллекцией (map).",
      ],
    },
    {
      name: "values()",
      syntax: "set.values()",
      description:
        "Метод объекта Set, возвращает итерируемый объект по значениям множества. Для Set методы values() и keys() идентичны.",
      example: "[...new Set([1, 2, 3]).values()]",
      errors: [
        "TypeError — если this не является  множеством (set), массивом или коллекцией (map).",
      ],
    },
    {
      name: "entries()",
      syntax: "set.entries()",
      description:
        "Метод объекта Set, возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for of. В Set ключ и значение одинаковы.",
      example: "[...new Set([1, 2, 3]).entries()]",
      errors: [
        "TypeError — если this не является  множеством (set), массивом или коллекцией (map).",
      ],
    },
  ],
  WEAK_SET: [
    {
      name: "add()",
      syntax: "weakSet.add(value)",
      description:
        "Метод объекта WeakSet, добавляет значение, указанное в переданном параметре, (если оно уже есть во множестве, то ничего не делает), возвращает тот же объект WeakSet.",
      example: "new WeakSet().add({}).add({})",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
    {
      name: "has()",
      syntax: "weakSet.has(value)",
      description:
        "Метод объекта WeakSet, возвращает true, если значение, указанное в параметре, присутствует в множестве, иначе false.",
      example: "new WeakSet().add({}).has({})",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
    {
      name: "delete()",
      syntax: "weakSet.delete(value)",
      description:
        "Метод объекта WeakSet, удаляет значение, указанное в параметре, и возвращает true, если оно было в множестве на момент вызова, иначе false.",
      example: "new WeakSet().add({}).delete({})",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
  ],
  UTIL: [
    {
      name: "structuredClone()",
      syntax: "structuredClone(param)",
      description:
        "Встроенная функция, возвращает глубокую копию параметра (param).",
      example: "structuredClone({a: 1, b: {c: 2}})",
      errors: [
        "DataCloneError — возникает при клонировании функций или DOM-элементов.",
      ],
    },
    {
      name: "Symbol()",
      syntax: "Symbol([description])",
      description:
        "Встроенная функция, позволяющая создавать уникальные символы. Параметр (description) определяет имя/описание символа. Не является конструктором.",
      example: "Symbol('id')",
      errors: [
        "TypeError — если вызывается как конструктор с оператором 'new'.",
      ],
    },
    {
      name: "isNaN()",
      syntax: "isNaN(param)",
      description:
        "Встроенная функция, которая преобразует параметр (param) в число и проверяет является ли он NaN. Возвращает true, если является, и false, если является числом.",
      example: "isNaN('abc')",
    },
    {
      name: "isFinite()",
      syntax: "isFinite(param)",
      description:
        "Встроенная функция, которая преобразует параметр (param) в число и возвращает true, если он является обычным числом, т.е. не NaN/Infinity/-Infinity, иначе false.",
      example: "isFinite('123')",
    },
    {
      name: "parseInt()",
      syntax: "parseInt(string, [radix])",
      description:
        "Встроенная функция, преобразует строку в целое число. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру. Второй параметр (radix) определяет систему счисления (от 2 до 36).",
      example: "parseInt('123px')",
    },
    {
      name: "parseFloat()",
      syntax: "parseFloat(string)",
      description:
        "Встроенная функция, преобразует строку в число с плавающей точкой. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",
      example: "parseFloat('12.34px')",
    },
  ],
};
