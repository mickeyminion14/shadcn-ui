"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
const DynamicPage = () => {
  const [htmlContent, setHtmlContent] = useState<any>("");
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(
          "https://maxxxdevadmin.appskeeper.in/static-content?contentType=TERMS_AND_CONDITIONS&entityType=PLAYER"
        );
        if (response.ok) {
          const htmlString = await response.text();
          setHtmlContent(htmlString);
        } else {
          console.error("Failed to fetch HTML content");
        }
      } catch (error) {
        console.error("Error fetching HTML content", error);
      }
    };

    fetchHtmlContent();
  }, []);
  // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  );
};

export default DynamicPage;
