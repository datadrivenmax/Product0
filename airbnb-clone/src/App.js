
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Footer from './Footer.js'
import SearchPage from './SearchPage.js'

// imports from react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (


    <div className="app">
      <Header />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<SearchPage />}/>

        </Routes>
      </BrowserRouter>

      <Footer />
    </div >
  );
}

export default App;
