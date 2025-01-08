import React from "react";
import content from "@/libs/termsPrivacyContent.json";

const TermsConditionPage = () => {
  return (
    <section className="bg-[#E5E5EA] max-w-screen-2xl mx-auto">
      <div className="container relative w-full h-fit">
        <div className="flex flex-col w-full gap-2 py-40 pt-44">
          <h2 className="text-3xl font-semibold text-center">Terms and Conditions</h2>
          <p>{content.termsAndConditions.introduction}</p>

          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.bookingPolicy.title}
          </h3>
          <ul>
            {content.termsAndConditions.bookingPolicy.content.map(
              (item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.cancellationPolicy.title}
          </h3>
          <ul>
            {content.termsAndConditions.cancellationPolicy.content.map(
              (item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>
          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.checkInOutPolicy.title}
          </h3>
          <ul>
            {content.termsAndConditions.checkInOutPolicy.content.map(
              (item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>
          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.behaviorPolicy.title}
          </h3>
          <ul>
            {content.termsAndConditions.behaviorPolicy.content.map(
              (item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>
          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.liability.title}
          </h3>
          <ul>
            {content.termsAndConditions.liability.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-1">
            {content.termsAndConditions.modification.title}
          </h3>
          <ul>
            {content.termsAndConditions.modification.content.map(
              (item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionPage;
