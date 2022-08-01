import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../generic-styles/Container';
import Menu from './menu/Menu';
import { colors } from "../redux/theme";

const Layouts = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => {
    return state.colors.colors;
  })
  const [checkeds, setCheckeds] = useState((theme || {}).status || false);

  useEffect(() => {
    if (checkeds) {
      dispatch(colors({ status: true, background: "#1b2021", color: "#FFFFFF", button: "#E96723" }))
    } else {
      dispatch(colors({ status: false, background: "#EDF0F5", color: "#1b2021", button: "#a5c3ee" }))
    }
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [checkeds]);
  return (
    <Container
      className={(theme || {}).status ? "layouts-dark" : "layouts"}
      backgroundColor={(theme || {}).background}
      height="100vh"
    >
      <Menu {...{
        theme,
        checkeds,
        setCheckeds,
        background: (theme || {}).background
      }} />
      <Container
        position="relative"
        top="60px"
      >
        {children}
      </Container>
    </Container>
  )
}

export default Layouts;