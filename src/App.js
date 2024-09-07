import './App.css';
import './assets/css/style.css'
import './assets/js/site.js'
import Heder from './Header/Heder'
import { BrowserRouter } from 'react-router-dom';
import Content from './content/Content';
import Footer from './Footer/Footer'




function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
            <Content />
        <Footer />
      </BrowserRouter>
     
    </>
  );
}

export default App;
