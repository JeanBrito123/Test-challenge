import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import BasicTable from "../../components/table/Table";
import { putProducts } from "../../redux/products";
import { addlist } from "../../redux/cars";
import { Container as Div} from "../../generic-styles/Container";
import Buttons from "../../components/button/Buttons";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Alerts } from "../../components/modal/Alerts";

const Cards = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => {
    return state.listProducts;
  });
  const data = useSelector(state => {
    return state.products;
  });
  const theme = useSelector(state => {
    return state.colors.colors;
  })
  const [messager, setMessager] = useState({ text: "", type: null })
  const operations = (data) => {
    let acount = 0, totalPrice = 0;
    if (data.length) {
      data.forEach(e => {
        let subTotal = e.acount * e.price;
        acount = acount + e.acount;
        totalPrice = totalPrice + subTotal;
      })
    }
    return { name: "Total", acount, totalPrice }
  }
  const handleBuy = () => {
    if (list && list.listProducts) {
      let res = data.products.reduce((all, item) => {
        let it = list.listProducts.find(e => e.id === item.id);
        if (it) {
          return [...all, { ...item, acount: item.acount - it.acount }]
        }
        return [...all, item];
      }, []);
      dispatch(putProducts(res));
      dispatch(addlist([]));
      setMessager({
        status: true,
        text: "Su compra se realizo satisfactoriamente",
        type: "success"
      });
    }
  }
  return (
    <Fragment>
      <Container maxWidth="md">
        <Div padding="50px 0 0 0">
        <BasicTable
          data={((list || {}).listProducts || [])}
          total={operations((list || {}).listProducts || [])}
          theme={theme}
        />
        </Div>
        <Div display="grid" gridColumns="auto 100px auto" justifyItems="center" marginTop="20px">
          <Div>
              <Buttons
                label="Comprar"
                icons={<AddShoppingCartIcon />}
                disabled={((list || {}).listProducts || []).length ? false : true}
                action={list && list.listProducts ? () => handleBuy() : () => { }}
                {...{ styles: { width: "100%", maxWidth: "120px", height: "50px" }}}
              />
          </Div>
          <Div />
          <Div>
            <Buttons
                label="Limpiar"
                icons={<DeleteForeverIcon />}
                disabled={((list || {}).listProducts || []).length ? false : true}
                action={(list && list.listProducts ? () => {
                  dispatch(addlist([]));
                  setMessager({
                    status: true,
                    text: "Productos del carrito eliminados satisfactoriamente",
                    type: "success"
                  });
                  } : () => { })}
                {...{ styles: { width: "100%", maxWidth: "120px", height: "50px" }}}
              />
          </Div>
        </Div>
      </Container>
      {(messager || {}).status ? (
        <Alerts {...{ ...messager, setMessager, milisecond: 5000 }} />
      ) : null}
    </Fragment>
  );
}

export default Cards;