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
      name: "nom",
      value: dataUpdated.nom,
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
      name: "nom",
      value: data.nom,
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

export const fakeBasketToTest = [
  {
    region_administrative: "île-de-France",
    departement: "Essonne",
    id: "M0401",
    commune: "Bièvres",
    nom: "musée français de la photographie",
    adresse: "78, rue de Paris",
    lieu: null,
    code_postal: "91570",
    telephone: "01 69 35 16 50",
    url_image:
      "https://museedelaphoto.essonne.fr/wp-content/uploads/sites/6/2023/04/musee-de-la-pohot-par-dft-logo.png",
    url: "photographie.essonne.fr/",
    latitude: 48.762826,
    longitude: 2.225102,
    ref_deps: "9106401",
    geolocalisation: { lon: 2.225102, lat: 48.762826 },
    date_arrete_attribution_appellation: "2003-02-01",
  },
  {
    region_administrative: "île-de-France",
    departement: "Essonne",
    id: "M0403",
    commune: "Brunoy",
    nom: "musée municipal Robert Dubois-Corneau",
    adresse: "16, rue du Réveillon",
    lieu: null,
    code_postal: "91800",
    telephone: "01 60 46 33 60",
    url_image: "https://www.brunoy.fr/wp-content/uploads/2022/05/musee.jpg",
    url: "www.brunoy.fr/vos-demarches-services/vie-culturelle-et-animations/musee/",
    latitude: 48.700308,
    longitude: 2.500293,
    ref_deps: "9111401",
    geolocalisation: { lon: 2.500293, lat: 48.700308 },
    date_arrete_attribution_appellation: "2003-02-01",
  },
  {
    region_administrative: "île-de-France",
    departement: "Hauts-de-Seine",
    id: "M0410",
    commune: "Courbevoie",
    nom: "musée Roybet-Fould",
    adresse: "Parc de Bécon, 178 Boulevard Saint Denis",
    lieu: null,
    code_postal: "92400",
    telephone: "01 71 05 77 92",
    url_image:
      "https://data.by-night.fr/uploads/documents/2020/07/18/79b984da8c9543a7895e1da7c20d7103-base.image-5f1257c01ff1b943316128.jpg",
    url: "www.museeroybetfould.fr/",
    latitude: 48.900998,
    longitude: 2.271279,
    ref_deps: "9202601",
    geolocalisation: { lon: 2.271279, lat: 48.900998 },
    date_arrete_attribution_appellation: "2003-02-01",
  },
];
