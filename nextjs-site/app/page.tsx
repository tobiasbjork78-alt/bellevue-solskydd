import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Products from "./components/Products";
import Hembesok from "./components/Hembesok";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Hembesok />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
