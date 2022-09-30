
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Footer from './Footer.js'
import SearchPage from './SearchPage.js'

// imports from react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (


    <div className="app">
      <Router>

        <Header />

        {/* home page*/}
        <Home />


        {/* home page*/}
        <SearchPage/>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
