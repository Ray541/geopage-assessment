import Home from "./components/Home/Home";
import About from "./components/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavLink to={"/"} style={linkStyle}>
        Home
      </NavLink>
      <NavLink to={"/about"} style={linkStyle}>
        About
      </NavLink>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

// Style Properties

const linkStyle = {
  color: "black",
  backgroundColor: "#0088FF",
  margin: "10px",
  padding: "5px 10px",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: 800,
  letterSpacing: 0.7,
};

export default App;
