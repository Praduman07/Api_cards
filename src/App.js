import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Footer></Footer>
    </>

  );
}

export default App;
