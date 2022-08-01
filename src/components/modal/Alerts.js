import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 80,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SimpleAlerts = ({ text, type, setMessager }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === "error" ? (
        <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      ) : type === "warning" ? (
        <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="warning">
          <AlertTitle>Advertencia</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      ) : type === "info" ? (
        <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="info">
          <AlertTitle>Información</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      ) : (
        <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="success">
          <AlertTitle>Satisfactorio</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      )}
    </div>
  );
}

const Alerts = props => {
  const { status, text, type, setMessager, milisecond } = props;
  const classes = useStyles();

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessager({ status: false, text: "", type: null })
  };
  return (
    <div className={classes.root}>

      <Snackbar
        open={status}
        autoHideDuration={milisecond || 3000}
        onClose={handleClose}
        style={{ top: "50px", position: "absolute" }}
      >
        {type === "error" ? (
          <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{text}</strong>
          </Alert>
        ) : type === "warning" ? (
          <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="warning">
            <AlertTitle>Advertencia</AlertTitle>
            <strong>{text}</strong>
          </Alert>
        ) : type === "info" ? (
          <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="info">
            <AlertTitle>Información</AlertTitle>
            <strong>{text}</strong>
          </Alert>
        ) : (
          <Alert onClose={() => setMessager({ status: false, text: "", type: null })} variant="filled" severity="success">
            <AlertTitle>Satisfactorio</AlertTitle>
            <strong>{text}</strong>
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export { SimpleAlerts, Alerts };