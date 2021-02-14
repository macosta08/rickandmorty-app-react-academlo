const numLocationRandom = Math.floor(Math.random() * (109 - 1)) + 1;
const URLapi = "https://rickandmortyapi.com/api/";

export const URLLocationRandom = `https://rickandmortyapi.com/api/location/${numLocationRandom}`;

export const URLSearchLocation = `${URLapi}location?name=`;
export const getMultipleCharactersUrl = (
  listResidents,
  page,
  amountByPage = 10
) => {
  const urlCharacter = URLapi + "character/";
  const idxIni = amountByPage * (page - 1);
  const idxEnd = amountByPage * page;
  const reducer = (accumulator, currentValue) =>
    accumulator + "," + currentValue;
  const residentsId =
    listResidents
      .slice(idxIni, idxEnd)
      .reduce(reducer)
      .replaceAll(urlCharacter, "") + ",";

  return urlCharacter + residentsId;
};
