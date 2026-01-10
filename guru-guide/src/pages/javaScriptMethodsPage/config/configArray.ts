export const configArray = {
  ARRAY: [
    {
      name: "pop()",
      syntax: "arr.pop()",
      description:
        "Метод объекта Array, удаляет последний элемент из массива и возвращает его.",
      example: "[1, 2, 3].pop()",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.pop",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "push()",
      syntax: "arr.push(...items)",
      parameters: [
        {
          name: "...items",
          description: "Элементы для добавления в конец массива",
        },
      ],
      description:
        "Метод объекта Array, добавляет один или несколько элементов в конец массива. Возвращает новую длину массива.",
      example: "[1, 2].push(3, 4)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.push",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "shift()",
      syntax: "arr.shift()",
      description:
        "Метод объекта Array, удаляет первый элемент из массива и возвращает его.",
      example: "[1, 2, 3].shift()",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.shift",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "unshift()",
      syntax: "arr.unshift(...items)",
      parameters: [
        {
          name: "...items",
          description: "Элементы для добавления в начало массива",
        },
      ],
      description:
        "Метод объекта Array, добавляет один или несколько элементов в начало массива. Возвращает новую длину массива.",
      example: "[2, 3].unshift(0, 1)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.unshift",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toString()",
      syntax: "arr.toString()",
      description:
        "Метод объекта Array, возвращает строковое представление массива в виде списка элементов, разделённых запятыми.",
      example: "[1, 2, 3].toString()",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring",
      errors: ["TypeError — если this является null или undefined."],
    },
    {
      name: "indexOf()",
      syntax: "arr.indexOf(searchElement[, fromIndex])",
      parameters: [
        {
          name: "searchElement",
          description: "Элемент для поиска в массиве",
        },
        {
          name: "fromIndex",
          description: "Необязательный индекс начала поиска",
        },
      ],
      description:
        "Метод объекта Array, выполняет поиск элемента в массиве. Возвращает индекс первого совпадения или -1, если элемент не найден.",
      example: "[1, 2, 3, 2, 1].indexOf(2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.indexof",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "lastIndexOf()",
      syntax: "arr.lastIndexOf(searchElement[, fromIndex])",
      parameters: [
        {
          name: "searchElement",
          description: "Элемент для поиска в массиве",
        },
        {
          name: "fromIndex",
          description:
            "Необязательный индекс начала поиска в обратном направлении",
        },
      ],
      description:
        "Метод объекта Array, выполняет поиск элемента в массиве с конца. Возвращает индекс последнего совпадения или -1, если элемент не найден.",
      example: "[1, 2, 3, 2, 1].lastIndexOf(2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.lastindexof",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "at()",
      syntax: "arr.at(index)",
      parameters: [
        {
          name: "index",
          description:
            "Индекс элемента (может быть отрицательным для отсчёта с конца)",
        },
      ],
      description:
        "Метод объекта Array, возвращает элемент массива по указанному индексу. Если индекс выходит за границы массива, возвращает undefined.",
      example: "[10, 20, 30, 40].at(2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "includes()",
      syntax: "arr.includes(searchElement[, fromIndex])",
      parameters: [
        {
          name: "searchElement",
          description: "Элемент для поиска в массиве",
        },
        {
          name: "fromIndex",
          description: "Необязательный индекс начала поиска",
        },
      ],
      description:
        "Метод объекта Array, проверяет, содержит ли массив указанный элемент, используя алгоритм SameValueZero (правильно обрабатывает NaN). Возвращает true если содержит, иначе false.",
      example: "[1, 2, 3, NaN, 5].includes(NaN)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.includes",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "slice()",
      syntax: "arr.slice([start[, end]])",
      parameters: [
        {
          name: "start",
          description:
            "Необязательный индекс начала подмассива (может быть отрицательным)",
        },
        {
          name: "end",
          description:
            "Необязательный индекс конца подмассива (не включая, может быть отрицательным)",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив, содержащий элементы от индекса указанного в первом аргументе до до индекса указанного во втором аргументе. Если второй аргумен не указан, возвращает элементы от индекса указанного в первом аргументе до конца массива. Если аргументы не переданы, возвращает поверхностную копию массива.",
      example: "[1, 2, 3, 4, 5].slice(1, 4)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.slice",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "splice()",
      syntax: "arr.splice(start[, deleteCount[, ...items]])",
      parameters: [
        {
          name: "start",
          description: "Индекс, с которого начинается изменение массива",
        },
        {
          name: "deleteCount",
          description: "Необязательное количество удаляемых элементов",
        },
        {
          name: "...items",
          description: "Необязательные элементы для вставки на место удалённых",
        },
      ],
      description:
        "Метод объекта Array, изменяет массив начиная с индекса, указанного в первом аргументе, удаляет количество элементов, указанных во втором аргументе и затем вставляет элементы, указанные начиная с третьего аргумента на их место. Возвращает массив удалённых элементов.",
      example: "[1, 2, 3, 4, 5].splice(1, 2, 'a', 'b')",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toSpliced()",
      syntax: "arr.toSpliced(start[, deleteCount[, ...items]])",
      parameters: [
        {
          name: "start",
          description: "Индекс, с которого начинается изменение массива",
        },
        {
          name: "deleteCount",
          description: "Необязательное количество удаляемых элементов",
        },
        {
          name: "...items",
          description: "Необязательные элементы для вставки на место удалённых",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив с изменениями, начиная с индекса, указанного в первом аргументе: удаляет количество элементов, указанных во втором аргументе и затем вставляет элементы, указанные начиная с третьего аргумента на их место.",
      example: "[1, 2, 3, 4, 5].toSpliced(1, 2, 'a', 'b')",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "concat()",
      syntax: "arr.concat(...items)",
      parameters: [
        {
          name: "...items",
          description:
            "Элементы или массивы для объединения с исходным массивом",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив, состоящий из элементов исходного массива и аргументов.",
      example: "[1, 2].concat([3, 4], 5)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.concat",
      errors: ["TypeError — если this не является массивом или строкой."],
    },
    {
      name: "forEach()",
      syntax: "arr.forEach(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, вызываемая для каждого элемента массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, вызывает указанную функцию для каждого элемента массива. Функция может принимать до 3 аргументов: элемент, его индекс и сам массив. Возвращает undefined.",
      example: "[1, 2, 3].forEach(x => console.log(x))",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach",
      errors: [
        "TypeError — если this не является массивом, множеством или коллекцией, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "find()",
      syntax: "arr.find(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, ищет первый элемент, удовлетворяющий условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает элемент или undefined если элемент не найден.",
      example: "[1, 2, 3, 4].find(x => x > 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "findLast()",
      syntax: "arr.findLast(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, ищет последний элемент, удовлетворяющий условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает элемент или undefined если элемент не найден.",
      example: "[1, 2, 3, 4].findLast(x => x > 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlast",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "findIndex()",
      syntax: "arr.findIndex(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, ищет индекс первого элемента, удовлетворяющего условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает индекс или -1 если элемент не найден.",
      example: "[1, 2, 3, 4].findIndex(x => x > 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findindex",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "findLastIndex()",
      syntax: "arr.findLastIndex(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, ищет индекс последнего элемента, удовлетворяющего условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает индекс или -1 если элемент не найден.",
      example: "[1, 2, 3, 4].findLastIndex(x => x > 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlastindex",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "filter()",
      syntax: "arr.filter(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив с элементами, прошедшими проверку, заданную в указанной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.",
      example: "[1, 2, 3, 4].filter(x => x > 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "map()",
      syntax: "arr.map(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, преобразующая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив с результатами вызова функции для каждого элемента исходного массива. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.",
      example: "[1, 2, 3].map(x => x * 2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "sort()",
      syntax: "arr.sort([compareFn])",
      parameters: [
        {
          name: "compareFn",
          description:
            "Необязательная функция сравнения для определения порядка сортировки:\n • должна принимать два аргумента: a и b;\n • возвращать отрицательное число, если a < b;\n • возвращать положительное число, если a > b;\n • возвращать 0, если a = b.\nЕсли функция не передана, элементы сортируются по строковому представлению.",
        },
      ],
      description: "Метод объекта Array, сортирует элементы массива на месте.",
      example: "[3, 1, 4, 2].sort((a, b) => a - b)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (compareFn) не является функцией.",
      ],
    },
    {
      name: "toSorted()",
      syntax: "arr.toSorted([compareFn])",
      parameters: [
        {
          name: "compareFn",
          description:
            "Необязательная функция сравнения для определения порядка сортировки:\n • должна принимать два аргумента: a и b;\n • возвращать отрицательное число, если a < b;\n • возвращать положительное число, если a > b;\n • возвращать 0, если a = b.\nЕсли функция не передана, элементы сортируются по строковому представлению.",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив с отсортированными элементами исходного массива.",
      example: "[3, 1, 4, 2].toSorted((a, b) => a - b)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (compareFn) не является функцией.",
      ],
    },
    {
      name: "reverse()",
      syntax: "arr.reverse()",
      description:
        "Метод объекта Array, изменяет порядок элементов массива на обратный (изменяет исходный массив).",
      example: "[1, 2, 3].reverse()",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reverse",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "toReversed()",
      syntax: "arr.toReversed()",
      description:
        "Метод объекта Array, возвращает новый массив с элементами исходного массива в обратном порядке.",
      example: "[1, 2, 3].toReversed()",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "join()",
      syntax: "arr.join([separator])",
      parameters: [
        {
          name: "separator",
          description: "Необязательная строка-разделитель (по умолчанию ',')",
        },
      ],
      description:
        "Метод объекта Array, возвращает строку, состоящую из элементов массива, разделённых указанным разделителем.",
      example: "['a', 'b', 'c'].join(', ')",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "reduce()",
      syntax: "arr.reduce(callbackFn[, initialValue])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, вызываемая для каждого элемента массива",
        },
        {
          name: "initialValue",
          description: "Необязательное начальное значение аккумулятора",
        },
      ],
      description:
        "Метод объекта Array, применяет функцию к аккумулятору и каждому элементу массива (слева направо), сводя массив к одному значению. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.",
      example: "[1, 2, 3].reduce((sum, x) => sum + x, 0)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce",
      errors: [
        "TypeError — если this не является массивом или если аргумент (fn) не является функцией, или если массив пуст и не указано начальное значение.",
      ],
    },
    {
      name: "reduceRight()",
      syntax: "arr.reduceRight(callbackFn[, initialValue])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, вызываемая для каждого элемента массива",
        },
        {
          name: "initialValue",
          description: "Необязательное начальное значение аккумулятора",
        },
      ],
      description:
        "Метод объекта Array, применяет функцию к аккумулятору и каждому элементу массива (справа налево), сводя массив к одному значению. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.",
      example: "[1, 2, 3].reduceRight((sum, x) => sum + x, 0)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduceright",
      errors: [
        "TypeError — если this не является массивом или если аргумент (fn) не является функцией, или если массив пуст и не указано начальное значение.",
      ],
    },
    {
      name: "fill()",
      syntax: "arr.fill(value[, start[, end]])",
      parameters: [
        {
          name: "value",
          description: "Значение для заполнения массива",
        },
        {
          name: "start",
          description: "Необязательный индекс начала заполнения",
        },
        {
          name: "end",
          description: "Необязательный индекс конца заполнения (не включая)",
        },
      ],
      description:
        "Метод объекта Array, заполняет все элементы массива от start до end указанным значением. Возвращает изменённый массив.",
      example: "[1, 2, 3, 4, 5].fill(0, 1, 4)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.fill",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "copyWithin()",
      syntax: "arr.copyWithin(target[, start[, end]])",
      parameters: [
        {
          name: "target",
          description: "Индекс, в который копируются элементы",
        },
        {
          name: "start",
          description: "Необязательный индекс начала копирования",
        },
        {
          name: "end",
          description: "Необязательный индекс конца копирования (не включая)",
        },
      ],
      description:
        "Метод объекта Array, копирует последовательность элементов внутри массива. Возвращает изменённый массив.",
      example: "[1, 2, 3, 4, 5].copyWithin(0, 3)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.copywithin",
      errors: ["TypeError — если this не является массивом."],
    },
    {
      name: "flat()",
      syntax: "arr.flat([depth])",
      parameters: [
        {
          name: "depth",
          description: "Необязательная глубина выравнивания (по умолчанию 1)",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив, в котором все подмассивы рекурсивно подняты на указанную глубину.",
      example: "[[1, 2], [3, [4, 5]]].flat(2)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flat",
      errors: [
        "TypeError — если this не является массивом или если аргумент (depth) не является числом.",
      ],
    },
    {
      name: "some()",
      syntax: "arr.some(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, проверяет, удовлетворяет ли хотя бы один элемент условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает true если удолетворяет, иначе false.",
      example: "[1, 2, 3, 4].some(x => x > 3)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "every()",
      syntax: "arr.every(callbackFn[, thisArg])",
      parameters: [
        {
          name: "callbackFn",
          description: "Функция, проверяющая каждый элемент массива",
        },
        {
          name: "thisArg",
          description:
            "Необязательное значение, используемое как this при вызове callbackFn",
        },
      ],
      description:
        "Метод объекта Array, проверяет, удовлетворяют ли все элементы условию, заданному в функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает true если удолетворяет, иначе false.",
      example: "[1, 2, 3, 4].every(x => x > 0)",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every",
      errors: [
        "TypeError — если this не является массивом, или если аргумент (fn) не является функцией.",
      ],
    },
    {
      name: "with()",
      syntax: "arr.with(index, value)",
      parameters: [
        {
          name: "index",
          description: "Индекс изменяемого элемента",
        },
        {
          name: "value",
          description: "Новое значение элемента",
        },
      ],
      description:
        "Метод объекта Array, возвращает новый массив с изменённым элементом по указанному индексу.",
      example: "[1, 2, 3, 4, 5].with(2, 'three')",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with",
      errors: [
        "TypeError — если this не является массивом.",
        "RangeError — если аргумент (index) выходит за границы массива.",
      ],
    },
    {
      name: "Array.isArray()",
      syntax: "Array.isArray(value)",
      parameters: [
        {
          name: "value",
          description: "Значение для проверки",
        },
      ],
      description:
        "Статический метод объекта Array, определяет, является ли переданное значение массивом. Возвращает true если является, иначе false.",
      example: "Array.isArray([1, 2, 3])",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.isarray",
    },
    {
      name: "Array.from()",
      syntax: "Array.from(arrayLike[, mapFn[, thisArg]])",
      parameters: [
        {
          name: "arrayLike",
          description: "Итерируемый объект или псевдомассив",
        },
        {
          name: "mapFn",
          description:
            "Необязательная функция преобразования для каждого элемента",
        },
        {
          name: "thisArg",
          description: "Необязательное значение this для mapFn",
        },
      ],
      description:
        "Статический метод объекта Array, создаёт новый массив из итерируемого объекта или псевдомассива.",
      example: "Array.from('hello')",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.from",
    },
    {
      name: "keys()",
      syntax: "arr.keys()",
      description:
        "Метод объекта Array, возвращает новый итератор, содержащий ключи (индексы) массива.",
      example: "[...['a', 'b', 'c'].keys()]",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.keys",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "values()",
      syntax: "arr.values()",
      description:
        "Метод объекта Array, возвращает новый итератор, содержащий значения массива.",
      example: "[...['a', 'b', 'c'].values()]",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.values",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
    {
      name: "entries()",
      syntax: "arr.entries()",
      description:
        "Метод объекта Array, возвращает новый итератор, содержащий пары [ключ, значение] для каждого элемента массива.",
      example: "[...['a', 'b', 'c'].entries()]",
      specification:
        "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.entries",
      errors: [
        "TypeError — если this не является массивом, коллекцией (map) или множеством (set).",
      ],
    },
  ],
};
