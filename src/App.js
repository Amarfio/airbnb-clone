import './styles/styles.css';
import Navbar from  './components/Navbar';
import Card from './components/Card';
import Hero from  './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
// import tryImage from './images/katie-zafere.png';
import cardData from './data';
function App() {

  const newCardData = cardData.map(newData=>{
    return <Card 
    key={newData.id}
    {...newData}
    // img={newData.img} 
    // rating={newData.status.rating}
    // reviewCount = {newData.status.reviewCount}
    // country = {newData.country}
    // title={newData.title}
    // price = {newData.price}
    // openSpots = {newData.openSpots}
    // location = {newData.location}
    />
  });
  return (
    <div className="App">
            <Navbar />
              <Hero />
              {/* <Content /> */}
              <section className="cards-list">
                {newCardData}
              </section>
              
            {/* <Footer /> */}
    </div>
  );
}

export default App;
