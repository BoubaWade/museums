import styled from "styled-components";

export default function ListMuseumInfos({ datas }) {
  const { adresse, code_postal, commune, telephone, url } = datas;
  const museumInfos = [
    { label: "Adresse", value: adresse },
    { label: "Code Postal", value: code_postal },
    { label: "Ville", value: commune },
    { label: "Tél", value: telephone },
    { label: "Site", value: url },
  ];

  return (
    <ListMuseumInfosStyled>
      {museumInfos.map(({ label, value }) => (
        <li key={label}>
          <span>{label}</span> : {value ? value : "inconnu(e)"}
        </li>
      ))}
    </ListMuseumInfosStyled>
  );
}

const ListMuseumInfosStyled = styled.ul`
  padding: 0 10px;
  li {
    background-color: #f6e9f6;
    font-size: 14px;
    font-size: bold;
    padding: 10px 15px;
    margin: 10px 0;
    border: 1.5px solid #b659b65f;
    border-radius: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      font-weight: 600;
    }
  }
`;
