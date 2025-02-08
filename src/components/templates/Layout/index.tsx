import { Header,Footer } from "components/molecules"
import { Outlet } from "react-router-dom"
import "./index.css"

export const Layout = () => {
  return (
    <div className='layout-wrapper'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}