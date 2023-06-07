import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { getAll } from 'services/productsApi';
import { Container, UlItems, LiItem, Title, TitleSmall, Price } from './ShopMenuPage.styled';

function ShopMenuPage() {
  const { shopId } = useParams();
  const [shopProducts, setShopProducts] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await getAll();
        const e = prod.filter(p => p.cafe === shopId);
        setShopProducts(e);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [shopId]);

  const handleClick = e => {
    const { id } = e.currentTarget.dataset;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex(item => item === id);
    if (itemIndex === -1) {
      cartItems.push(id);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    toast.success('Successfully added to your cart!');
    setFavoriteItems(prevFavoriteItems => [...prevFavoriteItems, id]);
  };

  const isProductInCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems.includes(id);
  };

  return (
    shopProducts.length > 0 && (
      <Container>
                  <UlItems>
            {shopProducts.map(({ _id, image, food, price, cafe }) => {
              const isFavorite = favoriteItems.includes(_id);
              return (
                <LiItem key={_id}>
                  <img src={image} alt={food} width="260px"/>
                      <Title>{cafe}</Title>
                      <TitleSmall><Price><div>{food}</div>
                  <div>Price: {price} &#8372;</div></Price>
                  <button
                    type="button"
                    data-id={_id}
                    onClick={handleClick}
                    disabled={isProductInCart(_id)}
                  >
                    {isFavorite || isProductInCart(_id)
                      ? 'Added'
                      : 'Add to cart'}
                  </button></TitleSmall>
                  
                </LiItem>
              );
            })}
          </UlItems>
       
      </Container>
    )
  );
}

export default ShopMenuPage;
