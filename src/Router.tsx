import { createBrowserRouter } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

const Router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          { path: "price", element: <Price /> },
          { path: "chart", element: <Chart /> },
        ],
      },
    ],
  },
]);

export default Router;
