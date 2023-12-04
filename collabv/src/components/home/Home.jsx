import './Home.css'
import Cards from './allCards/Cards'
import BookDemo from './bookDemo/BookDemo'
import Main_slider from './slider/main_slider'
import Ourfeedback from './ourfeed/ourfeedback'
import Chatboot from '../chatboot/chatboot'
function Home() {
  return (
    <>
    
    <Main_slider/>
    <Cards/>
    <BookDemo/>
    <Ourfeedback/>
    <Chatboot/>
    </>
  )
}

export default Home