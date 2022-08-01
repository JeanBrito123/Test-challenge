import React from "react";
import Btn from "../../generic-styles/Button";
import Container from "../../generic-styles/Container";
import Inputs from "../../generic-styles/Inputs";

const Search = (props) => { 
  const { action } = props;
  return (
    <Container display="flex">
      <Inputs
        placeholder="Search..."
        name="search"
        borderRTL = "5px"
        borderRBL = "5px"
        borderRTR =  "0px"
        borderRBR =  "0px"
        />
        <Btn
          borderRadius="none"
          height="34px"
          padding="0px 8px"
          borderRightBottomRadius="5px"
          borderRightTopRadius="5px"
          onClick={action ? () => action : () => {}}
        >
          Buscar
        </Btn>
    </Container>
  );
}

export default Search;