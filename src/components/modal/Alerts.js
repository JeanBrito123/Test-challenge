import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle} from '@material-ui/lab';

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

const SimpleAlerts = ({text, type, setMessager, messager}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === "error" ? (
      <Alert onClose={() => setMessager({status: false, text: "", type: null})} variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>{text}</strong>
      </Alert>
      ) : type === "warning" ? (
      <Alert onClose={() => setMessager({status: false, text: "", type: null})} variant="filled" severity="warning">
        <AlertTitle>Advertencia</AlertTitle>
        <strong>{text}</strong>
      </Alert>
      ) : type === "info" ? (
      <Alert onClose={() => setMessager({status: false, text: "", type: null})} variant="filled" severity="info">
        <AlertTitle>Información</AlertTitle>
        <strong>{text}</strong>
      </Alert>
      ) : (
      <Alert onClose={() => setMessager({status: false, text: "", type: null})} variant="filled" severity="success">
        <AlertTitle>Satisfactorio</AlertTitle>
        <strong>{text}</strong>
      </Alert>
      )}
    </div>
  );
}

export { SimpleAlerts };