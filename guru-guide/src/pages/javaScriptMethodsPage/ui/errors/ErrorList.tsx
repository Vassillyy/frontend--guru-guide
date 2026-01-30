import type { FC } from "react";
import type { IMethod } from "../../config";
import {Error} from './Error'
import styles from "./ErorsList.module.css";

export const ErrorList: FC<{
  method: Required<IMethod>;
}> = ({ method }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Возможные ошибки:</div>
      <ul className={styles.list}>
        {method.errors.map((error, index) => (
          <Error error={error} key={index} />
        ))}
      </ul>
    </div>
  );
};
