export const normalizeString = (input) => {
  const normalizedString = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "");

  return normalizedString.toLowerCase();
};

export function addPropertyToDataFetched(datas) {
  return datas.map((data) => ({
    ...data,
    isAdded: false,
    isClicked: false,
  }));
}

export function getDatasMuseumsFiltered(datas, search) {
  return datas.filter((data) => {
    const nameOfMuseum = normalizeString(data.nom_officiel_du_musee).includes(
      normalizeString(search)
    );
    const cityOfMuseum = normalizeString(data.commune).includes(
      normalizeString(search)
    );
    const departementOfMuseum = normalizeString(data.departement).includes(
      normalizeString(search)
    );

    if (search.length > 2) {
      return nameOfMuseum || cityOfMuseum || departementOfMuseum;
    } else {
      return datas;
    }
  });
}
