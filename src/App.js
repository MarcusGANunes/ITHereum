import './App.css';
import NavbarComponent from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import BlockchainPage from './components/BlockchainPage/BlockchainPage';
import FooterComponent from './components/footer';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BlockchainPage />
      <FooterComponent />
    </div>
  )
}

export default App;
