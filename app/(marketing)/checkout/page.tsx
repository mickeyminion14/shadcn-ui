import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.checkout.name,
    description: siteConfig.basic.description,
  };
}
const Checkout = () => {
  return <div>Checkout</div>;
};

export default Checkout;
