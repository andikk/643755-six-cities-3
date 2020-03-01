import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      filters: [
        {label: `Popular`, value: `ALL`},
        {label: `Price: low to high`, value: `PRICE_ASC`},
        {label: `Price: high to low`, value: `PRICE_DESC`},
        {label: `Top rated first`, value: `RATING_DESC`}
      ],
    };

    this._onToggleClickHandle = this._onToggleClickHandle.bind(this);
    this._onSelectCloseHandle = this._onSelectCloseHandle.bind(this);
  }

  _onToggleClickHandle() {
    this.setState((prevState) => {
      return {opened: !prevState.opened};
    });
  }

  _onSelectCloseHandle(selectedFilter) {
    this.setState({opened: false});
    this.props.onFilterClick(selectedFilter);
  }

  render() {
    const {opened, filters} = this.state;
    const {activeFilter} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this._onToggleClickHandle} className="places__sorting-type" tabIndex="0">
          {activeFilter.label}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul className={`places__options ${opened ? `  places__options--opened` : ``} places__options--custom`}>
          {filters.map((item) => (
            <li key={item.value} onClick={() => this._onSelectCloseHandle(item)} className={`places__option ${item.value === activeFilter ? `places__option--active` : ``}`} tabIndex="0">{item.label}</li>
          ))}
        </ul>

        {/* <select class="places__sorting-type" id="places-sorting">*/}
        {/* <option class="places__option" value="popular" selected="">Popular</option>*/}
        {/* <option class="places__option" value="to-high">Price: low to high</option>*/}
        {/* <option class="places__option" value="to-low">Price: high to low</option>*/}
        {/* <option class="places__option" value="top-rated">Top rated first</option>*/}
        {/* </select>*/}

      </form>
    );

  }
}

PlacesSorting.propTypes = {
  activeFilter: PropTypes.object,
  onFilterClick: PropTypes.func
};

export default PlacesSorting;
