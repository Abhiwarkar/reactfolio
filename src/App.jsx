import"./app.scss"
import Test from "./components/Test";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/Services";
import Hero from "./components/sidebar/hero/hero";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
  <div>
    <Cursor/>
    <section id="Homepage">

    <Navbar/>
    <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type ="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    {/*<Test/>
    <Test/>*/}

  
  </div>)
};

export default App;
