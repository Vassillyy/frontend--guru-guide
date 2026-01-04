import { createBrowserRouter } from "react-router-dom";
import { JavaScriptBasicPage } from "@/pages/javaScriptBasicPage";
import { TypeScriptPage } from "@/pages/typeScriptPage";
import { MainPage } from "@/pages/mainPage";
import { JavaScriptMethodsPage } from "@/pages/javaScriptMethodsPage";
import { AppPaths } from "@/shared/constants/route";
import { MainLayout } from "./layouts";

export const router = createBrowserRouter([
  {
    path: AppPaths.MAIN,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: AppPaths.JAVA_SCRIPT_BASIC,
        element: <JavaScriptBasicPage />,
      },
      {
        path: AppPaths.JAVA_SCRIPT_METHODS,
        element: <JavaScriptMethodsPage />,
      },
      {
        path: AppPaths.TYPE_SCRIPT,
        element: <TypeScriptPage />,
      },
    ],
  },
]);
