import axios from "axios";

export const getLocationRandom = async ({
  URLLocationRandom,
  setLocationRandom,
}) => {
  try {
    const res = await axios.get(URLLocationRandom);
    setLocationRandom({
      name: res.data.name,
      type: res.data.type,
      dimension: res.data.dimension,
      numberOfResidents: res.data.residents,
    });
  } catch {
    console.error("error");
  }
};

export const getResident = async ({ URLResident, setResident, resident }) => {
  try {
    const res = await axios.get(URLResident);
    setResident([
      {
        residentName: res.data.name,
        image: res.data.image,
        status: res.data.status,
        species: res.data.species,
        gender: res.data.gender,
        origin: res.data.origin,
        episode: res.data.episode,
      },
    ]);
    console.log(resident);
  } catch {
    console.error("error");
  }
};

// export const getResident = async ({ URLResident }) => {
//   console.log(`URL: ${URLResident}`);
//   try {
//     const res = await axios.get(URLResident);
//     console.log(res);
//   } catch {
//     console.error("error");
//   }
// };
