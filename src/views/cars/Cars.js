import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import BasicTable from "../../components/table/Table";
import { putProducts } from "../../redux/products";
import { addlist } from "../../redux/cars";
import { Container as Div} from "../../generic-styles/Container";
import Buttons from "../../components/button/Buttons";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Cards = () => {
  const navigate = useNavigate();
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
    console.log("data.products", data.products);
    console.log("list.listProducts", list.listProducts);
    if (list && list.listProducts) {
      let res = data.products.reduce((all, item) => {
        let it = list.listProducts.find(e => e.id === item.id);
        if (it) {
          return [...all, { ...item, acount: item.acount - it.acount }]
        }
        return [...all, item];
      }, []);
      console.log("res", res);
      dispatch(putProducts(res));
      dispatch(addlist([]));
      navigate("/list-products");
    }
  }
  return (
    <Fragment>
      <Container>
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
                action={list && list.listProducts ? () => handleBuy() : () => { }}
                {...{ styles: { width: "100%", maxWidth: "120px", height: "50px" }}}
              />
          </Div>
          <Div />
          <Div>
            <Buttons
                label="Limpiar"
                icons={<DeleteForeverIcon />}
                action={(list && list.listProducts ? () => dispatch(addlist([])) : () => { })}
                {...{ styles: { width: "100%", maxWidth: "120px", height: "50px" }}}
              />
          </Div>
        </Div>
      </Container>
    </Fragment>
  );
}

export default Cards;