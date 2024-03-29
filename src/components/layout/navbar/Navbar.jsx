import { Box, Button, Grid } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginContainer from "../../common/profile/LoginContainer";
import SearchBar from "../../common/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Home, Shop } from "@mui/icons-material";

export const Navbar = () => {
  const { isAdmin } = useContext(AuthContext);

  return (
    <Box>
      <Grid className="container">
        <Link to="/">
          <img
            className="imgLogo"
            src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1687367471/ADN-Rosario/logoADN_z4b5tt.jpg"
            alt="logoADN"
          />
        </Link>

        <Link to="/">
          <Button sx={{ color: "#2B8180" }} startIcon={<Home />}>
            Inicio
          </Button>
        </Link>

        <Link to="/tienda">
          <Button sx={{ color: "#2B8180" }} startIcon={<Shop />}>
            Tienda
          </Button>
        </Link>

        {isAdmin && (
          <Link to="/dashboard">
            <Button variant="contained" color="secondary">
              ADMIN
            </Button>
          </Link>
        )}

        <LoginContainer />
        <SearchBar />

        <CartWidget />
      </Grid>
      <Grid>
        <ul className="nav">
          <li>
            <Link to="/tienda/cereales">Cereales</Link>
          </li>
          <li>
            <Link to="/tienda/legumbres">Legumbres</Link>
          </li>
          <li>
            <Link to="/tienda/condimentos">Condimentos</Link>
          </li>
          <li>
            <Link to="/tienda/frutos-secos">Frutos Secos</Link>
          </li>
          <li>
            <Link to="/tienda/semillas">Semillas</Link>
          </li>
        </ul>
      </Grid>
    </Box>
  );
};
