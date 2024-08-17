import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Map from "../../components/map/map";
import { listData } from "../../lib/dummydata"
import './ListPage.scss'

function ListPage() {
    const data = listData;
  return (
    <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map((data)=><Card key={data.id} data={data} />)}
            </div>
        </div>
        <div className="mapContainer"><Map data={data} /></div>
    </div>
  )
}

export default ListPage