
import KamdemNavbar from './components/Navbars/KamdemNavbar.js';
import KamdemFooter from './components/Footers/KamdemFooter.js';
import KamdemSectionTabs from './components/Views/KamdemSectionTabs.js';
import KamdemSectionLogin from './components/Views/KamdemSectionLogin.js';
import KamdemWorkSection from "./components/Views/KamdemWorkSection.js";
import KamdemWorkSectionPartner from "./components/Views/KamdemSectionPartner.js";

function App() {
  return (
    <div>
      <KamdemNavbar />
      <KamdemSectionTabs />
      <KamdemSectionLogin />
      <KamdemWorkSectionPartner />
      <KamdemWorkSection />
      <KamdemFooter />
    </div>
  );
}

export default App;
