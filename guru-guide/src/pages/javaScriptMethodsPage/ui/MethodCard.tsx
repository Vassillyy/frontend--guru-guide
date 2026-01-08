import { useState, type ChangeEvent, type FC } from "react";
import cn from "classnames";
import { IconArrow } from "@/shared/ui";
import { useFormattedText } from "@/shared/hooks/useFormattedText ";
import { ErorsList } from "./ErrorsList";
import type { IMethod } from "../config";
import styles from "./MethodCard.module.css";

const executeCodeSafely = (code: string) => {
  const safeContext = {
    Math: Math,
    Array: Array,
    String: String,
    Number: Number,
    Object: Object,
    JSON: JSON,
    Date: Date,
    RegExp: RegExp,
    NaN: NaN,
    Infinity: Infinity,
    undefined: undefined,
    isNaN: isNaN,
    isFinite: isFinite,
    parseInt: parseInt,
    parseFloat: parseFloat,
    encodeURI: encodeURI,
    encodeURIComponent: encodeURIComponent,
    decodeURI: decodeURI,
    decodeURIComponent: decodeURIComponent,
    console: {
      log: (...args: any[]) => console.log("[Sandbox]:", ...args),
      warn: (...args: any[]) => console.warn("[Sandbox]:", ...args),
      error: (...args: any[]) => console.error("[Sandbox]:", ...args),
    },
  };

  try {
    const func = new Function(
      ...Object.keys(safeContext),
      `"use strict";
      try {
        return (${code});
      } catch (e) {
        throw e;
      }`
    );

    return func(...Object.values(safeContext));
  } catch (error) {
    throw error;
  }
};

export const MethodCard: FC<{ method: IMethod }> = ({ method }) => {
  const [userCode, setUserCode] = useState<string>(method.example);
  const [result, setResult] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionParts = useFormattedText(method.description, {
    highlightStyle: { fontWeight: 600, color: "#1864ab" },
  });

  const executeCode = () => {
    try {
      const evalResult = executeCodeSafely(userCode);
      let stringResult;

      if (typeof evalResult === "symbol") {
        stringResult = evalResult.toString();
      } else if (evalResult === undefined) {
        stringResult = "undefined";
      } else {
        stringResult = JSON.stringify(evalResult);
      }

      setResult(stringResult);
    } catch (error) {
      const err = error as Error;
      setResult(
        `${err.name}: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  };

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserCode(e.target.value);
  };

  const resetToDefault = () => {
    setUserCode(method.example);
    setResult("");
  };

  const hasError = result ? result.includes("Error") : false;

  return (
    <div className={styles.methodCard}>
      <div className={styles.methodInfo}>
        <button
          className={styles.methodHeader}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3 className={styles.methodName}>{method.name}</h3>
          <div className={styles.buttonArrow}>
            <IconArrow isOpen={isOpen} />
          </div>
        </button>

        {isOpen && (
          <>
            <code className={styles.methodSyntax}>{method.syntax}</code>
            <p className={styles.methodDescription}> {descriptionParts}</p>

            {method.errors && method.errors.length > 0 && (
              <ErorsList method={method as Required<IMethod>} />
            )}
          </>
        )}
      </div>

      {isOpen && (
        <div className={styles.codeEditor}>
          <div className={styles.editorHeader}>
            <span className={styles.editorTitle}>Попробуйте сами:</span>
            <div className={styles.blockButtons}>
              <button className={styles.resetButton} onClick={resetToDefault}>
                ↺ Сбросить
              </button>
              <button className={styles.runButton} onClick={executeCode}>
                ▶ Запустить
              </button>
            </div>
          </div>

          <textarea
            className={styles.codeInput}
            value={userCode}
            onChange={handleCodeChange}
            placeholder="Введите выражение..."
            spellCheck="false"
          />

          {result && (
            <div className={styles.resultContainer}>
              <div className={styles.resultHeader}>
                {hasError ? "Ошибка:" : "Результат:"}
              </div>
              <pre
                className={cn(styles.resultOutput, hasError && styles.error)}
              >
                <code>{result}</code>
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
