# Project Title: Linked Dropdowns with MaterialUI

## Tech Stack: Vite + React, MaterialUI

_Please clone the repository to set up the project_

Command to install dependency if needed:

```
npm install
```

Command to install MaterialUI:

```
npm install @mui/material @emotion/react @emotion/styled
```

Command to install MaterialUI Icons:

```
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

Command to run the project on loaclhost:

```
npm run dev
```

**Main Functionality:**
Linked Dropdowns - When user selects a country then user will get the list state respective to the country
and list districts respective to the selected state
and sub-districts respective to the district
and the village respective tot the sub-district

**Other Additional Functionalities:**
Submit Button - This button is enable only if all the options are selected
and onClick of the button the Selected Options is reflected in the UI for users to view it

Reset Button - This is diabled if the user have not selected any country and when choosen then the button is enabled
this button resets the whole options
