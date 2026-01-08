import type { FC } from "react";
import { useFormattedText } from "@/shared/hooks/useFormattedText ";
import type { IMethod } from "../config";
import styles from "./ErorsList.module.css";

export const ErorsList: FC<{
  method: Required<IMethod>;
}> = ({ method }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Возможные ошибки:</div>
      <ul className={styles.list}>
        {method.errors.map((error, index) => {
          const formattedError = useFormattedText(error, {
            highlightStyle: { fontWeight: 600, color: "#da3030ff" },
          });

          return (
            <li key={index} className={styles.item}>
              {formattedError}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
