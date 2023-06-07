import axios from 'axios';
import { toast } from 'react-hot-toast';

const BASE_URL = 'https://test-project-db-02.onrender.com';
axios.defaults.baseURL = BASE_URL;

export async function getAll() {
  try {
    const response = await axios('/products');
    console.log(response.data)
    return response.data;
  
  } catch (error) {
    console.log(error.message);
  }
}

export async function addOrder(newOrder) {
  try {
    const { data } = await axios.post(`orders/order`, newOrder);
    toast.success('Thanks for your order! Successfully added!');
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      toast.error(errorMessage);
      return errorMessage;
    } else {
      toast.error(error.message);
      return error.message;
    }
  }
}
