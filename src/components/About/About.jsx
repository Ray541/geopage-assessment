import { Stack } from "@mui/material";

const About = () => {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      padding={5}
    >
      <Stack>
        <h1 style={{ color: "#0022FF", fontSize: 50 }}>Project Description:</h1>
        <h3>
          Cascading Dropdown is a React application that demonstrates linked
          dropdown menus using MaterialUI components. This project allows users
          to select a country, state, district, sub-district, and village using
          cascading dropdown menus.
        </h3>
      </Stack>

      <Stack width={"100%"} gap={5}>
        <Stack>
          <h3 style={{ color: "#0022FF", fontSize: 35 }}>Features</h3>
          <ul
            style={{
              listStyleType: "number",
              marginLeft: 30,
              letterSpacing: 0.7,
            }}
          >
            <li>
              Select country, state, district, sub-district, and village using
              linked dropdown menus.
            </li>
            <li>Dynamic dropdown menus based on the selected options.</li>
            <li>Display selected options in the UI.</li>
            <li>Log selected data in the console.</li>
          </ul>
        </Stack>

        <Stack>
          <h3 style={{ color: "#0022FF", fontSize: 35 }}>
            Additional Features
          </h3>
          <ul
            style={{
              listStyleType: "number",
              marginLeft: 30,
              letterSpacing: 0.7,
            }}
          >
            <li>Display selected options in the UI.</li>
            <li>Log selected data in the console.</li>
            <li>Reset button to reset the selected options by the user</li>
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
