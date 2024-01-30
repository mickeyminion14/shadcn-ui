import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";
import styles from "./privacy-policy.module.scss";
import "@/app/editor.scss";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.privacyPolicy.name,
    description: siteConfig.privacyPolicy.description,
  };
}

const PrivacyPolicy = () => {
  const heroObj: HeroData = {
    image: "/images/privacy-terms.jpg",
    title: "Privacy Policy",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />

      <div className={styles.contactUsWrapper}>
        {/* <DynamicPage /> */}
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{
            __html: `<p class="ql-align-center"><strong>SPORT BALANCE, LLC</strong></p>
              <p class="ql-align-center"><strong>PRIVACY POLICY</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  Sport Balance, LLC, a Pennsylvania limited liability company, also referred to herein as (“Maxxx Performance Mobile Application” “Maxxx” “Maxxx Performance” “Mobile Application” “Sport Balance” “we” and “us”) is committed to protecting
                  your privacy and security. We also have the right, but not the obligation, to monitor the information submitted through the Maxxx Performance Mobile Application to determine compliance with these Terms of Use, any other agreements
                  between the parties, and compliance with any law, regulation or authorized government request. Therefore, we have put the following privacy policy in place for the Maxxx Performance Mobile Application (the “Privacy Policy”). The Terms
                  of Use and this Privacy Policy, as it relates to the Services and products of Sport Balance, LLC, applies to Maxxx Performance Mobile Application, and any other mobile
                  apps, online or mobile-enabled technology or digital tools that display or link to this policy. Terms not defined herein will have the meaning as set forth in the Terms of Use.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>COLLECTION OF INFORMATION</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  We collect personal information, user data, including but not limited to name, address, email address, and phone number, in order to provide the Services and customer service. Parents and legal guardians are required to complete the
                  Parental Consent form for Minor Users.&nbsp;&nbsp;
              </p>
              <p class="ql-align-justify">
                  Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device\'s calendar, camera, contacts, microphone, social media accounts, network, notifications, internet,
                  storage and other features. If you wish to change our access or permissions, you may do so in your device\'s settings.
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-justify">
                  <strong>
                      SUBMISSION OF INFORMATION AND/OR COMMUNICATION THROUGH MAXXX PERFORMANCE MOBILE APPLICATION INCLUDING YOUR PARTICIPATION IN ANY CHAT FEATURE OR SMS TEXTING DOES NOT CONSTITUTE MENTAL HEALTH CARE OR TREATMENT AND DOES NOT CONSTITUTE
                      AN ATTORNEY-CLIENT RELATIONSHIP, A THERAPIST-PATIENT RELATIONSHIP OR ANY OTHER SORT OF CONFIDENTIAL RELATIONSHIP. THIS SERVICE IS NOT A SUBSTITUTE FOR PROFESSIONAL HEALTH CARE. IF YOU BELIEVE YOU ARE EXPERIENCING A MEDICAL
                      EMERGENCY, CALL YOUR DOCTOR OR 911 IMMEDIATELY
                  </strong>
                  <span style="color: rgb(113, 112, 115);">.&nbsp;</span>
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-justify">
                  California residents have the right to request in writing from businesses with whom they have an established business relationship: (a) a list of the categories of personally identifiable information—such as name, email, and mailing
                  address, and the type of services provided to the resident that a business has disclosed to third parties (including affiliates that are separate legal entities) during the immediately preceding calendar year for the third parties’
                  direct marketing purposes; and (b) the name and address of all such third parties. To request the above information, please email us at: info@isportbalance.com with reference to California Disclosure Information. Please note that we are
                  only required to respond to an inquiry once per calendar year.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>USE OF INFORMATION</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  We use the personal information, user data, and analytics collected for the purpose of providing the Services, including customizing content, customer service, connecting users with mental health resources and ongoing marketing. We do
                  not share this information with third parties, except as necessary to process the Services or comply with legal requirements.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>SECURITY</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  We take the security of your personal information seriously and have implemented measures to protect against unauthorized access, use, or disclosure. We use secure servers and encryption technology to protect sensitive information
                  during transmission. Despite these protections, the internet and mobile application remain an imperfectly secure environment, and Sport Balance cannot guarantee protection from intruders or interceptors. You agree when using the
                  Services, you are submitting information at your own risk. You agree that Sport Balance has no liability regarding unauthorized access to the Services by a third party.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>COOKIES</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  Our Maxxx Performance Mobile Application may use analytic tools to track activity and preferences for analysis and marketing.&nbsp;You may disable cookies in your web browser or mobile device if you do not wish to have this information
                  collected.&nbsp;
              </p>
              <p class="ql-align-center">&nbsp;</p>
              <p class="ql-align-center"><strong>DO NOT TRACK</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  Your mobile device or web browser may provide you with the option to send a “Do Not Track” signal to Maxxx Performance Mobile Applications you visit. This signal is used to request that Maxxx Performance Mobile Applications not send the
                  requesting device cookies, but Maxxx Performance Mobile Applications have no obligation to respond to such signal or to modify their operation. At the current time, our Maxxx Performance Mobile Application is not programmed to recognize
                  “Do Not Track” signals, so the Maxx Performance Mobile Application will not treat you differently if we receive such signals from your mobile device or web browser and we may not comply with "Do Not Track" settings.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>THIRD-PARTY WEBSITES</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  Our Maxxx Performance Mobile Application may contain links to third-party applications. We are not responsible for the privacy practices or content of these applications and encourage you to review their privacy policies.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>CHANGES TO PRIVACY POLICY</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  We may update our privacy policy from time to time to reflect changes in our business practices or legal requirements. Any updates will be posted on our website or the Maxxx Performance Mobile Application.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>CHANGING OR REMOVING YOUR PERSONAL INFORMATION</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  If the personal information you provided when you registered changes, you may update this information by logging into your Account and accessing your Account settings. If you would like to remove some of the personal information you
                  have posted on the Maxxx Performance Mobile Application, such as information you posted in profiles, you may do so by editing or deleting that item in your My Account area. In some cases, we may not be able to reasonably accommodate
                  your request to remove your personal information, in which case we will let you know if we are unable to do so and why.&nbsp;
              </p>
              <p class="ql-align-center">&nbsp;</p>
              <p class="ql-align-center"><strong>DELETING ANY PERSONAL INFORMATION&nbsp;</strong>&nbsp;</p>
              <p class="ql-align-justify">
                  A request to delete your account is different from a request to unsubscribe from emails and communications. If you wish for us to fully delete your account, and with it all collected instances of your personal information, please
                  contact us at info@isportbalance.com. We can delete as much or as little of your personal information as you would like, but please be aware that some data may linger in backups until those backups are overwritten.&nbsp;
              </p>
              <p class="ql-align-justify">&nbsp;</p>
              <p class="ql-align-center"><strong>CONTACT INFORMATION</strong>&nbsp;</p>
              <p class="ql-align-justify">If you have any questions or concerns regarding our privacy policy or the use of personal information, please contact our customer service team for assistance: support@maxxxperformance.app&nbsp;</p>
              <p class="ql-align-center"><br /></p>
              <p><br /></p>
              `,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
