export const configDate = {
  DATE: [
    {
      name: "getFullYear()",
      syntax: "date.getFullYear()",
      description:
        "Метод объекта Date, возвращает год (4 цифры) исходной даты по местному времени.",
      example: "new Date('2023-12-15').getFullYear()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getfullyear",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setFullYear()",
      syntax: "date.setFullYear(year[, month[, date]])",
      parameters: [
        {
          name: "year",
          description: "Год (4 цифры)"
        },
        {
          name: "month",
          description: "Месяц (0-11), необязательный параметр"
        },
        {
          name: "date",
          description: "День месяца (1-31), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает год исходной даты по местному времени. Дополнительно может установить месяц и день месяца. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setFullYear(2024, 5, 15)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setfullyear",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCFullYear()",
      syntax: "date.getUTCFullYear()",
      description:
        "Метод объекта Date, возвращает год (4 цифры) исходной даты по всемирному координированному времени (UTC), игнорируя часовой пояс.",
      example: "new Date('2023-12-15').getUTCFullYear()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcfullyear",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCFullYear()",
      syntax: "date.setUTCFullYear(year[, month[, date]])",
      parameters: [
        {
          name: "year",
          description: "Год (4 цифры)"
        },
        {
          name: "month",
          description: "Месяц (0-11), необязательный параметр"
        },
        {
          name: "date",
          description: "День месяца (1-31), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает год исходной даты по всемирному координированному времени (UTC). Дополнительно может установить месяц и день месяца. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCFullYear(2024, 5, 15)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcfullyear",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getMonth()",
      syntax: "date.getMonth()",
      description:
        "Метод объекта Date, возвращает месяц исходной даты по местному времени. Месяцы нумеруются с 0 (январь) до 11 (декабрь).",
      example: "new Date('2023-12-15').getMonth()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmonth",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setMonth()",
      syntax: "date.setMonth(month[, date])",
      parameters: [
        {
          name: "month",
          description: "Месяц (0-11)"
        },
        {
          name: "date",
          description: "День месяца (1-31), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает месяц исходной даты по местному времени. Дополнительно может установить день месяца. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setMonth(11) // Устанавливает декабрь",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmonth",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCMonth()",
      syntax: "date.getUTCMonth()",
      description:
        "Метод объекта Date, возвращает месяц исходной даты по всемирному координированному времени (UTC). Месяцы нумеруются с 0 (январь) до 11 (декабрь).",
      example: "new Date('2023-12-15').getUTCMonth()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmonth",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCMonth()",
      syntax: "date.setUTCMonth(month[, date])",
      parameters: [
        {
          name: "month",
          description: "Месяц (0-11)"
        },
        {
          name: "date",
          description: "День месяца (1-31), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает месяц исходной даты по всемирному координированному времени (UTC). Дополнительно может установить день месяца. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCMonth(11) // Устанавливает декабрь по UTC",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmonth",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getDate()",
      syntax: "date.getDate()",
      description:
        "Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по местному времени.",
      example: "new Date('2023-12-15').getDate()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getdate",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setDate()",
      syntax: "date.setDate(day)",
      parameters: [
        {
          name: "day",
          description: "День месяца (1-31)"
        }
      ],
      description:
        "Метод объекта Date, устанавливает день месяца исходной даты по местному времени. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setDate(25)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setdate",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCDate()",
      syntax: "date.getUTCDate()",
      description:
        "Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по всемирному координированному времени (UTC).",
      example: "new Date('2023-12-15').getUTCDate()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcdate",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCDate()",
      syntax: "date.setUTCDate(day)",
      parameters: [
        {
          name: "day",
          description: "День месяца (1-31)"
        }
      ],
      description:
        "Метод объекта Date, устанавливает день месяца исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCDate(25)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcdate",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getHours()",
      syntax: "date.getHours()",
      description:
        "Метод объекта Date, возвращает часы (0-23) исходной даты по местному времени.",
      example: "new Date('2023-12-15T14:30:00').getHours()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gethours",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setHours()",
      syntax: "date.setHours(hours[, minutes[, seconds[, milliseconds]]])",
      parameters: [
        {
          name: "hours",
          description: "Часы (0-23)"
        },
        {
          name: "minutes",
          description: "Минуты (0-59), необязательный параметр"
        },
        {
          name: "seconds",
          description: "Секунды (0-59), необязательный параметр"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает часы исходной даты по местному времени. Дополнительно может установить минуты, секунды и миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setHours(15, 30, 0)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.sethours",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCHours()",
      syntax: "date.getUTCHours()",
      description:
        "Метод объекта Date, возвращает часы (0-23) исходной даты по всемирному координированному времени (UTC).",
      example: "new Date('2023-12-15T14:30:00').getUTCHours()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutchours",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCHours()",
      syntax: "date.setUTCHours(hours[, minutes[, seconds[, milliseconds]]])",
      parameters: [
        {
          name: "hours",
          description: "Часы (0-23)"
        },
        {
          name: "minutes",
          description: "Минуты (0-59), необязательный параметр"
        },
        {
          name: "seconds",
          description: "Секунды (0-59), необязательный параметр"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает часы исходной даты по всемирному координированному времени (UTC). Дополнительно может установить минуты, секунды и миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCHours(15, 30, 0)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutchours",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getMinutes()",
      syntax: "date.getMinutes()",
      description:
        "Метод объекта Date, возвращает минуты (0-59) исходной даты по местному времени.",
      example: "new Date('2023-12-15T14:30:45').getMinutes()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getminutes",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setMinutes()",
      syntax: "date.setMinutes(minutes[, seconds[, milliseconds]])",
      parameters: [
        {
          name: "minutes",
          description: "Минуты (0-59)"
        },
        {
          name: "seconds",
          description: "Секунды (0-59), необязательный параметр"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает минуты исходной даты по местному времени. Дополнительно может установить секунды и миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setMinutes(45, 30, 500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setminutes",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCMinutes()",
      syntax: "date.getUTCMinutes()",
      description:
        "Метод объекта Date, возвращает минуты (0-59) исходной даты по всемирному координированному времени (UTC).",
      example: "new Date('2023-12-15T14:30:45').getUTCMinutes()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcminutes",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCMinutes()",
      syntax: "date.setUTCMinutes(minutes[, seconds[, milliseconds]])",
      parameters: [
        {
          name: "minutes",
          description: "Минуты (0-59)"
        },
        {
          name: "seconds",
          description: "Секунды (0-59), необязательный параметр"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает минуты исходной даты по всемирному координированному времени (UTC). Дополнительно может установить секунды и миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCMinutes(45, 30, 500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcminutes",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getSeconds()",
      syntax: "date.getSeconds()",
      description:
        "Метод объекта Date, возвращает секунды (0-59) исходной даты по местному времени.",
      example: "new Date('2023-12-15T14:30:45').getSeconds()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setSeconds()",
      syntax: "date.setSeconds(seconds[, milliseconds])",
      parameters: [
        {
          name: "seconds",
          description: "Секунды (0-59)"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает секунды исходной даты по местному времени. Дополнительно может установить миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setSeconds(30, 500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCSeconds()",
      syntax: "date.getUTCSeconds()",
      description:
        "Метод объекта Date, возвращает секунды (0-59) исходной даты по всемирному координированному времени (UTC).",
      example: "new Date('2023-12-15T14:30:45').getUTCSeconds()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCSeconds()",
      syntax: "date.setUTCSeconds(seconds[, milliseconds])",
      parameters: [
        {
          name: "seconds",
          description: "Секунды (0-59)"
        },
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Метод объекта Date, устанавливает секунды исходной даты по всемирному координированному времени (UTC). Дополнительно может установить миллисекунды. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCSeconds(30, 500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getMilliseconds()",
      syntax: "date.getMilliseconds()",
      description:
        "Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по местному времени.",
      example: "new Date('2023-12-15T14:30:45.123').getMilliseconds()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmilliseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setMilliseconds()",
      syntax: "date.setMilliseconds(milliseconds)",
      parameters: [
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999)"
        }
      ],
      description:
        "Метод объекта Date, устанавливает миллисекунды исходной даты по местному времени. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setMilliseconds(500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmilliseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCMilliseconds()",
      syntax: "date.getUTCMilliseconds()",
      description:
        "Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по всемирному координированному времени (UTC).",
      example: "new Date('2023-12-15T14:30:45.123').getUTCMilliseconds()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmilliseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setUTCMilliseconds()",
      syntax: "date.setUTCMilliseconds(milliseconds)",
      parameters: [
        {
          name: "milliseconds",
          description: "Миллисекунды (0-999)"
        }
      ],
      description:
        "Метод объекта Date, устанавливает миллисекунды исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.",
      example: "new Date().setUTCMilliseconds(500)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmilliseconds",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getDay()",
      syntax: "date.getDay()",
      description:
        "Метод объекта Date, возвращает день недели (0-6) исходной даты по местному времени, где 0 соответствует воскресенью.",
      example: "new Date('2023-12-15').getDay()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getday",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getUTCDay()",
      syntax: "date.getUTCDay()",
      description:
        "Метод объекта Date, возвращает день недели (0-6) исходной даты по всемирному координированному времени (UTC), где 0 соответствует воскресенью.",
      example: "new Date('2023-12-15').getUTCDay()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcday",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getTime()",
      syntax: "date.getTime()",
      description:
        "Метод объекта Date, возвращает таймстамп исходной даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC).",
      example: "new Date('2023-12-15').getTime()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettime",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "setTime()",
      syntax: "date.setTime(time)",
      parameters: [
        {
          name: "time",
          description: "Количество миллисекунд с 1 января 1970 года, 00:00:00 UTC"
        }
      ],
      description:
        "Метод объекта Date, устанавливает дату и время с помощью таймстампа. Возвращает таймстамп обновлённой даты.",
      example: "new Date().setTime(1671033600000)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.settime",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "getTimezoneOffset()",
      syntax: "date.getTimezoneOffset()",
      description:
        "Метод объекта Date, возвращает разницу в минутах между всемирным координированным временем (UTC) и местным временем. Значение будет положительным, если местное время опережает UTC, и отрицательным, если отстает.",
      example: "new Date().getTimezoneOffset()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettimezoneoffset",
      errors: ["TypeError — если this не является датой."],
    },
    {
      name: "Date.now()",
      syntax: "Date.now()",
      description:
        "Статический метод объекта Date, возвращает таймстамп текущей даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC). Это то же самое, что и new Date().getTime(), однако метод не создаёт промежуточный объект Date, поэтому работает быстрее.",
      example: "Date.now()",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.now",
    },
    {
      name: "Date.parse()",
      syntax: "Date.parse(string)",
      parameters: [
        {
          name: "string",
          description:
            "Строка, представляющая дату и время в формате ISO 8601 или других поддерживаемых форматах",
        },
      ],
      description:
        "Статический метод объекта Date, парсит строку с датой и возвращает таймстамп. Если формат неправильный, возвращается NaN. Предпочтительный формат: YYYY-MM-DDTHH:mm:ss.sssZ, где:\n • YYYY-MM-DD – дата: год-месяц-день;\n • 'T' – разделитель;\n • HH:mm:ss.sss – время: часы, минуты, секунды, миллисекунды;\n • 'Z' – часовой пояс в формате +-hh:mm (необязательно).",
      example: "Date.parse('2023-12-15T14:30:00')",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.parse",
    },
    {
      name: "Date.UTC()",
      syntax: "Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])",
      parameters: [
        {
          name: "year",
          description: "Год (4 цифры)"
        },
        {
          name: "month",
          description: "Месяц (0-11), необязательный параметр"
        },
        {
          name: "day",
          description: "День месяца (1-31), необязательный параметр"
        },
        {
          name: "hour",
          description: "Часы (0-23), необязательный параметр"
        },
        {
          name: "minute",
          description: "Минуты (0-59), необязательный параметр"
        },
        {
          name: "second",
          description: "Секунды (0-59), необязательный параметр"
        },
        {
          name: "millisecond",
          description: "Миллисекунды (0-999), необязательный параметр"
        }
      ],
      description:
        "Статический метод объекта Date, возвращает таймстамп для указанной даты и времени по UTC. В отличие от конструктора new Date(), параметры интерпретируются как UTC время, а не локальное время.",
      example: "Date.UTC(2023, 11, 15, 14, 30, 0)",
      specification:
        "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.utc",
    },
  ],
};
