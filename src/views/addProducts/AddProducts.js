import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import Container from "../../generic-styles/Container";
import Text from "../../generic-styles/Text";
import { getProducts, putProducts } from "../../redux/products";
import TableCrud from "../../components/table/TableCrud";
import Buttons from '../../components/button/Buttons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CustomDialogs from "../../components/modal/ModalDialog";
import { addlist } from "../../redux/cars";

const useStyles = makeStyles(theme => ({
  icon: {
    paddingRight: 10
  },
}));

const ListProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.products;
  })
  const listCars = useSelector(state => {
    return state.listProducts;
  })
  const theme = useSelector(state => {
    return state.colors.colors;
  })
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (data && !data.products) {
      dispatch(getProducts());
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
  const handleClickOpen = () => {
    setInfo({});
    setOpen(true);
  };
  const handleCreateProducts = (values) => {
    if (data && data.products) {
      values = { ...values, id: data.products.length + 1 }
      let res = data.products;
      res.push(values);
      dispatch(putProducts(res))
      setInfo({})
      setOpen(false)
    }
  }
  const handleUpdateProducts = (values) => {
    if (data && data.products) {
      let res = data.products.reduce((all, it) => {
        if (it.id === values.id) {
          return [...all, values]
        }
        return [...all, it]
      }, []);
      dispatch(putProducts(res))
      setInfo({})
      setOpen(false)
    }
  }
  const handleDeleteProduct = (id) => {
    let res = data.products.reduce((all, it) => {
      if (it.id === id) {
        return all
      }
      return [...all, it]
    }, []);
    let list = listCars.listProducts.reduce((all, it) => {
      if (it.id === id) {
        return all
      }
      return [...all, it]
    }, []);

    dispatch(addlist([...list]))
    dispatch(putProducts(res))
  }

  const classes = useStyles(theme);

  return (
    <Fragment>
      <Container color="white">
        <Container display="grid" gridColumns="auto auto" padding="20px" >
          <Text
            {...{
              fontSize: "40px",
              fontSizeSms: "28px",
              fontWeight: "bold",
              color: (theme || {}).color
            }}>
            Crear productos
          </Text>
          <Container display="flex" justifyContent="flex-end">
            <Buttons
              {...{
                action: () => handleClickOpen(),
                label: "Create",
                icons: <AddCircleOutlineIcon className={classes.icon} />,
                styles: { width: "300px", height: "50px", widthSm: "200px", heightSm: "40px" }
              }}
            />
          </Container>
        </Container>
        <TableCrud
          {...{
            data: (data || {}).products,
            setInfo,
            setOpen,
            handleDeleteProduct,
            handleUpdateProducts,
            theme
          }}
        />
      </Container>
      <CustomDialogs
        {...{
          open,
          setOpen,
          action: (info || {}).id ? handleUpdateProducts : handleCreateProducts,
          data: info
        }}
      />
    </Fragment>
  );
}

export default ListProducts;