import './App.css';

// core components
import KamdemHeader from './components/Headers/KamdemHeader.js';
import KamdemNavbar from './components/Navbars/KamdemNavbar.js';
import KamdemTopView from './views/KamdemTopView.js';
import KamdemFooter from './components/Footers/KamdemFooter.js';

function App() {
  return (
    <div className="App">
     {/*  <KamdemHeader /> */}
      <KamdemNavbar />
      <KamdemTopView />
      <KamdemFooter />
    </div>
  );
}

export default App;
