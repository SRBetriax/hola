import React from "react";
import CtaSection from "../CtaSection";
import Description1 from "../Description1";
import Description2 from "../Description2";
import Description3 from "../Description3";
import Description4 from "../Description4";
import FAQ from "../FAQ";
import Helpers from "../components/Helpers";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

const Content = () => {
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

export default Content;
