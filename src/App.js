import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"




function App() {
    return ( 
        <div className = 'App' >
 ;
 
           
        <Router>
          <Header />

                <Routes>
                       
               
                        
                        <Route path='/' element={<Home />}> </Route>
                        <Route path="/Contact" component={ <Contact />} />
               
                </Routes>
                <Footer />
             
        </Router>


        </div>
    )
}
    export default App;