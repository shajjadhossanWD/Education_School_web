import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Services from './component/Services/Services'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Notfound from './component/Notfound/Notfound'

function App() {
  return (
    <div>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
          <Home></Home>
         </Route>
         <Route exact path = "/services">
           <Services></Services>
         </Route>
         <Route exact path = "/about">
           <About></About>
         </Route>
         <Route exact path="/contact">
           <Contact></Contact>
         </Route>
         <Route exact path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
