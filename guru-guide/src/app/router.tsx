import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { AppPaths } from "../shared/constants/route";
import { JavaScriptPage } from "../pages/javaScriptPage";
import { TypeScriptPage } from "../pages/typeScriptPage";
import { MainPage } from "../pages/mainPage";

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
        path: AppPaths.JAVA_SCRIPT,
        element: <JavaScriptPage />,
      },
      {
        path: AppPaths.TYPE_SCRIPT,
        element: <TypeScriptPage />,
      },
    ],
  },
]);
