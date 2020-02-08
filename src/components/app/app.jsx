import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount, places} = props;

  return (
    <Main offersCount={offersCount} places={places}/>
  );
};

export default App;
