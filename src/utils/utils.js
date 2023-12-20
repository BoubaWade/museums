export const normalizeString = (input) => {
  const normalizedString = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "");

  return normalizedString.toLowerCase();
};

export function addPropertyToDataFetched(datas) {
  return datas?.map((data) => ({
    ...data,
    url_image: "",
    isAdded: false,
    isClicked: false,
  }));
}

export function getDatasMuseumsFiltered(datas, search) {
  return datas?.filter((data) => {
    const nameOfMuseum = normalizeString(data.nom_officiel_du_musee).includes(
      normalizeString(search)
    );
    const cityOfMuseum = normalizeString(data.commune).includes(
      normalizeString(search)
    );
    const departementOfMuseum = normalizeString(data.departement).includes(
      normalizeString(search)
    );

    const codePostal = normalizeString(data.code_postal).includes(
      normalizeString(search)
    );

    if (search.length > 2) {
      return nameOfMuseum || cityOfMuseum || departementOfMuseum || codePostal;
    } else {
      return datas;
    }
  });
}

// export function calculateDistance(lat1, lon1, lat2, lon2) {
//   const earthRadius = 6371;
//   const toRadians = (degrees) => (degrees * Math.PI) / 180;

//   const dLat = toRadians(lat2 - lat1);
//   const dLon = toRadians(lon2 - lon1);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(toRadians(lat1)) *
//       Math.cos(toRadians(lat2)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = earthRadius * c;
//   const distanceRounded = Math.round(distance * 100) / 100;

//   return distanceRounded;
// }

export function getAllMuseumsId(datas) {
  return datas?.map((item) => item.identifiant_museofile);
}

export function getFormatedDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (date) {
    const dateFormated = date.toLocaleDateString("fr-FR", options);
    return dateFormated;
  }
}

// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setUserLocation({ latitude, longitude });
//       },
//       (error) => {
//         console.error("Erreur de géolocalisation : ", error);
//       }
//     );
//   } else {
//     console.log(
//       "La géolocalisation n'est pas prise en charge par ce navigateur."
//     );
//   }
// }, []);
