import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Button from "../../../components/Button";
import { handleScroll, TextBlock } from "../../../utils";
import Image from "next/image";

const Page = () => {
  const [selectedPackage, setSelectedPackage] = useState("Patents");
  const [selected, setSelected] = useState(null);
  const overlayRef = useRef(null);
  const { push } = useRouter();

  const onScroll = useCallback(() => {
    handleScroll(overlayRef);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleManageClick = (packageName) => {
    setSelectedPackage(packageName);
  };
  const handleGetStartedClick = (packageName) => {
    setSelected(packageName);
  };

  return (
    <>
      <div ref={overlayRef} className="background-image overlay height65">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center max-[425px]:mx-2 col-md-6">
              <div className="brand">
                <h1 className="text-[53px] pb-5 font-medium leading-[3.5rem]">
                  Let's get started
                </h1>
                <p className="text-white pt-5 text-[17px] font-light">
                  To get started, you will need to choose a package or service
                  for your needs.
                  <br /> You can opt out, add or change services dynamically
                  throughout the process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container mr-auto ml-auto">
          <div className="py-20">
            <div className="row">
              <div className="ml-auto mr-auto">
                <div className="flex mb-[50px]">
                  <Button
                    type={selectedPackage === "Patents" ? "primary" : "text"}
                    className={clsx(
                      "py-5 px-6 uppercase rounded-full helvetica-font text-xs leading-6 font-medium",
                      {
                        "shadow-[0_5px_20px_0_rgba(22,119,255,0.2),_0_13px_24px_-11px_rgba(22,119,255,0.6)]":
                          selectedPackage === "Patents",
                      }
                    )}
                    onClick={() => handleManageClick("Patents")}
                  >
                    Patents
                  </Button>

                  <Button
                    type={selectedPackage === "Patents +" ? "primary" : "text"}
                    className={clsx(
                      "ml-[5px] py-5 px-6 uppercase rounded-full helvetica-font text-xs leading-6 font-medium",
                      {
                        "shadow-[0_5px_20px_0_rgba(22,119,255,0.2),_0_13px_24px_-11px_rgba(22,119,255,0.6)]":
                          selectedPackage === "Patents +",
                      }
                    )}
                    onClick={() => handleManageClick("Patents +")}
                  >
                    Patents +
                  </Button>
                </div>
              </div>
            </div>
            <div className="row max-[992px]:flex-col">
              {selectedPackage === "Patents" && (
                <>
                  <PackageCard
                    title="The Book Mark Package"
                    priceRange="650"
                    features={[
                      "Provisional Patent Application",
                      "After 1 Year You have to File Another Provisional or a Non Provisional",
                      "Doesn't Allow You to Enforce Your Patent.",
                    ]}
                    selected=""
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                  <PackageCard
                    title="The Gold Standard Utility Package"
                    priceRange="1250"
                    features={[
                      "Non Provisional Patent Application",
                      <span>
                        <b className="font-bold">20</b> Years of Protection
                      </span>,
                      "Grants the Right to Enforce the Patent",
                    ]}
                    selected={"The Gold Standard Utility Package"}
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                  <PackageCard
                    title="The Gold Standard Design Package"
                    priceRange="700"
                    features={[
                      "Non Provisional Design Patent Application",
                      <span>
                        <b className="text-[#000] font-bold">20</b> Years of
                        Protection For Visual Designs
                      </span>,
                      ,
                      "Grants the Right to Enforce the Patent",
                    ]}
                    selected=""
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                </>
              )}

              {selectedPackage === "Patents +" && (
                <>
                  <PackageCard
                    title="Search Package"
                    priceRange="300"
                    features={["Full Patent Search and Report"]}
                    selected=""
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                  <PackageCard
                    title="Trademarks"
                    priceRange="300"
                    features={[
                      "Nationwide Protection Begins Upon Registration",
                      "Create an Account and Contact Us for More Details on Prices",
                    ]}
                    selected={"Trademarks"}
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                  <PackageCard
                    title="Litigation"
                    features={[
                      "Enforce Your Patent",
                      "Stop Others From Using Your IP",
                      "Create an Account and Contact Us for More Details on Prices",
                    ]}
                    selected=""
                    onClick={() =>
                      push("https://app.introstellar-ip.com/signup")
                    }
                  />
                </>
              )}
            </div>

            <div>
              <div className="text-center pt-[30px]">
                <TextBlock className="text-sm">
                  The prices above are starting prices for very basic
                  inventions. Prices vary depending on the complexity of the
                  invention.
                </TextBlock>
              </div>
              <div className="text-center">
                <h3 className="py-[30px] text-[25px] font-bold">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="row max-[992px]:flex-col">
                <div className="w-4/12 ml-auto max-[992px]:mr-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/membershipCard.svg"
                      width={36}
                      height={36}
                      className="mb-auto w-[36px] h-[36px]"
                    />
                    <div>
                      <p className="text-lg font-bold">
                        Will I have a real Lawyer?
                      </p>
                      <TextBlock className="text-sm">
                        Yes, we will partner you with an official US lawyer.
                      </TextBlock>
                    </div>
                  </div>
                </div>
                <div className="w-4/12 mr-auto max-[992px]:ml-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/giftCard.svg"
                      width={36}
                      height={36}
                      className="mb-auto w-[36px] h-[36px] -mt-1"
                    />
                    <div>
                      <p className="text-lg font-bold">
                        What does a Patent do?
                      </p>
                      <TextBlock className="text-sm">
                        Patents protect your innovative ideas and inventions,
                        granting you exclusive rights for 20 years from the
                        filing date. If a competitor tries to enter the market
                        with an infringing product or service, you can take
                        legal action to protect your interests. This may involve
                        issuing a cease and desist order or negotiating a
                        licensing agreement for royalty payments. By securing a
                        patent, you safeguard your competitive edge and prevent
                        unauthorized use of your intellectual property.
                      </TextBlock>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row max-[992px]:flex-col">
                <div className="w-4/12 ml-auto max-[992px]:mr-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/money.svg"
                      width={36}
                      height={36}
                      className="mb-auto w-[36px] h-[36px] -mt-1"
                    />
                    <div>
                      <p className="text-lg font-bold">
                        Can I cancel or back out?
                      </p>
                      <TextBlock className="text-sm">
                        Yes at any time. <br /> The lawyer will ask for half of
                        the payment upfront and you will only be charged for
                        services that have been rendered. If part way through
                        the process you want to back out you will be refunded
                        proportional to the services alreadly rendered. Note you
                        can pause your filing indefinetly with us if you need to
                        wait for any reason.
                      </TextBlock>
                    </div>
                  </div>
                </div>
                <div className="w-4/12 mr-auto max-[992px]:ml-auto max-w-[360px] max-[992px]:w-full pt-[70px] pb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/message.svg"
                      width={36}
                      height={36}
                      className="mb-auto w-[36px] h-[36px]"
                    />
                    <div>
                      <p className="text-lg font-bold">
                        Why should I use Introstellar?
                      </p>
                      <TextBlock className="text-sm	mb-[10px]">
                        We advocate and empower you the client. In the standard
                        patent process you are at the whims of whatever lawyer
                        you end up with. At Introstellar we provide you with, a
                        perfect and streamlined experience to make the
                        application process as simple as ordering an Uber. We
                        also provide FREE, well produced educational content to
                        help you understand the process and also customer
                        support for any issues.
                      </TextBlock>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row max-[992px]:flex-col">
                <div className="w-4/12 ml-auto max-[992px]:mr-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px]">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/clock.png"
                      width={36}
                      height={36}
                      className="mb-auto w-[36px] h-[36px] -mt-1"
                    />
                    <div>
                      <p className="text-lg font-bold">
                        What are the timelines like for the process?
                      </p>
                      <TextBlock className="text-sm">
                        Sign up and filling out the filing forms takes ~5
                        minutes From the moment of payment you can see your
                        first draft within 48 hours
                      </TextBlock>
                    </div>
                  </div>
                </div>
                <div className="w-4/12 mr-auto max-[992px]:ml-auto max-w-[360px] max-[992px]:w-full pt-[70px] pb-[30px]"></div>
              </div>
            </div>
            <div className="w-max mx-auto max-[770px]:w-full mt-10">
              <div className="text-center">
                <Button
                  type="primary"
                  className="py-5 px-6"
                  onClick={() => push("https://app.introstellar-ip.com/")}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const formatPrice = (priceRange) => {
  return priceRange
    .split("-")
    .map((price) => {
      return Number(price.trim()).toLocaleString();
    })
    .join("-");
};

const PackageCard = ({ title, priceRange, features, selected, onClick }) => {
  const isSelected = selected === title;

  return (
    <div className="w-4/12 max-[992px]:w-full px-[15px]">
      <div
        className={clsx("text-center py-[30px] rounded-md", {
          "bg-[#1677ff] shadow-lg shadow-blue-500/50": isSelected,
        })}
      >
        <div
          className={clsx(
            "pt-[15px] px-[15px] min-h-[340px!important] max-[992px]:min-h-[100%!important]",
            {
              "text-white": isSelected,
            }
          )}
        >
          <p className="uppercase font-medium text-xs leading-6">{title}</p>
          <h1
            className={clsx(
              "mt-[30px] mb-3  max-[1200px]:text-[32px] text-[46px] font-bold",
              {
                "h-[75px!important]": !!!priceRange,
              }
            )}
          >
            <small className="relative max-[1200px]:text-[20px] text-[26px] max-[1200px]:-top-[8px] -top-[19px] max-[1200px]:-right-[8px] max-[992px]:-right-[8px] -right-[12px] font-normal">
              {!!priceRange ? "$" : ""}
            </small>{" "}
            {!!priceRange ? formatPrice(priceRange) : " - "}
          </h1>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className={clsx(
                  "py-3 text-center text-[#999] helvetica-font font-light text-sm leading-[1.5em]",
                  {
                    "text-white border-[#ffffff4d!important]": isSelected,
                    "border-b-[0.3px]": index !== features?.length - 1,
                  }
                )}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button
          type="primary"
          className={clsx(
            "py-5 px-6 uppercase rounded-full mb-[15px] mt-[15px] max-[992px]:mt-8 helvetica-font text-xs leading-6 font-medium shadow-[0_2px_2px_0_rgba(22,119,255,0.14),_0_3px_1px_-2px_rgba(22,119,255,0.2),_0_1px_5px_0_rgba(22,119,255,0.12)]",
            {
              "bg-[white!important] text-[#999] hover:text-[#999!important] hover:shadow-lg hover:opacity-[90%]":
                isSelected,
            }
          )}
          onClick={onClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Page;
