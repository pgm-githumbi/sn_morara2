import Navbar from "./features/nav/Navbar";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { about, create, homepage, search } from "./routePaths";
import About from "./features/content/About";
import Homepage from "./features/content/Homepage";
import SearchPage from "./features/content/SearchPage";
import Products from "./features/products/Products";
import CreateProduct from "./features/products/CreateProduct";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path={about} element={<About />} />
      <Route path={homepage} element={<Homepage />} />
      <Route path={search} element={<SearchPage />} />
      <Route path={create} element={<CreateProduct />} />
      <Route index element={<Products />} />
    </Route>
  )
);

export default appRouter;
