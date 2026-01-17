 export const configSymbol = {
  SYMBOL: [
    {
      name: "description",
      syntax: "symbol.description",
      description:
        "Свойство объекта Symbol, которое возвращает имя символа. Для символов, созданных без описания, свойство возвращает undefined. Свойство только для чтения (read-only).",
      example: "Symbol('userId').description",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.prototype.description",
    },
    {
      name: "Symbol.for()",
      syntax: "Symbol.for(key)",
      parameters: [
        {
          name: "key",
          description:
            "Имя символа для поиска или создания в глобальном реестре",
        },
      ],
      description:
        "Статический метод объекта Symbol, используется для поиска или создания символа в глобальном реестре. Если в реестре уже существует символ с указанным именем, метод возвращает этот символ. Если такого символа нет, метод создаёт новый символ и записывает его в реестр под указанным ключом.",
      example: "Symbol.for('id')",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.for",
    },
    {
      name: "Symbol.keyFor()",
      syntax: "Symbol.keyFor(sym)",
      parameters: [
        {
          name: "sym",
          description:
            "Глобальный символ, имя которого нужно получить из реестра",
        },
      ],
      description:
        "Статический метод объекта Symbol, используется для получения имени глобального символа из реестра. Метод возвращает имя символа (ключ из глобального реестра) или undefined, если символ не является глобальным.",
      example: "Symbol.keyFor(Symbol.for('id'))",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.keyfor",
    },
    {
      name: "Symbol.toPrimitive",
      syntax: "obj[Symbol.toPrimitive](hint)",
      parameters: [
        {
          name: "hint",
          description: "Тип преобразования: 'number', 'string' или 'default'",
        },
      ],
      description:
        "Встроенный символ, используется как ключ для определения метода преобразования объекта в примитивное значение. Если метод определён для объекта с этим символом в качестве ключа, он будет использоваться для всех преобразований объекта в примитив.",
      example:
        "String(({[Symbol.toPrimitive](hint) { return hint === 'string' ? 'test' : 42; }}))",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.toprimitive",
      errors: ["TypeError — если метод возвращает не примитивное значение."],
    },
    {
      name: "Symbol.isConcatSpreadable",
      syntax: "obj[Symbol.isConcatSpreadable]",
      description:
        "Встроенный символ, который определяет поведение объекта при вызове метода concat(). Если свойство установлено в true, элементы объекта будут добавлены по отдельности; если false или отсутствует, объект будет добавлен целиком как один элемент.",
      example:
        "[1, 2].concat({0: 'a', 1: 'b', length: 2, [Symbol.isConcatSpreadable]: true})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.isconcatspreadable",
    },
    {
      name: "Symbol.iterator",
      syntax: "obj[Symbol.iterator]",
      description:
        "Встроенный символ, который используется для определения метода, позволяющего объекту быть итерируемым. Если объект имеет свойство с ключом Symbol.iterator, то это свойство должно указывать на функцию, которая возвращает объект-итератор.",
      example:
        "[...{[Symbol.iterator]() { let n = 0; return {next() { return n < 3 ? {value: n++, done: false} : {done: true}; }}; }}]",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.iterator",
    },
    {
      name: "Symbol.asyncIterator",
      syntax: "obj[Symbol.asyncIterator]",
      description:
        "Встроенный символ, который используется для определения метода, позволяющего объекту быть асинхронно итерируемым. Если объект имеет свойство с ключом Symbol.asyncIterator, то это свойство должно указывать на функцию, которая возвращает объект-асинхронный итератор.",
      example:
        "(async () => { for await (const item of {[Symbol.asyncIterator]() { let n = 0; return {next() { return n < 3 ? Promise.resolve({value: n++, done: false}) : Promise.resolve({done: true}); }}; }}) { console.log(item); } })()",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.asynciterator",
    },
    {
      name: "Symbol.species",
      syntax: "static get [Symbol.species]()",
      parameters: [],
      description:
        "Специальный статический геттер, позволяет указать, какой конструктор будет использоваться для создания новых объектов внутри класса. Он используется, когда объект класса передаётся в некоторые встроенные методы, такие как map, filter и slice, которые возвращают новый объект того же типа. Если бы мы хотели, чтобы методы map, filter и т. д. возвращали обычные массивы, мы могли бы вернуть Array в Symbol.species. По умолчанию Symbol.species возвращает this, то есть конструктор текущего класса.",
      example: "class MyArray extends Array { static get [Symbol.species]() { return Array; } }",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.species",
    },
    {
      name: "Symbol.hasInstance",
      syntax: "static [Symbol.hasInstance](obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, для которого проверяется принадлежность конструктору"
        }
      ],
      description:
        "Статический метод, используется для определения того, распознаёт ли конструктор заданный объект как свой экземпляр. Метод вызывается оператором instanceof. По умолчанию проверяет, находится ли объект в цепочке прототипов конструктора. Можно переопределить этот метод в классе, чтобы настроить поведение оператора instanceof и задать кастомную логику проверки принадлежности объектов к классу.",
      example: "class MyClass { static [Symbol.hasInstance](obj) { return Array.isArray(obj); } }",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.hasinstance",
    },
    {
      name: "Symbol.toStringTag",
      syntax: "get [Symbol.toStringTag]()",
      parameters: [],
      description:
        "Встроенный символ, который позволяет объектам определять собственное строковое представление их типа. Значение этого свойства используется методом Object.prototype.toString() для создания строки '[object Type]', где Type заменяется значением Symbol.toStringTag. Если свойство не определено, используется имя конструктора по умолчанию или 'Object'.",
      example: "class MyClass { get [Symbol.toStringTag]() { return 'MyCustomClass'; } }",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.tostringtag",
    }
  ],
};
