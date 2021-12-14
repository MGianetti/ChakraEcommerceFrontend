import axios from 'axios';

export const signUpNewUser = async newUser => {
  const { data } = await axios.post(
    'http://localhost:3001/api/users/new',
    JSON.stringify(newUser),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};

export const authUser = async user => {
  const { data } = await axios.get(
    'http://localhost:3001/api/users/auth',
    { params: user },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
