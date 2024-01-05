export function reloadPage() {
  window.location.reload();
}

export function handleRenameKeysObject(originalObject) {
  const renamedKeysObject = Object.keys(originalObject).reduce((acc, key) => {
    switch (key) {
      case "identifiant_museofile":
        acc.id = originalObject[key];
        break;
      case "nom_officiel_du_musee":
        acc.nom = originalObject[key];
        break;
      default:
        acc[key] = originalObject[key];
        break;
    }
    return acc;
  }, {});

  return renamedKeysObject;
}

export function handleAddPropertyToObjectOfArray(array) {
  return array?.map((data) => ({
    ...data,
    url_image: "",
    isAdded: false,
    datePicked: "",
    hourPicked: "",
    isClicked: false,
  }));
}

export function handleRenameKeysObjectOfArray(array) {
  const renamedKeysObjectsOfArray = array?.map((data) =>
    handleRenameKeysObject(data)
  );
  const newArray = handleAddPropertyToObjectOfArray(renamedKeysObjectsOfArray);
  return newArray;
}

export function findObjectInArray(array, objectId) {
  if (array) {
    const objectFinded = array.find((data) => data.id === objectId);
    return objectFinded;
  }
}

export function filterArrayById(array, objectId) {
  const arrayFiltered = array.filter((data) => data.id !== objectId);
  return arrayFiltered;
}

export function mapArrayForChangeAddedProperty(array, objectId, isAdded) {
  const arrayMapped = array.map((data) => {
    if (data.id === objectId) {
      return {
        ...data,
        isAdded: isAdded,
      };
    } else {
      return data;
    }
  });
  return arrayMapped;
}
export function mapArrayToAddDatePicked(array, date, hour, objectId) {
  const arrayMapped = array.map((data) => {
    if (data.id === objectId) {
      return {
        ...data,
        datePicked: date,
        hourPicked: hour,
      };
    } else {
      return data;
    }
  });
  return arrayMapped;
}

export function arrayUpdatedById(array, payload) {
  const { id, url_image, nom, commune } = payload;
  const arrayUpdated = array.map((data) => {
    if (data.id === id) {
      return {
        ...data,
        url_image: url_image,
        nom: nom,
        commune: commune,
      };
    } else {
      return data;
    }
  });
  return arrayUpdated;
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
  return datas?.map((item) => item.id);
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
// export function getHour(date) {
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   if (date) {
//     const dateFormated = date.toLocaleDateString("fr-FR", options);
//     return dateFormated;
//   }
// }

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
