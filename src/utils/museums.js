export const normalizeString = (input) => {
  if (input) {
    const normalizedString = input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g, "");

    return normalizedString.toLowerCase();
  }
};

export function getMuseumsFiltered(datas, search) {
  if (datas) {
    return datas.filter((data) => {
      const nameOfMuseum = normalizeString(data.nom)?.includes(
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
        return (
          nameOfMuseum || cityOfMuseum || departementOfMuseum || codePostal
        );
      } else {
        return datas;
      }
    });
  }
}

export function getMuseumsSortedByCity(datas, isAscending) {
  if (isAscending) {
    return datas?.sort((a, b) => b.commune.localeCompare(a.commune));
  } else {
    return datas?.sort((a, b) => a.commune.localeCompare(b.commune));
  }
}
