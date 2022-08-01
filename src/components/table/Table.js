import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles({
  root: {
    overflow: "auto",
    maxHeight: "500px"
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
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const BasicTable = ({ data, total, theme }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <TableContainer className={classes.root}>
        <Table className={clsx(classes.table, (theme || {}).status ? classes.dark : classes.default)} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Producto</TableCell>
              <TableCell align="center">cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length ? data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.acount}</TableCell>
                <TableCell align="right">{formatter.format(row.price)}</TableCell>
              </TableRow>
            )) : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className={classes.root}>
        <Table className={clsx(classes.table, (theme || {}).status ? classes.dark : classes.default)} aria-label="simple table">
          <TableBody>
            {total ? (
              <TableRow key={total.name}>
                <TableCell align="left">
                  <strong>Total compra</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{formatter.format(total.totalPrice)}</strong>
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default BasicTable;