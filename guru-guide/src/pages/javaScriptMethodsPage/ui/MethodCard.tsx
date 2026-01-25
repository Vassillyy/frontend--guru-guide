import {useState, type FC, type ReactNode} from "react";
import { IconArrow } from "@/shared/ui";
import { useFormattedText } from "@/shared/hooks/useFormattedText ";
import { ErorsList } from "./ErrorsList";
import type { IMethod } from "../config";
import styles from "./MethodCard.module.css";

export const MethodCard: FC<{ method: IMethod }> = ({ method }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionParts = useFormattedText(method.description, {
    highlightStyle: { fontWeight: 600, color: "#1864ab" },
  });

  const formatExample = (example: string) => {
    if (!example) return [];

    const lines = example.split('\n');
    const formattedLines: ReactNode[] = [];

    lines.forEach((line, index) => {
      if (line === '') {
        formattedLines.push(<br key={`empty-${index}`} />);
        return;
      }

      const commentIndex = line.indexOf('//');

      if (commentIndex !== -1) {
        const codePart = line.substring(0, commentIndex);
        const commentPart = line.substring(commentIndex);

        const highlightedCode = highlightCode(codePart);

        formattedLines.push(
          <div key={`line-${index}`} className={styles.exampleLine}>
            {highlightedCode}
            <span className={styles.comment}>{commentPart}</span>
          </div>
        );
      } else {
        const highlightedCode = highlightCode(line);

        formattedLines.push(
          <div key={`line-${index}`} className={styles.exampleLine}>
            {highlightedCode}
          </div>
        );
      }
    });

    return formattedLines;
  };

  const highlightCode = (code: string): ReactNode[] => {
    const parts: ReactNode[] = [];
    let remainingCode = code;
    let keyCounter = 0;

    while (remainingCode.length > 0) {
      let matched = false;

      const keywordMatch = remainingCode.match(/^\b(let|const|var|console)\b/);

      if (keywordMatch) {
        parts.push(
          <span key={`kw-${keyCounter++}`} className={styles.keyword}>
            {keywordMatch[0]}
          </span>
        );
        remainingCode = remainingCode.substring(keywordMatch[0].length);
        matched = true;
        continue;
      }

      const methodMatch = remainingCode.match(/^\.([a-zA-Z_$][a-zA-Z0-9_$]*)\b/);

      if (methodMatch) {
        parts.push(<span key={`dot-${keyCounter++}`}>.</span>);
        parts.push(
          <span key={`method-${keyCounter++}`} className={styles.method}>
            {methodMatch[1]}
          </span>
        );
        remainingCode = remainingCode.substring(methodMatch[0].length);
        matched = true;
        continue;
      }

      const stringMatch = remainingCode.match(/^(["'`])(?:\\.|(?!\1).)*\1/);

      if (stringMatch) {
        parts.push(
          <span key={`str-${keyCounter++}`} className={styles.string}>
            {stringMatch[0]}
          </span>
        );
        remainingCode = remainingCode.substring(stringMatch[0].length);
        matched = true;
        continue;
      }

      const numberMatch = remainingCode.match(/^\d+(\.\d+)?/);

      if (numberMatch) {
        parts.push(
          <span key={`num-${keyCounter++}`} className={styles.number}>
            {numberMatch[0]}
          </span>
        );
        remainingCode = remainingCode.substring(numberMatch[0].length);
        matched = true;
        continue;
      }

      if (!matched) {
        parts.push(
          <span key={`char-${keyCounter++}`}>
            {remainingCode.charAt(0)}
          </span>
        );
        remainingCode = remainingCode.substring(1);
      }
    }

    return parts;
  };

  const formattedExample = method.example ? formatExample(method.example) : null;

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

            {method.parameters && method.parameters.length > 0 && (
              <div className={styles.parametersBlock}>
                <div className={styles.parametersTitle}>Параметры:</div>
                <div className={styles.parametersList}>
                  {method.parameters.map((param, index) => (
                    <div key={index} className={styles.parameterItem}>
                      <span className={styles.parameterName}>
                        {param.name} {" - "}
                        <span className={styles.parameterDescription}>
                          {param.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className={styles.methodDescription}> {descriptionParts}</p>

            {method.specification && (
              <a
                href={method.specification}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.specLink}
              >
                📖 Подробнее в спецификации
              </a>
            )}

            {method.errors && method.errors.length > 0 && (
              <ErorsList method={method as Required<IMethod>} />
            )}
          </>
        )}
      </div>

      {isOpen && method.example && (
        <div className={styles.exampleBlock}>
          <div className={styles.exampleHeader}>
            <span className={styles.exampleTitle}>Примеры использования:</span>
          </div>
          <div className={styles.exampleCode}>
            <code>
              {formattedExample}
            </code>
          </div>
        </div>
      )}
    </div>
  );
};
