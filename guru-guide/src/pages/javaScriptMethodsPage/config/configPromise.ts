export const configPromise = {
  PROMISE: [
    {
      name: "then()",
      syntax: "promise.then(onFulfilled[, onRejected])",
      parameters: [
        {
          name: "onFulfilled",
          description: "Функция, вызываемая при успешном завершении промиса"
        },
        {
          name: "onRejected",
          description: "Необязательная функция, вызываемая при отклонении промиса"
        }
      ],
      description: "Метод объекта Promise, добавляет обработчики для случаев успешного завершения и/или ошибки промиса. Возвращает новый промис, который разрешается или отклоняется в зависимости от результата вызова обработчиков и их возвращаемых значений.",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then",
    },
    {
      name: "catch()",
      syntax: "promise.catch(onRejected)",
      parameters: [
        {
          name: "onRejected",
          description: "Функция, вызываемая при отклонении промиса"
        }
      ],
      description: "Метод объекта Promise, добавляет обработчик только для случая ошибки промиса. Является синтаксическим сахаром для promise.then(null, onRejected). Возвращает новый промис.",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch",
    },
    {
      name: "finally()",
      syntax: "promise.finally(onFinally)",
      parameters: [
        {
          name: "onFinally",
          description: "Функция, вызываемая при завершении промиса (независимо от успеха или ошибки)"
        }
      ],
      description: "Метод объекта Promise, добавляет обработчик, вызываемый при завершении промиса (независимо от того, завершился он успешно или с ошибкой). Не получает никаких аргументов. Возвращает новый промис.",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally",
    },
    {
      name: "Promise.all()",
      syntax: "Promise.all(iterable)",
      parameters: [
        {
          name: "iterable",
          description: "Итерируемый объект (обычно массив), содержащий промисы"
        }
      ],
      description: "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов. Порядок элементов массива в точности соответствует порядку исходных промисов. Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.",
      example: `Promise.all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
      ]).then(values => console.log(values))`,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all",
      errors: [
        "TypeError — если аргумент (iterable) не является итерируемым объектом.",
        "Promise rejection — если любой из переданных промисов завершается с ошибкой."
      ]
    },
    {
      name: "Promise.allSettled()",
      syntax: "Promise.allSettled(iterable)",
      parameters: [
        {
          name: "iterable",
          description: "Итерируемый объект (обычно массив), содержащий промисы"
        }
      ],
      description: "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод всегда ждёт завершения всех промисов. В массиве результатов будет объект {status: 'fulfilled', value: результат} для успешных завершений, {status: 'rejected', reason: ошибка} для ошибок.",
      example: `Promise.allSettled([
        Promise.resolve(1),
        Promise.reject('error'),
        Promise.resolve(3)
      ]).then(results => console.log(results))`,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled",
      errors: [
        "TypeError — если аргумент (iterable) не является итерируемым объектом."
      ]
    },
    {
      name: "Promise.race()",
      syntax: "Promise.race(iterable)",
      parameters: [
        {
          name: "iterable",
          description: "Итерируемый объект (обычно массив), содержащий промисы"
        }
      ],
      description: "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый выполненный промис, из которого берёт результат (или ошибку). После этого остальные промисы игнорируются.",
      example: `const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 500));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 100));
        const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('error'), 200));
        
        Promise.race([promise1, promise2])
          .then(value => console.log(value));
        Promise.race([promise1, promise3])
          .catch(error => console.error(error));`,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race",
      errors: [
        "TypeError — если аргумент (iterable) не является итерируемым объектом."
      ]
    },
    {
      name: "Promise.any()",
      syntax: "Promise.any(iterable)",
      parameters: [
        {
          name: "iterable",
          description: "Итерируемый объект (обычно массив), содержащий промисы"
        }
      ],
      description: "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый успешно выполненный промис, из которого берёт результат. Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any",
      errors: [
        "TypeError — если аргумент (iterable) не является итерируемым объектом.",
        "AggregateError — если все промисы завершаются с ошибкой (содержит свойство errors с массивом всех ошибок)."
      ]
    },
    {
      name: "Promise.resolve()",
      syntax: "Promise.resolve(value)",
      parameters: [
        {
          name: "value",
          description: "Значение, которое будет обёрнуто в Promise"
        }
      ],
      description: "Статический метод объекта Promise, возвращает промис, завершённый успешно с переданным значением. Если значение само является промисом, метод вернёт этот промис. Если значение — thenable (объект с методом then), будет создан новый промис, который следует за этим значением (thenable).",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve",
    },
    {
      name: "Promise.reject()",
      syntax: "Promise.reject(reason)",
      parameters: [
        {
          name: "reason",
          description: "Причина ошибки, с которой будет отклонён промис"
        }
      ],
      description: "Статический метод объекта Promise, возвращает промис, завершённый с ошибкой с переданной причиной.",
      example: ``,
      specification: "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject",
    },
  ],
}
