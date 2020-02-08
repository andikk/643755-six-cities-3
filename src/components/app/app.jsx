import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {

  const {offersCount, places} = props;

  return (
    <Main offersCount={offersCount} places={places}/>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.array.isRequired
};

export default App;
