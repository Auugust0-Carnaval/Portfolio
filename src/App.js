// import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
          <Header />
          <About />
        
        {/* <div>
          <Footer />
        </div> */}
        
      </div>

    </div>
      
  );
}

export default App;
