import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Kontakta oss | Bellevue Solskydd",
  description:
    "Kontakta Bellevue Solskydd för kostnadsfritt hembesök, offert eller rådgivning. Ring 040-18 11 00 eller fyll i formuläret.",
};

export default function KontaktPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
