import React from "react";
import PropTypes from "prop-types";

const PlacesSorting = (props) => {

  const {activeFilter, opened, filters, onToggleClickHandle, onSelectCloseHandle} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={onToggleClickHandle} className="places__sorting-type" tabIndex="0">
        {activeFilter.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={`places__options ${opened ? `  places__options--opened` : ``} places__options--custom`}>
        {filters.map((item) => (
          <li key={item.value} onClick={() => onSelectCloseHandle(item)} className={`places__option ${item.value === activeFilter ? `places__option--active` : ``}`} tabIndex="0">{item.label}</li>
        ))}
      </ul>

    </form>
  );
};

PlacesSorting.propTypes = {
  activeFilter: PropTypes.object,
  onFilterClick: PropTypes.func,
  opened: PropTypes.bool,
  filters: PropTypes.array,
  onToggleClickHandle: PropTypes.func,
  onSelectCloseHandle: PropTypes.func
};

PlacesSorting.defaultProps = {
  activeFilter: {label: `Popular`, value: `ALL`}
};

export default PlacesSorting;
