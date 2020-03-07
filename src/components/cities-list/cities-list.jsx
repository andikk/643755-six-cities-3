import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {citiesList, city, onCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">

        <ul className="locations__list tabs__list">
          {citiesList.map((item, index) => (
            <li className="locations__item" key={`${item}-${index}`}>
              <a className={`locations__item-link ${item.name === city.name ? `tabs__item--active` : `tabs__item`}`} href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityClick(item);
                }}>
                <span>{item.name}</span>
              </a>
            </li>
          ))}

        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  city: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default CitiesList;
