export const configObject = {
  OBJECT: [
    {
      name: "toString()",
      syntax: "obj.toString()",
      description:
        "Метод объекта Object, возвращает примитивное значение объекта. По умолчанию обычный объект имеет метод toString, который возвращает строку '[object Object]'. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при строковом преобразовании.",
      example: "({}).toString()",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tostring",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "valueOf()",
      syntax: "obj.valueOf()",
      description:
        "Метод объекта Object, возвращает примитивное значение объекта. По умолчанию обычный объект имеет метод valueOf, который возвращает сам объект. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при математических операциях.",
      example: "({}).valueOf()",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.valueof",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "Object.assign()",
      syntax: "Object.assign(dest, source1, ..., sourceN)",
      parameters: [
        {
          name: "dest",
          description: "Целевой объект, в который будут скопированы свойства",
        },
        {
          name: "source1, ..., sourceN",
          description: "Исходные объекты, чьи свойства будут скопированы",
        },
      ],
      description:
        "Статический метод объекта Object, копирует собственные перечисляемые свойства всех исходных объектов в целевой объект. Происходит только поверхностное копирование — если свойство является объектом, то будет скопирована только ссылка. Копирует как строковые, так и символьные свойства. Возвращает целевой объект.",
      example: "Object.assign({}, {a: 1}, {b: 2})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign",
      errors: [
        "TypeError — если первый аргумент (dest) является null или undefined.",
      ],
    },
    {
      name: "Object.is()",
      syntax: "Object.is(value1, value2)",
      parameters: [
        {
          name: "value1",
          description: "Первое значение для сравнения",
        },
        {
          name: "value2",
          description: "Второе значение для сравнения",
        },
      ],
      description:
        "Статический метод объекта Object, сравнивает два значения и определяет, являются ли они строго равными. Работает аналогично оператору строгого равенства, кроме двух случаев:\n • Object.is(NaN, NaN) === true\n • Object.is(0, -0) === false",
      example: "Object.is(NaN, NaN)",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.is",
    },
    {
      name: "Object.keys()",
      syntax: "Object.keys(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, ключи которого нужно получить",
        },
      ],
      description:
        "Статический метод объекта Object, возвращает массив строковых ключей объекта. Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.keys({a: 1, b: 2, c: 3})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.keys",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.values()",
      syntax: "Object.values(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, значения свойств которого нужно получить",
        },
      ],
      description:
        "Статический метод объекта Object, возвращает массив значений объекта. Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.values({a: 1, b: 2, c: 3})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.values",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.entries()",
      syntax: "Object.entries(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, пары ключ-значение которого нужно получить",
        },
      ],
      description:
        "Статический метод объекта Object, возвращает массив по парам вида [ключ, значение]. Игнорирует символьные свойства и перебирает только собственные.",
      example: "Object.entries({a: 1, b: 2, c: 3})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.entries",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.fromEntries()",
      syntax: "Object.fromEntries(iterable)",
      parameters: [
        {
          name: "iterable",
          description:
            "Итерируемый объект, содержащий пары вида [ключ, значение]",
        },
      ],
      description:
        "Статический метод объекта Object, преобразует список пар [ключ, значение] в обычный JavaScript-объект. Каждая пара из итерируемого объекта становится свойством в результирующем объекте, где первый элемент пары — ключ, второй — значение. Является обратной операцией к Object.entries().",
      example: "Object.fromEntries([['a', 1], ['b', 2], ['c', 3]])",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.fromentries",
      errors: [
        "TypeError — если аргумент (iterable) не является итерируемым объектом с парами вида [ключ, значение].",
      ],
    },
    {
      name: "Object.getOwnPropertyDescriptor()",
      syntax: "Object.getOwnPropertyDescriptor(obj, prop)",
      parameters: [
        {
          name: "obj",
          description: "Объект, из которого получаем информацию о свойстве",
        },
        {
          name: "prop",
          description: "Имя свойства, для которого нужно получить дескриптор",
        },
      ],
      description:
        "Статический метод объекта Object, позволяет получить полную информацию о свойстве объекта. Метод возвращает объект-дескриптор свойства, который содержит значение свойства и все его флаги.",
      example: "Object.getOwnPropertyDescriptor({a: 1}, 'a')",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptor",
      errors: [
        "TypeError — если первый аргумент (obj) равен null или undefined.",
      ],
    },
    {
      name: "Object.defineProperty()",
      syntax: "Object.defineProperty(obj, prop, descriptor)",
      parameters: [
        {
          name: "obj",
          description:
            "Объект, в котором будет определено или изменено свойство",
        },
        {
          name: "prop",
          description: "Имя свойства, для которого нужно применить дескриптор",
        },
        {
          name: "descriptor",
          description: "Объект-дескриптор, описывающий свойство",
        },
      ],
      description:
        "Статический метод объекта Object, позволяет изменить или определить свойство объекта. Если свойство существует, метод обновит его значение и флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение false.",
      example: "Object.defineProperty({}, 'prop', {value: 1, writable: true})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperty",
      errors: [
        "TypeError — если первый аргумент (obj) равен null или undefined.",
      ],
    },
    {
      name: "Object.defineProperties()",
      syntax: "Object.defineProperties(obj, properties)",
      parameters: [
        {
          name: "obj",
          description:
            "Объект, в котором будут определены или изменены свойства",
        },
        {
          name: "properties",
          description:
            "Объект, ключи которого являются именами свойств, а значения — дескрипторами этих свойств",
        },
      ],
      description:
        "Статический метод объекта Object, позволяет изменять или определять множество свойств одновременно. Удобен для массового определения свойств с различными дескрипторами.",
      example: "Object.defineProperties({}, {a: {value: 1}, b: {value: 2}})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperties",
      errors: [
        "TypeError — если первый аргумент (obj) равен null или undefined.",
      ],
    },
    {
      name: "Object.getOwnPropertyDescriptors()",
      syntax: "Object.getOwnPropertyDescriptors(obj)",
      parameters: [
        {
          name: "obj",
          description:
            "Объект, для которого нужно получить дескрипторы всех собственных свойств",
        },
      ],
      description:
        "Статический метод объекта Object, возвращает объект, содержащий дескрипторы для всех собственных свойств целевого объекта. Вместе с Object.defineProperties() позволяет клонировать объект с сохранением всех флагов свойств.",
      example: "Object.getOwnPropertyDescriptors({a: 1, b: 2})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptors",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.preventExtensions()",
      syntax: "Object.preventExtensions(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который нужно сделать нерасширяемым",
        },
      ],
      description:
        "Статический метод объекта Object, запрещает добавление новых свойств к объекту. После вызова этого метода объект становится 'нерасширяемым' — нельзя добавлять новые свойства, но существующие можно изменять или удалять.",
      example: "Object.preventExtensions({a: 1})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.preventextensions",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.isExtensible()",
      syntax: "Object.isExtensible(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который необходимо проверить на расширяемость",
        },
      ],
      description:
        "Статический метод объекта Object, проверяет, является ли объект расширяемым (можно ли добавлять к нему новые свойства). Возвращает true, если объект расширяемый, и false, если нет.",
      example: "Object.isExtensible({a: 1})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isextensible",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.seal()",
      syntax: "Object.seal(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который нужно запечатать",
        },
      ],
      description:
        "Статический метод объекта Object, запрещает добавление и удаление свойств, а также изменение их дескрипторов. Устанавливает configurable: false для всех существующих свойств, но позволяет изменять их значения, если writable: true.",
      example: "Object.seal({a: 1, b: 2})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.seal",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.isSealed()",
      syntax: "Object.isSealed(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который необходимо проверить на запечатанность",
        },
      ],
      description:
        "Статический метод объекта Object, проверяет, запечатан ли объект. Возвращает true, если объект запечатан (нельзя добавлять/удалять свойства и изменять их дескрипторы), иначе возвращает false.",
      example: "Object.isSealed(Object.seal({a: 1}))",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.issealed",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.freeze()",
      syntax: "Object.freeze(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который нужно заморозить",
        },
      ],
      description:
        "Статический метод объекта Object, делает объект полностью неизменяемым. Запрещает добавление, удаление и изменение свойств, а также изменение их дескрипторов. Устанавливает configurable: false и writable: false для всех существующих свойств.",
      example: "Object.freeze({a: 1, b: 2})",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.freeze",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
    {
      name: "Object.isFrozen()",
      syntax: "Object.isFrozen(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, который необходимо проверить на замороженность",
        },
      ],
      description:
        "Статический метод объекта Object, проверяет, заморожен ли объект. Возвращает true, если объект полностью неизменяем (нельзя добавлять/удалять/изменять свойства), иначе возвращает false.",
      example: "Object.isFrozen(Object.freeze({a: 1}))",
      specification:
        "https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isfrozen",
      errors: ["TypeError — если аргумент (obj) является null или undefined."],
    },
  ],
};
