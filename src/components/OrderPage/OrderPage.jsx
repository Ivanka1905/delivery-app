import React, { useEffect, useState } from 'react';
import {
  FormEl,
  FormElements,
  Label,
  Price,
  Submit,
  Title,
  TitleSmall,
  TitleMain,
  LiItem,
  UlItems,
  Input,
  Button,
} from './Order.styled';
import { addOrder, getAll } from 'services/productsApi';

function OrderPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAll();
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        const filteredProducts = allProducts.filter(product =>
          items.includes(product._id)
        );
        setCartItems(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = e => {
    const { id } = e.currentTarget.dataset;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex(item => item === id);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item._id !== id)
    );
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        console.log('Error');
    }
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cartItems));
    // eslint-disable-next-line
  }, [cartItems]);

  const handleChangeAmount = (event, itemId) => {
    const { value } = event.target;
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map(item => {
        if (item._id === itemId) {
          return { ...item, amount: parseInt(value) };
        }
        return item;
      });
      setTotalPrice(calculateTotalPrice(updatedCartItems));
      return updatedCartItems;
    });
  };

  const calculateTotalPrice = () => {
    if (cartItems.length > 0) {
      const price = cartItems.reduce(
        (total, { price, amount = 1 }) => total + price * amount,
        0
      );
      return price;
    } else {
      return 0;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const order = cartItems.map(({ food, price, amount }) => ({
      food,
      price,
      amount,
    }));

    const myOrder = {
      totalPrice,
      cafe: cartItems.length > 0 ? cartItems[0].cafe : '',
      order,
    };

    const data = {
      name,
      phone,
      email,
      address,
      myOrder,
    };
    addOrder(data);

    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormElements>
        {' '}
        <Label>
          Name
          <Input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Enter valid name"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            value={email}
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter valid email"
            name="email"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            value={phone}
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Address
          <Input
            type="text"
            value={address}
            title="Enter valid address"
            name="address"
            required
            onChange={handleChange}
          />
        </Label>
      </FormElements>
      <div>
        <TitleMain>Cart Items</TitleMain>
        {cartItems.length > 0 ? (
          <div>
            <UlItems>
              {cartItems.map(({ _id, image, food, price, cafe, amount }) => (
                <LiItem key={_id}>
                  <img src={image} alt={food} />
                  <Title>{cafe}</Title>
                  <TitleSmall>
                    <Price>
                      <div>{food}</div>
                      <div>Price: {price}</div>
                      <div>
                        Amount:{' '}
                        <select
                          value={amount}
                          onChange={event => handleChangeAmount(event, _id)}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                    </Price>
                    <button type="button" data-id={_id} onClick={handleClick}>
                      Remove from cart
                    </button>
                  </TitleSmall>
                </LiItem>
              ))}
            </UlItems>
            <Submit>
              <div>Total: {totalPrice}</div>
            </Submit>
          </div>
        ) : (
          <Submit>No items in cart</Submit>
        )}
        <Button type="submit" disabled={cartItems.length === 0}>
          Submit
        </Button>
      </div>
    </FormEl>
  );
}

export default OrderPage;
