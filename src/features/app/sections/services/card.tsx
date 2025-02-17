import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const CardService = ({
  description,
  icon,
  title,
}: Content.ServiceSectionSliceDefaultPrimaryServicesItem) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="flex justify-center items-center py-6 px-8 bg-gradient-to-b from-[#0647C9] to-[#162670] rounded-[12px] "
    >
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          {icon === "overview" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7754 23.9389L33.5509 15.9856L33.5509 31.8922L19.7754 23.9389Z"
                fill="white"
              />
              <circle cx="30.5917" cy="10.8776" r="3.87755" fill="#509FED" />
              <path
                d="M19.3672 23.9389L5.59168 15.9856L5.59168 31.8922L19.3672 23.9389Z"
                fill="#06E1F6"
              />
              <circle
                cx="3.87755"
                cy="3.87755"
                r="3.87755"
                transform="matrix(-1 0 0 1 13.653 7)"
                fill="#509FED"
              />
            </svg>
          )}

          {icon === "fintech" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.0247 18.8429C22.813 17.507 23.2653 15.9492 23.2653 14.2857C23.2653 9.32645 19.245 5.30615 14.2857 5.30615C9.32645 5.30615 5.30615 9.32645 5.30615 14.2857C5.30615 15.9492 5.75846 17.507 6.54681 18.8429C8.10878 16.1961 10.9899 14.4204 14.2857 14.4204C17.5816 14.4204 20.4627 16.1961 22.0247 18.8429Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.2245 22.1594C22.5604 22.9478 24.1182 23.4001 25.7816 23.4001C30.7409 23.4001 34.7612 19.3798 34.7612 14.4205C34.7612 9.46122 30.7409 5.44092 25.7816 5.44092C24.1182 5.44092 22.5604 5.89323 21.2245 6.68157C23.8713 8.24354 25.647 11.1247 25.647 14.4205C25.647 17.7164 23.8713 20.5975 21.2245 22.1594Z"
                fill="#509FED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9753 21.3593C17.187 22.6951 16.7347 24.253 16.7347 25.9164C16.7347 30.8757 20.755 34.896 25.7143 34.896C30.6735 34.896 34.6938 30.8757 34.6938 25.9164C34.6938 24.253 34.2415 22.6952 33.4532 21.3593C31.8912 24.0061 29.0101 25.7817 25.7143 25.7817C22.4184 25.7817 19.5373 24.0061 17.9753 21.3593Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8429 18.1101C17.507 17.3217 15.9492 16.8694 14.2857 16.8694C9.32645 16.8694 5.30615 20.8897 5.30615 25.849C5.30615 30.8083 9.32645 34.8286 14.2857 34.8286C15.9492 34.8286 17.507 34.3763 18.8429 33.588C16.1961 32.026 14.4204 29.1449 14.4204 25.849C14.4204 22.5532 16.1961 19.6721 18.8429 18.1101Z"
                fill="#4D9DEB"
              />
            </svg>
          )}
          {icon === "solution" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.1825 28.7227L23.4273 4.89795L16.7604 16.4454C20.2511 18.2008 22.6462 21.8151 22.6462 25.9887C22.6462 26.9338 22.5234 27.8501 22.2928 28.7227H37.1825Z"
                fill="white"
              />
              <circle cx="11.9706" cy="25.9888" r="9.1133" fill="#509FED" />
            </svg>
          )}
          <PrismicRichText
            field={title}
            components={{
              heading3: ({ children }) => (
                <Heading size="sm" className="text-white text-xl md:text-2xl">
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <Paragraph
                size="sm"
                className="text-white/70 line-clamp-4 list-disc"
              >
                {children}
              </Paragraph>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default CardService;
