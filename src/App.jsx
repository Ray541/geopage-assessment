import { useState, useEffect } from "react";
import DropdownMenu from "./components/DropDownMenu/DropDownMenu";
import data from "./assets/list.json"; // JSON data
import { Button, Stack } from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const CascadingDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubDistricts] = useState([]);
  const [village, setVillage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  const [selectedOptions, setSelectedOptions] = useState({
    Country: "",
    State: "",
    District: "",
    "Sub District": "",
    Village: "",
  });

  useEffect(() => {
    // Extract unique values for countries, states, and districts from data
    const uniqueCountries = [...new Set(data.map((item) => item.Country))];
    setCountries(uniqueCountries);
  }, []);

  /**@returns Extract unique State from the unique Country */
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedDistrict("");

    const filteredStates = [
      ...new Set(
        data
          .filter((country) => country.Country === event.target.value)
          .map((state) => state.State)
      ),
    ];
    setStates(filteredStates);
  };

  /**@returns Extract unique District from the unique State */
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");

    const filteredDistricts = [
      ...new Set(
        data
          .filter((state) => state.State === event.target.value)
          .map((district) => district.District)
      ),
    ];
    setDistricts(filteredDistricts);
  };

  /**@returns Extract unique Sub-District from the unique District */
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedSubDistrict("");

    const filteredSubDistricts = [
      ...new Set(
        data
          .filter((district) => district.District === event.target.value)
          .map((subDistrict) => subDistrict["Sub District"])
      ),
    ];
    setSubDistricts(filteredSubDistricts);
  };

  /**@returns Extract unique Village from the unique Sub-District */
  const handleSubDistrictChange = (event) => {
    setSelectedSubDistrict(event.target.value);
    setSelectedVillage("");

    const filteredVillage = [
      ...new Set(
        data
          .filter(
            (subDistrict) => subDistrict["Sub District"] === event.target.value
          )
          .map((village) => village.Village)
      ),
    ];
    setVillage(filteredVillage);
  };

  /**@returns sets selected village in the selectedVillage state */
  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };

  const [showData, setShowData] = useState(false); //state for conditionaly rendering the Selected Options

  /**@returns Resets the options */
  const handleResetClick = () => {
    setSelectedCountry("");
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");

    setShowData(false);
  };

  /**@returns sets selected option by the user in the selectedOptions state and logs the data in console */
  const handleSubmitClick = () => {
    setSelectedOptions({
      Country: selectedCountry,
      State: selectedState,
      District: selectedDistrict,
      "Sub District": selectedSubDistrict,
      Village: selectedVillage,
    });

    console.log({
      Country: selectedCountry,
      State: selectedState,
      District: selectedDistrict,
      "Sub District": selectedSubDistrict,
      Village: selectedVillage,
    });

    setShowData(true);
  };

  return (
    <Stack
      width={"100%"}
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
      padding={{ xs: 1.5, md: 0 }}
    >
      <Stack textAlign={{ xs: "center", md: "left" }} mb={{ xs: 2, md: 4 }}>
        <h1 style={projectTitleH1Styles}>
          Project Title:{" "}
          <p style={projectTitlePStyles}>Linked Dropdowns with MaterialUI</p>
        </h1>
      </Stack>

      <Stack
        gap={7}
        direction={{ md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          gap={2.5}
          border={{ lg: 2 }}
          borderRadius={2}
          padding={{ md: 2.5 }}
        >
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, md: 3 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <DropdownMenu
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder={"Country"}
            />
            <DropdownMenu
              options={states}
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry}
              placeholder={"State"}
            />
          </Stack>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, md: 3 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <DropdownMenu
              options={districts}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedState}
              placeholder={"District"}
            />
            <DropdownMenu
              options={subdistricts}
              value={selectedSubDistrict}
              onChange={handleSubDistrictChange}
              disabled={!selectedDistrict}
              placeholder={"Sub-District"}
            />
          </Stack>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, md: 3 }}
            alignItems={"end"}
            justifyContent={"center"}
          >
            <DropdownMenu
              minHeight={"100vh"}
              options={village}
              value={selectedVillage}
              onChange={handleVillageChange}
              disabled={!selectedSubDistrict}
              placeholder={"Village"}
            />
            <Stack gap={{ xs: 3, sm: 2, lg: 0.5 }}>
              <Button
                style={{
                  width: 275,
                  color: `${!selectedCountry ? "silver" : "black"}`,
                  border: `2px solid ${!selectedCountry ? "silver" : "black"}`,
                }}
                variant="outlined"
                endIcon={<CancelRoundedIcon />}
                onClick={handleResetClick}
                disabled={!selectedCountry ? true : false}
              >
                Reset
              </Button>
              <Button
                style={{
                  width: 275,
                  color: `${!selectedVillage ? "silver" : "black"}`,
                  border: `2px solid ${!selectedVillage ? "silver" : "black"}`,
                }}
                variant="outlined"
                endIcon={<DoneAllRoundedIcon />}
                onClick={handleSubmitClick}
                disabled={!selectedVillage ? true : false}
              >
                Done
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          border={2}
          borderRadius={2}
          borderColor={"#2200FF"}
          padding={2}
          alignItems={{ md: "flex-start" }}
          justifyContent={"center"}
          height={"max-content"}
        >
          {showData ? (
            <Stack gap={1.5}>
              <h3 style={selectedH3Styles}>Selected Options</h3>
              <p style={selectedPStyles}>
                Country:{" "}
                <span style={selectedSpanStyles}>
                  {selectedOptions.Country}
                </span>
              </p>
              <p style={selectedPStyles}>
                State:{" "}
                <span style={selectedSpanStyles}>{selectedOptions.State}</span>
              </p>
              <p style={selectedPStyles}>
                District:{" "}
                <span style={selectedSpanStyles}>
                  {selectedOptions.District}
                </span>
              </p>
              <p style={selectedPStyles}>
                Sub-District:{" "}
                <span style={selectedSpanStyles}>
                  {selectedOptions["Sub District"]}
                </span>
              </p>
              <p style={selectedPStyles}>
                Village:{" "}
                <span style={selectedSpanStyles}>
                  {selectedOptions.Village}
                </span>
              </p>
            </Stack>
          ) : (
            <h3 style={selectedH3Styles}>Select Options</h3>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

// Styling Properties

const projectTitleH1Styles = {
  fontWeight: 700,
  color: "#0022FF",
  letterSpacing: 1,
};

const projectTitlePStyles = {
  fontWeight: 600,
  color: "#0088FF",
  letterSpacing: 1,
  fontSize: 50,
};

const selectedH3Styles = {
  fontSize: 25,
  letterSpacing: 0.7,
  marginBottom: 5,
};

const selectedPStyles = {
  color: "#0022FF",
  fontSize: 22,
  letterSpacing: 0.5,
};

const selectedSpanStyles = {
  fontSize: 17,
  color: "gray",
};

export default CascadingDropdown;
