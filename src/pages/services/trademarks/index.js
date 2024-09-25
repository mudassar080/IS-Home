import React, { useRef, useEffect, useCallback } from "react";
import Button from "../../../../components/Button";
import { handleScroll, TextBlock } from "../../../../utils";
import { useRouter } from "next/router";

const Page = () => {
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

  return (
    <>
      <div ref={overlayRef} className="background-image overlay height65">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center col-md-6">
              <div className="brand">
                <h1 className="text-[53px] pb-5 font-bold leading-[3.5rem]">
                  Trademarks
                </h1>
                <Button
                  type="primary"
                  className="py-[26px] px-9 my-[5px] uppercase"
                  onClick={() => push("https://app.introstellar-ip.com/")}
                >
                  Start a Trademark Filing Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container mr-auto ml-auto">
          <div className="section">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="text-4xl	font-bold">Your Trusted Ally</h2>
                <div className="pl-5">
                  <ol className="counting-list text-[#999] pt-5 text-[17px] font-light max-[640px]:pl-[15px]">
                    <li>
                      <span className="font-medium">
                        USPTO Database Search:{" "}
                      </span>{" "}
                      We conduct an exhaustive search of the United States
                      Patent and Trademark Office (USPTO) database, uncovering
                      any federally registered trademarks that may pose a
                      conflict.
                    </li>
                    <li>
                      <span className="font-medium">
                        State Database Search:{" "}
                      </span>
                      We go beyond federal registrations, scouring state
                      databases to identify any trademarks that may hinder your
                      application at the state level.
                    </li>
                    <li>
                      <span className="font-medium">Common Law Search: </span>{" "}
                      We explore the realm of unregistered trademarks, ensuring
                      that your brand name is clear of any common law conflicts
                      that could arise from long-term use by others.
                    </li>
                    <li>
                      <span className="font-medium">Domain Name Search: </span>{" "}
                      We investigate the availability of your desired domain
                      name, helping you secure a cohesive online presence for
                      your brand.
                    </li>
                  </ol>
                </div>
                <TextBlock>
                  Trademark Filing Services: Protecting Your Brand Made Simple
                  Once you've cleared the trademark search hurdle, our trademark
                  filing services provide a streamlined path to federal
                  registration:
                </TextBlock>
                <div className="pl-5">
                  <ol className="counting-list text-[#999] pt-5 text-[17px] font-light max-[640px]:pl-[15px]">
                    <li>
                      <span className="font-medium">
                        Attorney-Filed Federal Trademark Application:{" "}
                      </span>{" "}
                      1.Our experienced attorneys handle the preparation and
                      filing of your federal trademark application, ensuring
                      that it meets all USPTO requirements.
                    </li>
                    <li>
                      <span className="font-medium">
                        Non-Substantive Responses:{" "}
                      </span>
                      We handle non-substantive office actions from the USPTO,
                      keeping your application on track.
                    </li>
                    <li>
                      <span className="font-medium">Continuous Updates: </span>{" "}
                      We keep you informed of your application's progress,
                      providing regular status updates from the USPTO.
                    </li>
                    <li>
                      <span className="font-medium">Timely Filing: </span> We
                      guarantee that your trademark application will be filed
                      within 3-5 business days, putting you on the fast track to
                      protection.
                    </li>
                  </ol>
                </div>
                <br />
                <h2 className="text-2xl	font-bold">
                  Secure Your Brand Identity Today
                </h2>
                <TextBlock>
                  In the competitive business landscape, safeguarding your brand
                  identity is non-negotiable. Our trademark search and filing
                  services provide the expertise and support you need to
                  navigate the trademark process with confidence. Don't leave
                  your most valuable asset vulnerable - take action today to
                  protect your brand name and secure your place in the market.
                </TextBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
