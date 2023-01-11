import React from "react";
import { useEffect } from "react";
import CtaSection from "../components/cta-section/CtaSection";
import Description1 from "../components/description-1/Description1";
import Description2 from "../components/description-2/Description2";
import Description3 from "../components/description-3/Description3";
import Description4 from "../components/description-4/Description4";
import FAQ from "../components/faq/FAQ";
import Helpers from "../components/helpers/Helpers";
import FinalCta from "../components/final-cta/FinalCta";
import Footer from "../components/footer/Footer";
import { fetchData, getCurrency } from "../utils";

const Landing = () => {
  const currencyValue = getCurrency();
  useEffect(() => {
    if(!currencyValue) fetchData();
    const timer = setInterval(() => fetchData(), 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <CtaSection />
      <Helpers />
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />
      <FAQ />
      <FinalCta />
      <Footer />
    </>
  );
};

export default Landing;
