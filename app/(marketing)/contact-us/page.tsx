"use client";
import HeroSection from "@/components/hero-section";
import GetStarted from "../../../components/get-started";
import ContactForm from "./_components/contact-form";
import { HeroData } from "@/components/hero-section/hero-section.interface";
// import LocationMap from "./_components/location-map";

const ContactUs = () => {
  const heroObj: HeroData = {
    image: "/images/contact-us.png",
    title: "Get In Touch",
    description:
      "We'd love to hear from you. Fill the form below to contact us.",
    button: {
      text: "Fill The From Below",
    },
  };

  const handleHeroButton = () => {
    console.log(heroObj);
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} handleButton={handleHeroButton} />

      {/* <LocationMap /> */}
      <ContactForm />
      <GetStarted />
    </div>
  );
};

export default ContactUs;
