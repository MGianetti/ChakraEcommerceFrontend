import axios from 'axios';

export const getAllOrders = async () => {
  const { data } = await axios.get('http://localhost:3001/api/order/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const createNewOrder = async newOrder => {
  const { data } = await axios.post(
    'http://localhost:3001/api/order/new',
    JSON.stringify(newOrder),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
