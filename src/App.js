import './App.css';
import KamdemNavbar from './components/Navbars/KamdemNavbar.js';
import KamdemFooter from './components/Footers/KamdemFooter.js';
import KamdemSectionTabs from './components/Views/KamdemSectionTabs.js';
import KamdemSectionLogin from './components/Views/KamdemSectionLogin.js';
import KamdemWorkSection from "./components/Views/KamdemWorkSection.js";

function App() {
  return (
    <div className="App">
      <KamdemNavbar />
      <KamdemSectionTabs />
      <KamdemSectionLogin />
      <KamdemWorkSection />
      <KamdemFooter />
    </div>
  );
}

export default App;
