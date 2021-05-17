import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
} from "../headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo.png";
import serverIllustrationImageSrc from "images/happy-illustration.svg";
import ScriptTag from 'react-script-tag';


const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-400 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-800 inline-block hocus:bg-primary-700`;
const Image = tw.img`w-144 ml-auto`



const Hero = props => {
  <ScriptTag src="https://cdn.plaid.com/link/v2/stable/link-initialize.js" />
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      Harbor
    </LogoLink>
  );

  const heading = "Collaborative accountability fosters Trust";
  const description = "We build robust behavioral smart contracts that can enforce the accountability needed to help regain trust, freedom, and a normal life.";
  const primaryButtonText = "Learn More";
  const primaryButtonUrl = "#";
  const imageSrc = serverIllustrationImageSrc;
  
  // const getLinkToken = () => {
  //   axios.get("https://localhost:3000/get-link-token")
  //   .then((res) => {

  //   })
  //   .catch((e) => console.log(e))
  // };
  
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header logoLink={logoLink} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
                </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};

export default Hero