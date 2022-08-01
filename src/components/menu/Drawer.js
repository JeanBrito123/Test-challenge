import React from 'react';
import clsx from 'clsx';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  spacing: {
    paddingTop: 60
  }
});

const TemporaryDrawer = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
        <React.Fragment key={"drawer"}>
          <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItem className={clsx(classes.list, classes.spacing)} button key={"Inicio"} onClick={() => navigate("/")}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={"Inicio"} />
            </ListItem>
            <ListItem className={classes.list} button key={"Agregar"} onClick={() => navigate("/add-products")}>
              <ListItemIcon><AddBoxIcon /></ListItemIcon>
              <ListItemText primary={"Agregar"} />
            </ListItem>
            <ListItem className={classes.list} button key={"Produtos"} onClick={() => navigate("/list-products")}>
              <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
              <ListItemText primary={"Productos"} />
            </ListItem>
            <ListItem className={classes.list} button key={"Carrito"} onClick={() => navigate("/cars")}>
              <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
              <ListItemText primary={"Carrito"} />
            </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;