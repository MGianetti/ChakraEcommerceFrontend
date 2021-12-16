const isValidEmailInput = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const isValidPasswordInput = password => {
  return password.length >= 6;
};

const isValidUserNameInput = userName => {
  return /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(
    userName
  );
};

const isValidNameInput = name => {
  return /^[A-Za-z]+/.test(name);
};

const isValidProductNameInput = name => {
  return /^[a-zA-Z0-9]+/.test(name);
};

const isValidPrice = price => {
  var priceNumber = parseFloat(price);
  return typeof priceNumber === 'number' && isFinite(priceNumber);
};

export const validateField = {
  email: isValidEmailInput,
  password: isValidPasswordInput,
  userName: isValidUserNameInput,
  name: isValidNameInput,
  productName: isValidProductNameInput,
  description: isValidProductNameInput,
  price: isValidPrice,
};
