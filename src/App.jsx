import HomePage from 'components/HomePage/HomePage';
import Layout from 'components/Layout/Layout';
import OrderPage from 'components/OrderPage/OrderPage';
import ShopMenuPage from 'components/ShopMenuPage/ShopMenuPage';
import ShopPage from 'components/ShopPage/ShopPage';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shops" element={<ShopPage />}>
            <Route path=":shopId" element={<ShopMenuPage />}/>
          </Route>
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </>
  );
};
