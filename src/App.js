import './styles/styles.css';
import Navbar from  './components/Navbar';
import Card from './components/Card';
import Hero from  './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
            <Navbar />
              {/* <Hero /> */}
              {/* <Content /> */}
              <Card />
            {/* <Footer /> */}
    </div>
  );
}

export default App;
