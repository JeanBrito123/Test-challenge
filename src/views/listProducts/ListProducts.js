import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Cards from "../../components/cards/CardsProducts";
import Container from "../../generic-styles/Container";
import Text from "../../generic-styles/Text";
import { getProducts } from "../../redux/products";
import { Alerts } from "../../components/modal/Alerts";

const ListProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.products;
  })

  const theme = useSelector(state => {
    return state.colors.colors;
  })
  const [messager, setMessager] = useState({ text: "", type: null })

  useEffect(() => {
    if (data && !data.products) {
      dispatch(getProducts());
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <Fragment>
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
        <div> </div>
      </Container>
      <Container
        display="grid"
        gridColumns="auto auto auto auto"
        gridColumnsSml="auto auto auto"
        colSms="auto auto"
        colXs="auto"
        justifyItems="center"
        overflow="auto"
        maxHeight="570px"
      >
        {data && data.products && data.products.length ? data.products.map((e, i) => {
          return e && e.acount > 0 && (
            <Cards
              key={i}
              {...e}
              setData={setMessager}
            />
          )
        })
        : null}
      </Container>
      {(messager || {}).status ? (
        <Alerts {...{ ...messager, setMessager, milisecond: 1000 }} />
      ) : null}
    </Fragment>
  );
}

export default ListProducts;