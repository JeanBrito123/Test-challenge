import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '../../generic-styles/Container';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const { innerWidth } = window;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const useStyles = makeStyles({
  root: {
    overflow: "auto",
    maxHeight: "550px"
  },
  table: {
    minWidth: 370,
    "& .MuiTableCell-root": {
      padding: 8
    },
    "& .MuiIconButton-root": {
      padding: 8
    }
  },
  dark: {
    "& .MuiTableCell-root": {
      color: "#FFFFFF"
    },
    "& .MuiIconButton-root": {
      color: "#FFFFFF"
    }
  },
  default: {
    "& .MuiTableCell-root": {
      color: "#1b2021"
    },
    "& .MuiIconButton-root": {
      color: "#1b2021"
    },
  }
});

const TableCrud = (props) => {
  const { data, setInfo, setOpen, handleDeleteProduct, theme } = props;
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <Table className={clsx(classes.table, (theme || {}).status ? classes.dark : classes.default)} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Ref.</TableCell>
            <TableCell align="center">Producto</TableCell>
            {innerWidth < 580 ? null : (
              <TableCell align="center">Imagen</TableCell>
            )}
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length ? data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center"> {row.id} </TableCell>
              <TableCell align="center"> {row.name} </TableCell>
              {innerWidth < 580 ? null : (
                <TableCell align="center"> {row.img} </TableCell>
              )}
              <TableCell align="center">{row.acount}</TableCell>
              <TableCell align="center">{formatter.format(row.price)}</TableCell>
              <TableCell align="center">
                <Container display="grid" gridColumns="auto auto">
                  
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      setOpen(true);
                      setInfo(row);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="remove"
                    onClick={() => {handleDeleteProduct(row.id)}}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </Container>
              </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCrud;