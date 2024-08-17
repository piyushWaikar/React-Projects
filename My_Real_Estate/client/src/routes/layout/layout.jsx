import { Outlet } from 'react-router-dom'
import Navbar from '../../components/NavBar/Navbar'
import './layout.scss'

function Layout() {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        {/* we push the content inside this in the form of children method , outlet is a react-router-dom component */}
        <Outlet/> 
      </div>
    </div>
  )
}

export default Layout