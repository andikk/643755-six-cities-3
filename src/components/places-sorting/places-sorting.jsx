import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      filters: [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`],
    };

    this._onToggleClickHandle = this._onToggleClickHandle.bind(this);
    this._onSelectCloseHandle = this._onSelectCloseHandle.bind(this);
  }

  _onToggleClickHandle() {
    this.setState((prevState) => {
      return {opened: !prevState.opened};
    });
  }

  _onSelectCloseHandle(item) {
    this.setState({opened: false});
    this.props.onFilterClick(item);
  }

  render() {
    const {opened, filters} = this.state;
    const {activeFilter} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this._onToggleClickHandle} className="places__sorting-type" tabIndex="0">
          {activeFilter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul className={`places__options ${opened ? `  places__options--opened` : ``} places__options--custom`}>
          {filters.map((item) => (
            <li key={item} onClick={() => this._onSelectCloseHandle(item)} className={`places__option ${item === activeFilter ? `places__option--active` : ``}`} tabIndex="0">{item}</li>
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
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired
};

export default PlacesSorting;
