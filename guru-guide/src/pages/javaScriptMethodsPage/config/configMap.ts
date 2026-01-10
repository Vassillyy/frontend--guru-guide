export const configMap = {
  MAP: [
    {
      name: "size",
      syntax: "map.size",
      description:
        "Свойство объекта Map, возвращает количество элементов. Свойство только для чтения (read-only).",
      example: "new Map([['a', 1], ['b', 2]]).size",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size",
      errors: [
        "TypeError — если this не является коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "forEach()",
      syntax: "map.forEach(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, вызываемая для каждой пары ключ-значение",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Map, вызывает указанную функцию для каждой пары (ключ/значение) коллекции. Эта функция может принимать до трёх аргументов: значение, ключ, объект по которому производится итерация. Возвращает undefined.",
      example:
        "new Map([['a', 1], ['b', 2]]).forEach((v, k) => console.log(k, v))",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.foreach",
      errors: [
        "TypeError — если this не является множеством (set), массивом или коллекцией (map), или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "set()",
      syntax: "map.set(key, value)",
      parameters: [
        {
          name: "key",
          description: "Ключ, по которому будет установлено значение",
        },
        {
          name: "value",
          description: "Значение, которое будет ассоциировано с ключом",
        },
      ],
      description:
        "Метод объекта Map, записывает значение по ключу. Каждый вызов set() возвращает объект Map, что позволяет использовать цепочки вызовов. Если ключ уже существует в Map, его значение обновляется.",
      example: "new Map().set('a', 1).set('b', 2).get('a')",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.set",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "get()",
      syntax: "map.get(key)",
      parameters: [
        {
          name: "key",
          description: "Ключ, значение по которому нужно получить",
        },
      ],
      description:
        "Метод объекта Map, возвращает значение по ключу или undefined если ключ отсутствует.",
      example: "new Map([['a', 1], ['b', 2]]).get('a')",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.get",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "has()",
      syntax: "map.has(key)",
      parameters: [
        {
          name: "key",
          description: "Ключ, наличие которого проверяется",
        },
      ],
      description:
        "Метод объекта Map, возвращает true, если ключ, присутствует в коллекции, иначе false.",
      example: "new Map([['a', 1], ['b', 2]]).has('a')",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.has",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "delete()",
      syntax: "map.delete(key)",
      parameters: [
        {
          name: "key",
          description: "Ключ элемента, который нужно удалить",
        },
      ],
      description:
        "Метод объекта Map, удаляет элемент (пару вида «ключ/значение») по ключу и возвращает true, если оно было в коллекции на момент вызова, иначе false.",
      example: "new Map([['a', 1], ['b', 2]]).delete('a')",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.delete",
      errors: [
        "TypeError — если this не является коллекцией (map или weakMap).",
      ],
    },
    {
      name: "clear()",
      syntax: "map.clear()",
      description: "Метод объекта Map, очищает коллекцию от всех элементов.",
      example: "new Map([['a', 1], ['b', 2]]).clear()",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.clear",
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
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.keys",
      errors: [
        "TypeError — если this не является коллекцией (map), массивом или множеством (set).",
      ],
    },
    {
      name: "values()",
      syntax: "map.values()",
      description:
        "Метод объекта Map, возвращает итерируемый объект по значениям коллекции.",
      example: "[...new Map([['a', 1], ['b', 2]]).values()]",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.values",
      errors: [
        "TypeError — если this не является коллекцией (map), массивом или множеством (set).",
      ],
    },
    {
      name: "entries()",
      syntax: "map.entries()",
      description:
        "Метод объекта Map, возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for of.",
      example: "[...new Map([['a', 1], ['b', 2]]).entries()]",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.entries",
      errors: [
        "TypeError — если this не является коллекцией (map), массивом или множеством (set).",
      ],
    },
  ],
};
