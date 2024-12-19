import { Routes, Route } from "react-router-dom";
import { RootLayout } from "../UI/rootLayout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { BooksPage } from "../pages/BooksPage";
import { SingleBookPage } from "../pages/SingleBookPage";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<SingleBookPage />} />
    </Route>
  </Routes>
);

export default RoutesComponent;
