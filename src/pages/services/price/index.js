import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button";
import { handleScroll, TextBlock } from "../../../../utils";
import { useRouter } from "next/router";
import clsx from "clsx";

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
                  To get started, you will need to choose a package or serv ice
                  for your needs.
                  <br /> You can opt out, add or change services dynamically for
                  now just pick your top priority.
                  <br /> Note prices vary depending on the complexity of the
                  invention.
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
                    className="py-5 px-6 uppercase rounded-full"
                    onClick={() => handleManageClick("Patents")}
                  >
                    Patents
                  </Button>

                  <Button
                    type={selectedPackage === "Patents +" ? "primary" : "text"}
                    className="ml-[5px] py-5 px-6 uppercase rounded-full"
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
                    priceRange="650-1500"
                    features={[
                      "Provisional Patent Application",
                      "1 Year of Protection",
                      "After 1 year you have to file another Provisional or a Non Provisional",
                      "Doesn't allow you to enforce your patent.",
                    ]}
                    selected={selected}
                    onClick={() =>
                      handleGetStartedClick("The Book Mark Package")
                    }
                  />
                  <PackageCard
                    title="The Gold Standard Utility Package"
                    priceRange="1250-2500"
                    features={[
                      "Non Provisional Patent Application",
                      "20 Years of Protection",
                      "Grants the right to enforce the patent",
                    ]}
                    selected={selected}
                    onClick={() =>
                      handleGetStartedClick("The Gold Standard Utility Package")
                    }
                  />
                  <PackageCard
                    title="The Gold Standard Design Package"
                    priceRange="700-1400"
                    features={[
                      "Non Provisional Design Patent Application",
                      "20 Years of Protection For Visual Designs",
                      "Grants the right to enforce the patent",
                    ]}
                    selected={selected}
                    onClick={() =>
                      handleGetStartedClick("The Gold Standard Design Package")
                    }
                  />
                </>
              )}

              {selectedPackage === "Patents +" && (
                <>
                  <PackageCard
                    title="Search Package"
                    priceRange="300-400"
                    features={["Full Patent Search and Report"]}
                    selected={selected}
                    onClick={() => handleGetStartedClick("Search Package")}
                  />
                  <PackageCard
                    title="Trademarks"
                    priceRange="300-500"
                    features={[
                      "Nationwide Protection Begins Upon Registration",
                      "Create an account and contact us for more details",
                    ]}
                    selected={selected}
                    onClick={() => handleGetStartedClick("Trademarks")}
                  />
                  <PackageCard
                    title="Litigation"
                    features={[
                      "Enforce your patent",
                      "Stop others from using your IP",
                      "Create an account and contact us for more details on prices",
                    ]}
                    selected={selected}
                    onClick={() => handleGetStartedClick("Litigation")}
                  />
                </>
              )}
            </div>

            <div className="py-20">
              <div className="text-center">
                <h3 className="py-[30px] text-[25px] font-bold">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="row max-[992px]:flex-col">
                <div className="w-4/12 ml-auto max-[992px]:mr-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px] px-[15px]">
                  <p className="text-lg font-bold">
                    Will I have a real Lawyer?
                  </p>
                  <TextBlock className="text-sm">
                    Yes, we will partner you with an official US lawyer.
                  </TextBlock>
                </div>
                <div className="w-4/12 mr-auto max-[992px]:ml-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px] px-[15px]">
                  <p className="text-lg font-bold">What does a Patent do?</p>
                  <TextBlock className="text-sm">
                    Patents allow you to protect your ideas/inventions. If you
                    own a patent you own the rights to that idea/invention for
                    20 years. If someone decides to compete with you in the
                    market, you have the rights to order them to cease and
                    desist or in many cases they might have to pay you
                    royalites.
                  </TextBlock>
                </div>
              </div>
              <div className="row max-[992px]:flex-col">
                <div className="w-4/12 ml-auto max-[992px]:mr-auto max-[992px]:w-full max-w-[360px] pt-[70px] pb-[30px] px-[15px]">
                  <p className="text-lg font-bold">Can I cancel or back out?</p>
                  <TextBlock className="text-sm">
                    Yes at any time. <br /> The lawyer will ask for half of the
                    payment upfront and you will only be charged for services
                    that have been rendered. If part way through the process you
                    want to back out you will be refunded proportional to the
                    services alreadly rendered. Note you can pause your filing
                    indefinetly with us if you need to wait for any reason.
                  </TextBlock>
                </div>
                <div className="w-4/12 mr-auto max-[992px]:ml-auto max-w-[360px] max-[992px]:w-full pt-[70px] pb-[30px] px-[15px]">
                  <p className="text-lg font-bold">
                    Why should I use Introstellar?
                  </p>
                  <TextBlock className="text-sm	mb-[10px]">
                    We advocate and empower you the client. In the standard
                    patent process you are at the whims of whatever lawyer you
                    end up with. At Introstellar we provide you with, a perfect
                    and streamlined experience to make the application process
                    as simple as ordering an Uber. We also provide FREE, well
                    produced educational content to help you understand the
                    process and also customer support for any issues. We pride
                    ourselves on empowering clients and helping you get the best
                    value/cost patents and IP services you can buy.
                  </TextBlock>
                </div>
              </div>
            </div>
            <div className="text-center">
              <TextBlock>
                What are the timelines like for the process?
              </TextBlock>
              <TextBlock>
                Sign up and filling out the filing forms take ~5 minutes
              </TextBlock>
              <TextBlock>
                From the moment of payment you can see your first draft within
                48 hours
              </TextBlock>
              <Button
                type="primary"
                className="py-5 px-6 mt-6"
                onClick={() => push("https://app.introstellar-ip.com/")}
              >
                Sign Up
              </Button>
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
            "pt-[15px] px-[15px] min-h-[457px!important] max-[992px]:min-h-[100%!important]",
            {
              "text-white": isSelected,
            }
          )}
        >
          <p className="uppercase font-bold">{title}</p>
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
            {!!priceRange ? formatPrice(priceRange) : ""}
            <small className="relative text-[18px] font-normal	">
              {!!priceRange ? "/year" : ""}
            </small>{" "}
          </h1>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className={clsx("py-3 text-center border-b text-[#999]", {
                  "text-white border-[white!important]": isSelected,
                })}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button
          type="primary"
          className={clsx(
            "py-5 px-6 uppercase rounded-full mb-[15px] mt-[15px] max-[992px]:mt-8",
            {
              "bg-[white!important] text-[#999] hover:text-[#999!important]":
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
