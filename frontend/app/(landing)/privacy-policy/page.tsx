import React from "react";
import content from "@/lib/termsPrivacyContent.json";

const PrivacyPage = () => {
  return (
    <section className="bg-[#E5E5EA] max-w-screen-2xl mx-auto">
      <div className="container relative w-full h-fit">
        <div className="flex flex-col w-full max-w-[735px] gap-2 py-40 pt-44">
          <h2 className="text-3xl font-semibold">Terms and Conditions</h2>
          <p>{content.privacyPolicy.introduction}</p>

          <h3 className="text-xl font-semibold">
            {content.privacyPolicy.useOfData.title}
          </h3>
          <ul>
            {content.privacyPolicy.useOfData.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold">
            {content.privacyPolicy.dataSecurity.title}
          </h3>
          <ul>
            {content.privacyPolicy.dataSecurity.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">
            {content.privacyPolicy.sharingData.title}
          </h3>
          <ul>
            {content.privacyPolicy.sharingData.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">
            {content.privacyPolicy.rights.title}
          </h3>
          <ul>
            {content.privacyPolicy.rights.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">
            {content.privacyPolicy.policyChanges.title}
          </h3>
          <ul>
            {content.privacyPolicy.policyChanges.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
