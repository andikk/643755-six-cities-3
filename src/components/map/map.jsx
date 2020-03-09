import React, {PureComponent, createRef} from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";
// карта
class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [27, 39]
    });
  }

  componentDidMount() {

    const _mapRef = this._mapRef.current;
    const {latitude, longitude, zoom} = this.props.city.location;
    if (_mapRef) {
      const city = [latitude, longitude];

      this._map = leaflet.map(_mapRef, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      this._map.setView(city, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);
      this._layerGroup = leaflet.layerGroup().addTo(this._map);
      this.renderCoordinates();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.coordinates !== prevProps.coordinates ||
      this.props.activeMarker !== prevProps.activeMarker
    ) {
      this.renderCoordinates();
    }

    if (
      this.props.city !== prevProps.city
    ) {
      const {latitude, longitude, zoom} = this.props.city.location;
      const city = [latitude, longitude];

      this._map.setView(city, zoom);
    }
  }

  renderCoordinates() {
    const {coordinates, activeMarker} = this.props;

    this._layerGroup.clearLayers();

    coordinates.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {
          icon: coordinate === activeMarker ? this._activeIcon : this._icon
        })
        .addTo(this._layerGroup);
    });
  }

  render() {
    return (
      <section ref={this._mapRef} className={`${this.props.className} map`}/>
    );
  }
}

Map.propTypes = {
  city: PropTypes.object.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  className: PropTypes.string,
  activeMarker: PropTypes.array
};

export default Map;
