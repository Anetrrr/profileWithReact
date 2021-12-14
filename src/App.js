import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo';
import Header from './components/Header';
import Button from './components/Button';
import Main from './components/Main';
import SocialFollow from './SocialFollow';



function App() {
  return (
    <div className="App">
        <Photo />
        <Header />
        <Button />
        <Main />
        <SocialFollow />

        
    </div>
  );
}

export default App;
