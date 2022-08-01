import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Container from '../../generic-styles/Container';
import Search from '../search';
import Buttons from '../button/Buttons';
import TemporaryDrawer from './Drawer';
import { colors } from "../../redux/theme";

const Menu = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkeds, setCheckeds, background, theme } = props;
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setCheckeds(!checkeds);
    dispatch(colors({...theme, status: !checkeds }))
  };
  return (
    <React.Fragment>
    <Container
      {...{
        width: "100%",
        height: "60px",
        display: "grid",
        displayXss: "flex",
        gridColumnsSm: "80px auto 100px",
        gridColumns: "70px 500px auto 100px",
        backgroundColor: background,
        alignItems: "center",
        justifyItems: "center",
        justicontentXss: "space-between",
        position:"fixed",
        top: "0px",
        zIndex: "99999999",
        boxShadow: "3px 3px 3px gray"
      }}
    >
      <Container
        {...{ color: (theme || {}).color, display: "grid", alignItems: "center", justifyItems: "center", padding: "0px 20px" }}
        onClick={() => setOpen(!open)}
      >
        <div> <MenuIcon fontSize="large" /> </div>
      </Container>
      <Container {...{ color: "#ffffff", display: "grid", alignItems: "center", justifyItems: "center", displaySmm: "none" }}>
        <Search />
      </Container>
      <Container
        {...{ width: "100%", display: "flex", justifyContentSm: "center", displayXss: "none" }}
      >
        <Buttons {...{ icons: <HomeIcon />, label: "Inicio", action : () => navigate("/") }} />
        <Buttons {...{ icons: <AddBoxIcon />, label: "Agregar", action : () => navigate("/add-products") }} />
        <Buttons {...{ icons: <FormatListNumberedIcon />, label: "Productos", action : () => navigate("/list-products") }} />
        <Buttons {...{ icons: <AddShoppingCartIcon />, label: "Carrito", action : () => navigate("/cars") }} />
      </Container>
      <Container padding="0px 20px" >
        <Switch
          checked={checkeds}
          onChange={handleChange}
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Container>
    </Container>
    <TemporaryDrawer {...{ open, setOpen }} />
    </React.Fragment>
  )
}

export default Menu;