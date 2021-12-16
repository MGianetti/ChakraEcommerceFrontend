import axios from 'axios';

export const getAllItems = async () => {
  const { data } = await axios.get('http://localhost:3001/api/product/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const createNewItem = async newItem => {
  const { data } = await axios.post(
    'http://localhost:3001/api/product/new',
    JSON.stringify(newItem),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
