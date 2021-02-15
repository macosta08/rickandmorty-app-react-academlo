import axios from "axios";
import { URLapi } from "./urlApi";
import { toast } from "react-toastify";

const handleError = (error) => {
  console.error(error.response.data.error);
  toast(error.response.data.error, {
    type: "dark",
    autoClose: 3000,
    position: "top-center",
  });
};

export const getLocationRandom = async ({ URLLocationRandom, setLocation }) => {
  try {
    const res = await axios.get(URLLocationRandom);
    setLocation({
      name: res.data.name,
      type: res.data.type,
      dimension: res.data.dimension,
      arrayUrlResidents: res.data.residents,
    });
  } catch (error) {
    handleError(error);
  }
};

export const getResident = async ({ URLResidents, setResidents }) => {
  try {
    const res = await axios.get(URLResidents);
    setResidents(res.data);
  } catch (error) {
    handleError(error);
  }
};

export const getNewLocation = async ({ URLNewLocation, setLocation }) => {
  try {
    const res = await axios.get(URLNewLocation);
    setLocation({
      name: res.data.results[0].name,
      type: res.data.results[0].type,
      dimension: res.data.results[0].dimension,
      arrayUrlResidents: res.data.results[0].residents,
    });
  } catch (error) {
    handleError(error);
  }
};

export const getAllLocationNames = async ({ setLocationNames }) => {
  const URLLocation = `${URLapi}location/`;
  let locations = [];
  try {
    const res = await axios.get(URLLocation);
    const { pages } = res.data.info;
    for (let page = 1; page <= pages; page++) {
      const res = await axios.get(`${URLLocation}?page=${page}`);
      res.data.results.map((loc) => {
        const { name } = loc;
        locations.push(name);
      });
    }
    setLocationNames(locations);
  } catch (error) {
    handleError(error);
  }
};
