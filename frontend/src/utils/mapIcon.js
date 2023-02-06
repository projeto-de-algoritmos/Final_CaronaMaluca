import Leaflet from 'leaflet';
import images from './images';

const mapIcon = Leaflet.icon({
  iconUrl: images.DeliveryTruck,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

export default mapIcon;