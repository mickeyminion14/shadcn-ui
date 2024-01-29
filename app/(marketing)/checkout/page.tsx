import GetStarted from "../../../components/get-started";
import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import CheckoutForm from "./_components/checkout-form";

const Checkout = () => {
  const heroObj: HeroData = {
    image: "/images/checkoubanner.jpg",
    title: "Transform Your MIND Elevate Your GAME",
    button: {
      text: "Fill The From Below",
      navigateTo: "#checkoutform",
    },
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} />
      {/* <LocationMap /> */}
      <CheckoutForm />
      <GetStarted />
    </div>
  );
};

export default Checkout;
