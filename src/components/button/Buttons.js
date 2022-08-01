import React from 'react';
import { useSelector } from 'react-redux';
import Btn from '../../generic-styles/Button';


const Buttons = (props) => {
  const { action, label, icons, styles, disabled = false } = props;
  const theme = useSelector(state => {
    return state.colors.colors;
  })
  return (
    <Btn
      {...{
        padding: "0px 10px",
        margin: "0px 3px",
        backgroundColor: disabled ? "#e1e1e1" : (theme || {}).button,
        color: disabled ? "#1b2021" : (theme || {}).color,
        ...styles
      }}
      disabled={disabled}
      onClick = {!disabled && action ? action : () => {}}
    >
      {icons ? icons : null} {label}
    </Btn>
  );
}


export default Buttons;