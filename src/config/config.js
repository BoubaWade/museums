export const initialCredentials = {
  email: "",
  password: "",
  confirmPassword: "",
};
export const initialErrorField = {
  erroremail: "",
  errorPassword: "",
  errorConfirmPassword: "",
};

export const inputFieldsSignUp = (credentials, handleChange, errorField) => {
  return [
    {
      type: "email",
      placeholder: "Votre e-mail",
      name: "email",
      value: credentials.email,
      onChange: handleChange,
      error: errorField.errorEmail,
      autoFocus: true,
    },
    {
      type: "password",
      placeholder: "Mot de passe",
      name: "password",
      value: credentials.password,
      onChange: handleChange,
      error: errorField.errorPassword,
      autoFocus: false,
    },
    {
      type: "password",
      placeholder: "Confirmation mot de passe",
      name: "confirmPassword",
      value: credentials.confirmPassword,
      onChange: handleChange,
      error: errorField.errorConfirmPassword,
      autoFocus: false,
    },
  ];
};

export const inputFieldsUpdateCard = (dataUpdated, handleChange) => {
  return [
    {
      type: "text",
      placeholder: "Entrer l'url de l'image",
      name: "url_image",
      value: dataUpdated.url_image,
      onChange: handleChange,
    },
    {
      type: "text",
      placeholder: "Entrer le nom du musée",
      name: "nom_officiel_du_musee",
      value: dataUpdated.nom_officiel_du_musee,
      onChange: handleChange,
    },
    {
      type: "text",
      placeholder: "Entrer nom de la ville",
      name: "commune",
      value: dataUpdated.commune,
      onChange: handleChange,
    },
  ];
};

export const inputFieldsCardSection = (data) => {
  return [
    {
      icon: data.FaImage,
      placeholder: "URL de l'image du musée",
      name: "url_image",
      value: data.url_image,
    },
    {
      icon: data.MdOutlineMuseum,
      placeholder: "Entrer le nom du musée",
      name: "nom_officiel_du_musee",
      value: data.nom_officiel_du_musee,
    },
    {
      icon: data.FaCity,
      placeholder: "Ville du musée",
      name: "commune",
      value: data.commune,
    },
  ];
};

export const inputFieldsSettings = (data) => {
  return [
    {
      placeholder: "Prénom",
      name: "firstName",
      value: data.firstName,
      autoFocus: true,
    },
    {
      placeholder: "Nom",
      name: "lastName",
      value: data.lastName,
      autoFocus: false,
    },
    {
      placeholder: "Pseudo",
      name: "pseudo",
      value: data.pseudo,
      autoFocus: false,
    },
    {
      placeholder: "E-mail",
      name: "email",
      value: data.email,
      autoFocus: false,
    },
  ];
};

export const inputFieldsSignIn = (emailRef, passwordRef, userEmail) => {
  return [
    {
      type: "email",
      className: "input",
      placeholder: "E-mail",
      defaultValue: userEmail,
      ref: emailRef,
    },
    {
      type: "password",
      className: "input",
      placeholder: "Mot de passe",
      defaultValue: "",
      ref: passwordRef,
    },
  ];
};

export const initialInputSettingsValue = {
  firstName: "",
  lastName: "",
  pseudo: "",
  email: "",
};
