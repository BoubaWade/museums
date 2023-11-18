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
