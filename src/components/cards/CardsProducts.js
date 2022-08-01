import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Container from '../../generic-styles/Container';
import { addlist } from "../../redux/cars";
import Buttons from '../button/Buttons';
import Text from "../../generic-styles/Text";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 275,
    margin: "10px 0px",
    border: "1px solid #f3f3f3"
  },
  media: {
    height: 140,
  },
});

const Cards = (props) => {
  const dispatch = useDispatch();
  const list = useSelector(state => {
    return state.listProducts;
  });
  const { name, price, acount, img, id } = props;
  const { setData } = props;
  const [maxproducts, setMaxproducts] = useState(0);
  const [values, setValues] = useState(((list || {}).listProducts || []).find(e => e.id === id));
  const classes = useStyles();
  const handleAddItems = () => {
    let res = [];
    let it = false;
    if (list && list.listProducts && list.listProducts.length) {
      res = list.listProducts.reduce((all, e) => {
        if (e.id === id && maxproducts === 0) {
          it = true;
          setValues({ ...e, acount: maxproducts })
          setData({
            status: true,
            text: "Producto eliminado satisfactoriamente",
            type: "success"
          });
          return all
        }
        if (e.id === id) {
          it = true;
          setValues({ ...e, acount: maxproducts })
          return [...all, { ...e, acount: maxproducts }]
        }
        return [...all, e]
      }, []);
      if (it) {
        setData({
          status: true,
          text: "Producto modificado satisfactoriamente",
          type: "success"
        });
        dispatch(addlist([...res]))
      } else {
        setData({
          status: true,
          text: "Producto agregado satisfactoriamente",
          type: "success"
        });
        setValues({ ...props, acount: maxproducts })
        dispatch(addlist([...res, { ...props, acount: maxproducts }]))
      }
    } else {
      setData({
        status: true,
        text: "Producto agregado satisfactoriamente",
        type: "success"
      });
      setValues({ ...props, acount: maxproducts })
      dispatch(addlist([{ ...props, acount: maxproducts }]))
    }
  };
  
  useEffect(() => {
    if (list && list.listProducts) {
      let value = ((list || {}).listProducts || []).find(e => e.id === id)
      if (value)
        setMaxproducts(value.acount);
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`price ${formatter.format(price)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {acount <= 0 ? (
          <Container width="100%">
            <Text
              fontSize="24px"
              padding="10px 0px"
              textAlign="center"
              fontWeight="bold"
            >
              Sin Stock
            </Text>
          </Container>
        ) : (
          <Container display="flex" justifyContent="space-around" width="100%">
            <Container>
              {values && values.acount === 0 && maxproducts === 0 ? (
                <Buttons
                  label="Agregar"
                  disabled={true}
                  {...{ styles: { width: "60px" } }}
                >
                  Modificar
                </Buttons>
              ) : values && values.acount === maxproducts ? (
                <Buttons
                  label="Modificar"
                  disabled={true}
                  {...{ styles: { width: "60px" } }}
                >
                  Modificar
                </Buttons>
              ) : values && values.acount !== maxproducts ? (
                <Buttons
                  label="Modificar"
                  action={() => handleAddItems()}
                  {...{ styles: { width: "60px" } }}
                />
              ) : values && values.acount === 0 ? (
                <Buttons
                  label="Agregar"
                  action={maxproducts > 0 ? () => handleAddItems() : () => { }}
                  {...{ styles: { width: "60px" } }}
                />
              ) : (
                <Buttons
                  label="Agregar"
                  action={maxproducts > 0 ? () => handleAddItems() : () => { }}
                  {...{ styles: { width: "60px" } }}
                />
              )}
            </Container>
            <Container display="flex" marginTop="-8px">
              <Container padding="10px 0px 10px 10px">
                <Typography variant="body2" color="textSecondary" component="p">
                  Cant.:
                </Typography>
              </Container>
              <Container display="flex">
                <IconButton
                  aria-label="remove"
                  onClick={maxproducts > 0 ? () => setMaxproducts(maxproducts - 1) : () => { }}
                >
                  <RemoveIcon size="small" />
                </IconButton>
                <Container padding="15px 10px 10px 10px">
                  <Typography variant="body2" color="textSecondary" component="p">
                    {maxproducts}
                  </Typography>
                </Container>
                <IconButton
                  aria-label="remove"
                  onClick={maxproducts < acount ? () => setMaxproducts(maxproducts + 1) : () => { }}
                >
                  <AddIcon size="small" />
                </IconButton>
              </Container>
            </Container>
          </Container>
        )}
      </CardActions>
    </Card>
  )
}

export default Cards;