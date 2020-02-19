import React, {PureComponent, createRef} from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const _mapRef = this._mapRef.current;
    if (_mapRef) {
      const {coordinates} = this.props;
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      const zoom = 12;
      const map = leaflet.map(_mapRef, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      map.setView(city, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      coordinates.map((coordinate) => {
        leaflet
          .marker(coordinate, {icon})
          .addTo(map);
      });
    }
  }

  render() {
    return (
      <section ref={this._mapRef} className="cities__map map"/>

    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
};

export default Map;
