
import './App.css';
import logoImage from './Images/logo.svg';

function App() {
  return (
  <div className='App'>
    <h1>Hello, This is my Application</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
    <img src={logoImage} alt="image" className="App-logo"></img>
  </div>
  )
}

export default App;
