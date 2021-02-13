import React, { useEffect, useState } from "react";
import { getLocationRandom } from "../../utils/callApi";
import { URLLocationRandom } from "../../utils/urlApi";
import { LocationInfo } from "../locationInfo/LocationInfo";
import { ResidentContainer } from "../residentContainer/ResidentContainer";

export const LocationContainer = () => {
  const [locationRandom, setLocationRandom] = useState({
    name: "",
    type: "",
    dimension: "",
    numberOfResidents: [],
  });

  const [loading, setLoading] = useState(true);
  const { name, type, dimension, numberOfResidents } = locationRandom;

  useEffect(() => {
    getLocationRandom({ URLLocationRandom, setLocationRandom });
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>LocationContainer</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <LocationInfo
            name={name}
            type={type}
            dimension={dimension}
            numberOfResidents={numberOfResidents}
          />
          <div>
            <ResidentContainer
              name={name}
              numberOfResidents={numberOfResidents}
            />
          </div>
        </div>
      )}
    </div>
  );
};
