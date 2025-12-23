import './Main.css'
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { Home } from "../pages/Home"
import Introduction from "../pages/Introduction"
import { Business } from '../pages/Business'
import { Product } from '../pages/Product'
import { Why } from '../pages/Why'
import { Support } from '../pages/Support'

export const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="mainWrap" >
        
       <Header/>
       <Home/>
       <Introduction/>
       <Business/>
       <Product/>
       <Why/>
       <Support/>
       <Footer/>

       <button className="scroll-to-top" onClick={scrollToTop}>
         TOP
       </button>

    </div>
  )
}
