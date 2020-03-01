import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withSelectedFilter = (Component) => {
  class WithSelectedFilter extends PureComponent {
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
      return <Component {...this.props }
        opened={this.state.opened}
        filters={this.state.filters}
        onToggleClickHandle = {this._onToggleClickHandle}
        onSelectCloseHandle = {this._onSelectCloseHandle}
      />;
    }
  }

  WithSelectedFilter.propTypes = {
    onFilterClick: PropTypes.func
  };

  return WithSelectedFilter;
};

export default withSelectedFilter;
