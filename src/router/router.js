import QuizSinglePage from "../components/Pages/QuizSinglePage/QuizSinglePage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/quiz/:quizId",
        element: <QuizSinglePage></QuizSinglePage>,
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
      },
      { path: "/blog", element: <h3>Blogs</h3> },
      { path: "/statistic", element: <h3>Statistic</h3> },
    ],
  },
]);

export default router;