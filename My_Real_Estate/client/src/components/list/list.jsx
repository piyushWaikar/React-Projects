import { listData } from '../../lib/dummydata'
import Card from '../Card/Card'
import './list.scss'

function List() {
  return (
    <div className="list">
        {listData.map((item)=>(
        <Card key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default List