import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Навигация</h2>
        <p className={styles.subtitle}>Выберите раздел</p>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              to="/"
              className={cn(styles.link, isActive("/") && styles.linkActive)}
            >
              Главная страница
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              to="/javaScript"
              className={cn(
                styles.link,
                isActive("/javaScript") && styles.linkActive
              )}
            >
              JavaScript
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              to="/typeScript"
              className={cn(
                styles.link,
                isActive("/typeScript") && styles.linkActive
              )}
            >
              TypeScript
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
