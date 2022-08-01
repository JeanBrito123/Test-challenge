import React, { Fragment } from "react";
import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector(state => {
    return state.colors.colors;
  });
  return (
    <Fragment>
      <div className={`container-home${(theme || {}).status ? "-dark" : ""}`}>
        <div className="welcome">
          <div>Bienvenidos</div>
          <div>Al</div>
          <div>Challenge</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;