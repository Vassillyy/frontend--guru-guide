import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS, findParentItemIdForActivePath } from "./model";
import { NavItem } from "./ui/NavItem";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const location = useLocation();
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleItem = (itemId: string) => {
    setExpandedItemId((prev) => (prev === itemId ? null : itemId));
  };

  useEffect(() => {
    const parentItemId = findParentItemIdForActivePath(
      NAV_ITEMS,
      location.pathname
    );
    if (parentItemId) setExpandedItemId(parentItemId);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Навигация</h2>
        <p className={styles.subtitle}>Выберите раздел</p>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => {
            const itemHasChildren = item.children && item.children.length > 0;
            const isExpanded = item.id ? expandedItemId === item.id : false;

            return (
              <li key={item.path || item.id} className={styles.navItem}>
                <NavItem
                  to={item.path}
                  isActive={isActive(item.path)}
                  hasChildren={itemHasChildren}
                  isExpanded={isExpanded}
                  onClick={
                    itemHasChildren ? () => toggleItem(item.id!) : undefined
                  }
                >
                  {item.label}
                </NavItem>

                {itemHasChildren && isExpanded && item.children && (
                  <ul className={styles.childrenList}>
                    {item.children.map((child) => (
                      <li key={child.path} className={styles.navItem}>
                        <NavItem
                          to={child.path}
                          isActive={isActive(child.path)}
                          variant="nested"
                        >
                          {child.label}
                        </NavItem>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
