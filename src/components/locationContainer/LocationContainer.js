import React, { useEffect, useState } from "react";
import { getLocationRandom, getNewLocation } from "../../utils/callApi";
import { URLLocationRandom, URLSearchLocation } from "../../utils/urlApi";
import { LocationInfo } from "../locationInfo/LocationInfo";
import { ResidentContainer } from "../residentContainer/ResidentContainer";
import { SearchBox } from "../searchBox/SearchBox";

export const LocationContainer = () => {
  const [location, setLocation] = useState({
    name: "",
    type: "",
    dimension: "",
    arrayUrlResidents: [],
  });
  const [searchInputLocation, setSearchInputLocation] = useState("");
  const [planet, setPlanet] = useState("");
  const [loading, setLoading] = useState(true);
  const { name, type, dimension, arrayUrlResidents } = location;

  useEffect(() => {
    getLocationRandom({ URLLocationRandom, setLocation });
    setLoading(false);
  }, []);

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    const planet = searchInputLocation.trim();
    const URLNewLocation = URLSearchLocation + planet;

    if (planet != "") getNewLocation({ URLNewLocation, setLocation });
    setSearchInputLocation("");
  };

  return (
    <div>
      <SearchBox
        setSearchInputLocation={setSearchInputLocation}
        searchInputLocation={searchInputLocation}
        handleSubmitLocation={handleSubmitLocation}
      />
      
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <LocationInfo
            name={name}
            type={type}
            dimension={dimension}
            arrayUrlResidents={arrayUrlResidents}
          />
          <div>
            <ResidentContainer
              name={name}
              arrayUrlResidents={arrayUrlResidents}
            />
          </div>
        </div>
      )}
    </div>
  );
};
