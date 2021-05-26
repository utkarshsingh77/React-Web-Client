import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import { Auth } from "aws-amplify";


export default () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    async function isAuthenticated() {
      if (authenticated) {
        return
      }
      try {
        const currentSession = await Auth.currentSession()
        setAuthenticated(true)
        console.log(currentSession)
      } catch (error) {
        console.log(error)
      }
    }
    isAuthenticated()
  }, [authenticated])

  return (
    <AnimationRevealPage>
      { authenticated ? 
      <h1>AUTHENTICATED</h1>
        :
        null
      }
      <Hero isAuthenticated={authenticated}/>
      <Features />
      <Pricing />
      <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
