import cn from "classnames";
import { useState, type FC } from "react";
import styles from "./Pills.module.css";

interface PillItem {
  label: string;
  value: string;
}

interface PillsProps {
  items: PillItem[];
  onFilterChange: (activeFilters: string[]) => void;
}

export const Pills: FC<PillsProps> = ({ items, onFilterChange }) => {
  const [activePills, setActivePills] = useState<string[]>([]);

  const handleClick = (value: string) => {
    const newPills = activePills.includes(value)
      ? activePills.filter((item) => item !== value)
      : [...activePills, value];

    setActivePills(newPills);
    onFilterChange(newPills);
  };

  return (
    <div className={cn(styles.containerPills)}>
      {items.map((item) => (
        <div
          className={cn(styles.pills, {
            [styles.active]: activePills.includes(item.value),
          })}
          key={item.value}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
