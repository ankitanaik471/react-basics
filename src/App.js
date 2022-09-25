
import './App.css';
import logoImage from './Images/logo.svg';

import Header from './components/header/Header';
import About from './components/about/About';

function App() {
  return (
  <div className='App'>
    <Header />
    <About />

    <div className='d-none'>
    <h1>Hello, This is my Application</h1>
    <p>hello, I have 2+ experience in UI designing. i had created 10 plus website with responsive. also i have knowledge of CSS preprocessor language s like scss less. i have keen knowledge of following technology bootstrap, material Design, html, CSS, scss, WordPress customization etc. this is all about my experience :-)</p>
    <img src={logoImage} alt="demo" className="App-logo"></img>
    </div>
  </div>
  )
}

export default App;
