import React, {PureComponent, createRef} from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";
// карта
class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const _mapRef = this._mapRef.current;
    if (_mapRef) {
      const city = [52.38333, 4.9];
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
      this.setState({map, layerGroup: leaflet.layerGroup().addTo(map)});
    }
  }

  componentDidUpdate() {
    const {layerGroup} = this.state;
    const {coordinates, activeMarker} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [27, 39]
    });

    layerGroup.clearLayers();
    coordinates.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon: coordinate === activeMarker ? activeIcon : icon})
        .addTo(layerGroup);
    });
  }

  render() {
    return (
      <section ref={this._mapRef} className={`${this.props.className} map`}/>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  className: PropTypes.string,
  activeMarker: PropTypes.array
};

export default Map;
