import './Main.css'
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { Home } from "../pages/Home"
import Introduction from "../pages/Introduction"

export const Main = () => {
  return (
    <div id="mainWrap" >
       <Header/>
       <Home/>
       <Introduction/>
       <Footer/>

    </div>
  )
}
