import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Servies from "./components/servies/Servies";
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Servies />
      <Footer/>
    </div>
  );
}
