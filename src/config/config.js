export const inputFieldsSignUp = (credentials, handleChange, errorField) => {
  return [
    {
      type: "email",
      placeholder: "Votre e-mail",
      name: "email",
      value: credentials.email,
      onChange: handleChange,
      error: errorField.errorEmail,
    },
    {
      type: "password",
      placeholder: "Mot de passe",
      name: "password",
      value: credentials.password,
      onChange: handleChange,
      error: errorField.errorPassword,
    },
    {
      type: "password",
      placeholder: "Confirmation mot de passe",
      name: "confirmPassword",
      value: credentials.confirmPassword,
      onChange: handleChange,
      error: errorField.errorConfirmPassword,
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
    },
    {
      placeholder: "Nom",
      name: "lastName",
      value: data.lastName,
    },
    {
      placeholder: "Pseudo",
      name: "pseudo",
      value: data.pseudo,
    },
    {
      placeholder: "E-mail",
      name: "email",
      value: data.email,
    },
  ];
};
