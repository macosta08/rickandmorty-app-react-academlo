import React, { useEffect, useState } from "react";
import {
  getAllLocationNames,
  getLocationRandom,
  getNewLocation,
} from "../../utils/callApi";
import { getSearchLocationUrl, URLLocationRandom } from "../../utils/urlApi";
import { LocationInfo } from "../locationInfo/LocationInfo";
import { ResidentContainer } from "../residentContainer/ResidentContainer";
import { SearchBox } from "../searchBox/SearchBox";
import "./locationContainer.css";
export const LocationContainer = () => {
  const [location, setLocation] = useState({
    name: "",
    type: "",
    dimension: "",
    arrayUrlResidents: [],
  });
  const [locationNames, setLocationNames] = useState([]);
  const [searchInputLocation, setSearchInputLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const { name, type, dimension, arrayUrlResidents } = location;

  useEffect(() => {
    getLocationRandom({ URLLocationRandom, setLocation });
    getAllLocationNames({ setLocationNames });
    setLoading(false);
  }, []);

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    const planet = searchInputLocation.trim();
    const URLNewLocation = getSearchLocationUrl(planet);

    if (planet != "") getNewLocation({ URLNewLocation, setLocation });
    setSearchInputLocation("");
  };

  return (
    <div>
      <SearchBox
        setSearchInputLocation={setSearchInputLocation}
        searchInputLocation={searchInputLocation}
        handleSubmitLocation={handleSubmitLocation}
        locationNames={locationNames}
      />

      {loading && (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && (
        <>
          <main role="main" className="container container-loc">
            <LocationInfo
              name={name}
              type={type}
              dimension={dimension}
              arrayUrlResidents={arrayUrlResidents}
            />
          </main>
          <ResidentContainer
            name={name}
            arrayUrlResidents={arrayUrlResidents}
          />
        </>
      )}
    </div>
  );
};
