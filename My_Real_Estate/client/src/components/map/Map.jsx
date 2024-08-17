import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.scss'
import MapPin from './MapPin/MapPin'
function Map({data}) {
    const position = [51.505, -0.09]
  return (
  <MapContainer className='map' center={position} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map((data)=><MapPin key={data.id} data={data} />)} 
  </MapContainer>

  )
}

export default Map