import './App.css';

// core components
import KamdemNavbar from './components/Navbars/KamdemNavbar.js';
import KamdemFooter from './components/Footers/KamdemFooter.js';

function App() {
  return (
    <div className="App">
      <KamdemNavbar />
      <KamdemFooter />
    </div>
  );
}

export default App;
