import GetStarted from "../_components/get-started";
import ContactForm from "./_components/contact-form";
import HeroSection from "./_components/hero-section";
// import LocationMap from "./_components/location-map";

const ContactUs = () => {
  return (
    <div className="contactUsWrapper">
      <HeroSection />
      {/* <LocationMap /> */}
      <ContactForm />
      <GetStarted />
    </div>
  );
};

export default ContactUs;
