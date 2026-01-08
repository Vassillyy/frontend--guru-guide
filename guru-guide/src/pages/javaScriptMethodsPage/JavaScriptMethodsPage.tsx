import { useState } from "react";
import { Pills } from "@/shared/ui";
import { MethodCard } from "./ui/MethodCard";
import { config, labelSections } from "./config";
import styles from "./JavaScriptMethodsPage.module.css";

export const JavaScriptMethodsPage = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const pillItems = Object.keys(config).map((category) => ({
    label: labelSections[category as keyof typeof labelSections],
    value: category,
  }));

  const getActiveCategories = () => {
    if (activeCategories.length === 0) {
      return Object.keys(config);
    }

    return activeCategories;
  };

  const handleFilterChange = (activeFilters: string[]) => {
    setActiveCategories(activeFilters);
  };

  const activeCategoriesToShow = getActiveCategories();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>API JavaScript</h1>
      </header>

      <Pills items={pillItems} onFilterChange={handleFilterChange} />

      <div className={styles.mainContent}>
        {activeCategoriesToShow.map((category) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>
              {labelSections[category as keyof typeof labelSections]}
            </h2>

            <div className={styles.methodsList}>
              {config[category].map((method, index) => (
                <MethodCard key={index} method={method} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
