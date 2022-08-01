import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});
const useStyles = makeStyles({
  spacing: {
    margin: "5px 0px"
  },
  button: {
    padding: 12
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: 300
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomDialogs = ({ open, setOpen, action, data }) => {
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState(null)
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (data && data.id) {
      setValues(data)
    } else {
      setValues({})
    }
  }, [data]);
  const InputText = ({ name, label, values, setValues, type }) => {
    return (
      <TextField
        className={classes.spacing}
        fullWidth
        required
        variant="outlined"
        value={(values || {})[name] || ""}
        name={name}
        type={type || "text"}
        label={label}
        onChange={({ target: { value, name } }) => setValues({ ...values, [name]: value })}
      />
    )
  }
  const validated = (values) => {
    if (values.name === (undefined || "")) {
      setErrors("El Campo nombre es requerido")
      return
    }
    if (values.price === (undefined || "")) {
      setErrors("El Campo nombre es requerido")
      return
    }
    if (values.acount === (undefined || "")) {
      setErrors("El Campo nombre es requerido")
      return
    }
    if (values.img === (undefined || "")) {
      setErrors("El Campo nombre es requerido")
      return
    }
    setValues({})
    action(values)
  }
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Crear Nuevo Producto
        </DialogTitle>
        <DialogContent dividers>
          {InputText({ ...{ values, setValues, name: "name", label: "Nombre" } })}
          {InputText({ ...{ values, setValues, name: "price", label: "Precio", type: "number" } })}
          {InputText({ ...{ values, setValues, name: "acount", label: "Cantidad", type: "number" } })}
          {InputText({ ...{ values, setValues, name: "img", label: "Imagen" } })}
          {errors ? (
            <p>{errors}</p>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            fullWidth
            autoFocus
            variant="contained"
            color="primary"
            onClick={() => validated(values)}
          >
            {values && values.id ? "Guardar Cambios" : "Guardar Producto"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialogs;