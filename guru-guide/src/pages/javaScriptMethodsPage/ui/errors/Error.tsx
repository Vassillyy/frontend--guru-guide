import type { FC } from 'react';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import styles from './Error.module.css';

export const Error: FC<{ error: string }> = ({ error }) => {
  const formattedError = useFormattedText(error, {
    highlightStyle: { fontWeight: 600, color: '#da3030ff' },
  });

  return <div className={styles.error}>{formattedError}</div>;
};
