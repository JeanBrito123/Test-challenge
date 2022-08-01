import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Cards from "../../components/cards/CardsProducts";
import Container from "../../generic-styles/Container";
import Text from "../../generic-styles/Text";
import { getProducts } from "../../redux/products";

const ListProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.products;
  })

  const theme = useSelector(state => {
    return state.colors.colors;
  })

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
          return (
            <Cards
              key={i}
              {...e}
            />
          )
        })
        : null}
      </Container>
    </Fragment>
  );
}

export default ListProducts;