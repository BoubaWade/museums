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

export function validateEmail(email) {
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (regexEmail.test(email)) {
    return true;
  }
}
export function validatePasswordLength(password) {
  if (password.length >= 6) {
    return true;
  }
}
export function validateConfirmPassword(password, confirmPassword) {
  if (confirmPassword === password) {
    return true;
  }
}

export function setBasketLocalStorage(value) {
  localStorage.setItem("Basket", JSON.stringify(value));
}

export function getBasketLocalStorage() {
  return JSON.parse(localStorage.getItem("Basket"));
}
