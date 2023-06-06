// import ShopMenuPage from 'components/ShopMenuPage/ShopMenuPage';
import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function ShopPage() {
  return (
    <>
      <div>
        <div>Тут будуть магазини</div>
        <NavLink to="menu">shop1</NavLink>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default ShopPage;
