import "./App.scss";
import Header from "./components/layout/header/Header";
import Kids from "./components/pages/kids/Kids";
import Men from "./components/pages/men/Men";
import Sale from "./components/pages/sale/Sale";
import Admin from "./components/pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import Women from "./components/pages/women/Women";
import Basket from "./components/pages/basket/Basket";
import Main from "./components/main/Main";

function App() {
  let routes = [
    {
      id: 1,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 2,
      path: "/kids",
      element: <Kids />,
    },
    {
      id: 3,
      path: "/men",
      element: <Men />,
    },
    {
      id: 4,
      path: "/women",
      element: <Women />,
    },
    {
      id: 5,
      path: "/sale",
      element: <Sale />,
    },
    {
      id: 6,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 7,
      path: "/",
      element: <Main />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
