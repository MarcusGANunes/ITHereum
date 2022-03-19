import './App.css';
import NavbarComponent from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import BlockchainPage from './components/BlockchainPage/BlockchainPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BlockchainPage />
    </div>
  )
}

export default App;
