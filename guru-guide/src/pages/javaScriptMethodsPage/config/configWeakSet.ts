export const configWeakSet = {
  WEAK_SET: [
    {
      name: "add()",
      syntax: "weakSet.add(value)",
      parameters: [
        {
          name: "value",
          description: "Объект, который нужно добавить в WeakSet",
        },
      ],
      description:
        "Метод объекта WeakSet, добавляет значение (если оно уже есть во множестве, то ничего не делает), возвращает тот же объект WeakSet.",
      example: "new WeakSet().add({}).add({})",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.add",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
    {
      name: "has()",
      syntax: "weakSet.has(value)",
      parameters: [
        {
          name: "value",
          description: "Объект, наличие которого нужно проверить в WeakSet",
        },
      ],
      description:
        "Метод объекта WeakSet, возвращает true, если значение присутствует в множестве, иначе false.",
      example: "new WeakSet().add({}).has({})",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.has",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
    {
      name: "delete()",
      syntax: "weakSet.delete(value)",
      parameters: [
        {
          name: "value",
          description: "Объект, который нужно удалить из WeakSet",
        },
      ],
      description:
        "Метод объекта WeakSet, удаляет значение и возвращает true, если оно было в множестве на момент вызова, иначе false.",
      example: "new WeakSet().add({}).delete({})",
      specification:
        "https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.delete",
      errors: [
        "TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.",
      ],
    },
  ],
};
