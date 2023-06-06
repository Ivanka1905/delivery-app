import Layout from "components/Layout/Layout";
import OrderPage from "components/OrderPage/OrderPage";
import ShopPage from "components/ShopPage/ShopPage";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <><Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="order" element={<OrderPage />} />
      </Route>
    </Routes>
      <Toaster position="top-right" reverseOrder={false}></Toaster></>
   
  );
};
