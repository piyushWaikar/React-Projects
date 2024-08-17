import './Card.scss'
import {Link} from 'react-router-dom'
function Card({data}) {
  return (
    <div className='Card'>
        <Link to={`/${data.id}`} className="imageContainer">
            <img src={data.img} alt="" />
        </Link>
        <div className="textContainer">
            <h3 className='title'>
                <Link to={`/${data.id}`} className="left">{data.title}</Link>
            </h3>
            <p className='address'>
                <img src="/pin.png" alt="" />
                <span>{data.address}</span>
            </p>
            <p className='price'>${data.price}</p>

            <div className="bottom">

                <div className="features">
                    <div className="feature">
                        <img src="/bed.png" alt="" />
                        <span>{data.bedroom} bedroom</span>
                    </div>

                    <div className="feature">
                        <img src="/bed.png" alt="" />
                        <span>{data.bathroom} bathroom</span>
                    </div>
                </div>

                <div className="icons">
                    <div className="icon">
                    <img src="/save.png" alt="" />
                    </div>

                    <div className="icon">
                    <img src="/chat.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card