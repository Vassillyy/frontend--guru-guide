export const configReflect = {
  REFLECT: [
    {
      name: "Reflect.ownKeys()",
      syntax: "Reflect.ownKeys(obj)",
      parameters: [
        {
          name: "obj",
          description: "Объект, все собственные ключи которого нужно получить"
        }
      ],
      description:
        "Статический метод объекта Reflect, возвращает массив всех собственных ключей указанного объекта, как перечисляемых, так и неперечисляемых.",
      example: "Reflect.ownKeys({a: 1, [Symbol('id')]: 2})",
      specification:
        "https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.ownkeys",
      errors: [
        "TypeError — если аргумент (obj) не является объектом."
      ],
    }
  ]
}
