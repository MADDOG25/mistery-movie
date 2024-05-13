//Página de inicio que muestra las películas populares.
import Feature from "../components/Feature";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Feature/>
      <Accordion/>
    </>
  );
}

export default HomePage;
