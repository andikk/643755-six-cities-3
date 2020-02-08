import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const onHeaderClickHandler = () => {};
  const {offersCount, places} = props;

  return (
    <Main offersCount={offersCount}
      places={places}
      onHeaderClickHandler={onHeaderClickHandler}/>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
