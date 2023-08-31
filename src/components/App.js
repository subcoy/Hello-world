import React from 'react';
import { Header } from './Header';
import { ViewAllProducts } from './ViewAllProducts';
import 'boxicons';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import {Pages} from './products/Pages';



function App () {
  return (

          <div className='App'>
            <Router>
              <Header/>
              <Pages/>
              
            </Router>           
 
          </div>

  );
}

export default App;







/*          <div className='App'>
            <React.Fragment>
              <Router>
                  <nav>
                    <Header/> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  
   
                  </nav>
                  <Routes>
                          <Route path='/' element={<ViewAllProducts/>} />
                          <Route path='/ProductCard' element={<ProductCard/>} /> 
                  </Routes>
                
        
         
              </Router>
            </React.Fragment>
            
 
          </div>
*/

