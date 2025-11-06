import { Outlet } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div>
     <Nav/>
     <Outlet/>
     <Footer/>
     </div>


  )
}

export default MainLayout;