import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {citiesList, city, onCityClick} = this.props;

    return (
      <div className="tabs">
        <section className="locations container">

          <ul className="locations__list tabs__list">
            {citiesList.map((item, index) => (
              <li className="locations__item" key={`${item}-${index}`}>
                <a className={`locations__item-link ${item === city ? `tabs__item--active` : `tabs__item`}`} href="#"
                  onClick={(evt) => (onCityClick(evt, item))}>
                  <span>{item}</span>
                </a>
              </li>
            ))}

          </ul>
        </section>
      </div>
    );
  }
}

CitiesList.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default CitiesList;
