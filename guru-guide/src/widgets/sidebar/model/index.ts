import { AppPaths } from "@/shared/constants/route";

export interface NavItem {
  label: string;
  path: string;
  id?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    path: AppPaths.MAIN,
    label: "Главная страница",
  },
  {
    path: "#",
    id: "java-script",
    label: "Java Script",
    children: [
      {
        path: AppPaths.JAVA_SCRIPT_BASIC,
        label: "Основы",
      },
      {
        path: AppPaths.JAVA_SCRIPT_METHODS,
        label: "Методы",
      },
    ],
  },
  {
    path: AppPaths.TYPE_SCRIPT,
    label: "TypeScript",
  },
];
