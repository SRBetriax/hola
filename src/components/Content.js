import React from "react";
import CtaSection from "./CtaSection";
import Description1 from "./Description1";
import Description2 from "./Description2";
import Description3 from "./Description3";
import Description4 from "./Description4";
import FAQ from "./FAQ";
import Helpers from "./Helpers";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

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
