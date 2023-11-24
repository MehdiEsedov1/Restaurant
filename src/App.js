import './App.css';
import './styles/adds.css';
import './styles/homepage.css';
import './styles/footer.css';
import './styles/menu.css';
import './styles/registration.css';
import './styles/payment.css';
import './styles/basket.css';
import './styles/header.css';
import './styles/error.css';
import './styles/faq.css';
import './styles/aboutMeal.css';
import './styles/about.css';
import './styles/menuInner.css';
import './styles/profile.css';
import './styles/carousel.css';

import Header from './components/Header';
import Routess from './components/Additional/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        width: "100%",
        height: "75px"
      }}>
      </div>
      <Routess />
    </div>
  );
}

export default App;