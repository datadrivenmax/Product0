
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Footer from './Footer.js'
import SearchPage from './SearchPage.js'

// imports from react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (


    <div className="app">
      {/* <Router> */}

        <Header />

<Home/>
        {/* <Routes>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Routes> */}

        <Footer />

      {/* </Router> */}

    </div>
  );
}

export default App;
