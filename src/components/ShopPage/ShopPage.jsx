import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getAll } from 'services/productsApi';
import { NavUl, NavItem } from './ShopPage.styled';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await getAll();
        setProducts(prod);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const uniqueNames = [...new Set(products.map(product => product.cafe))];

  return (
    uniqueNames.length > 0 && (
      <>
        <div>
          <NavUl>
            {uniqueNames.map(c => {
              return (
                <li key={c}>
                  <NavItem to={c} state={{ from: `${location.pathname}` }}>
                    {c}
                  </NavItem>
                </li>
              );
            })}
          </NavUl>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
    )
  );
}
export default ShopPage;
