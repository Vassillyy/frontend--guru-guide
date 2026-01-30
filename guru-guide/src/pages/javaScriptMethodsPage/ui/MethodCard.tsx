import { useState, type FC } from 'react';
import { IconArrow } from '@/shared/ui';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import { formatExample } from '@/shared/lib';
import { ErrorList } from './errors/ErrorList.tsx';
import type { IMethod } from '../config/types.ts';
import styles from './MethodCard.module.css';

export const MethodCard: FC<{ method: IMethod }> = ({ method }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionParts = useFormattedText(method.description, {
    highlightStyle: { fontWeight: 600, color: '#1864ab' },
  });

  const formattedExample = method.example
    ? formatExample(method.example, styles)
    : null;

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
                        {param.name} {' - '}
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
              <ErrorList method={method as Required<IMethod>} />
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
            <code>{formattedExample}</code>
          </div>
        </div>
      )}
    </div>
  );
};
