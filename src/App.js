import './App.css';

// core components
import KamdemNavbar from './components/Navbars/KamdemNavbar.js';
import KamdemFooter from './components/Footers/KamdemFooter.js';
import KamdemSectionTabs from './views/Sections/KamdemSectionTabs.js';

function App() {
  return (
    <div className="App">
      <KamdemNavbar />
      <KamdemSectionTabs />
      <KamdemFooter />
    </div>
  );
}

export default App;
