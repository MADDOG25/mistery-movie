//Página de inicio que muestra las películas populares.
import Feature from "../components/Feature";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer"

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Feature/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default HomePage;
