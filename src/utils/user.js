export function setEmailLocalStorage(value) {
  localStorage.setItem("email", value);
}
export function getEmailLocalStorage() {
  return localStorage.getItem("email");
}
export function setPasswordLocalStorage(value) {
  localStorage.setItem("password", value);
}
export function getPasswordLocalStorage() {
  return localStorage.getItem("password");
}
export function setCredentialsLocalStorage(email, password) {
  setEmailLocalStorage(email);
  setPasswordLocalStorage(password);
}

export function getUserName() {
  const email = getEmailLocalStorage();
  const userName = email?.split("@")[0];
  return userName;
}

// export function setBasketLocalStorage(userName, value) {
//   localStorage.setItem(`Basket_${userName}`, JSON.stringify(value));
// }
// export function getBasketLocalStorage(userName) {
//   return JSON.parse(localStorage.getItem(`Basket_${userName}`));
// }

export function setBasketLocalStorage(value) {
  localStorage.setItem("Basket", JSON.stringify(value));
}

export function getBasketLocalStorage() {
  return JSON.parse(localStorage.getItem("Basket"));
}
