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
            <div className="mx-auto text-center max-[425px]:mx-2 col-md-6">
              <div className="brand">
                <h1 className="text-[53px] pb-5 font-bold leading-[3.5rem]">
                  Utility Patents
                </h1>
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
                <h2 className="text-4xl	font-bold">
                  Safeguarding Your Innovation with Utility Patents
                </h2>
                <TextBlock>
                  {" "}
                  Welcome to the world of utility patents, a powerful tool
                  designed to protect the unique functionality of your
                  groundbreaking invention. If you've created something that not
                  only pushes the boundaries of innovation but also serves a
                  practical purpose, a utility patent can help you secure your
                  intellectual property rights. In this guide, we'll walk you
                  through the essentials of utility patents and how they can
                  benefit your invention.
                </TextBlock>
                <br />
                <h2 className="text-2xl	font-bold">
                  The Pillars of Utility Patents
                </h2>
                <TextBlock>
                  {" "}
                  Utility patents encompass the very essence of ingenuity:
                </TextBlock>
                <div>
                  <ul className="bullet-list text-[#999] pt-5 text-[17px] font-light">
                    <li>Processes</li>
                    <li>Machines</li>
                    <li>Manufactures</li>
                    <li>Compositions of matter</li>
                    <li>Refinements of existing ideas</li>
                  </ul>
                </div>
                <TextBlock>
                  By obtaining a utility patent, you gain exclusive rights to
                  prevent others from making, using, selling, or importing your
                  patented invention for 20 years from the filing date in the
                  United States.
                </TextBlock>
                <br />
                <TextBlock>
                  The Benefits of Securing a Utility Patent Obtaining a utility
                  patent offers several strategic advantages:
                </TextBlock>
                <div className="pl-5">
                  <ol className="counting-list text-[#999] pt-5 text-[17px] font-light max-[640px]:pl-[15px]">
                    <li>
                      <span className="font-medium">Protection: </span>{" "}
                      Safeguard your invention from imitation and infringement.
                    </li>
                    <li>
                      <span className="font-medium">Market Advantage: </span>
                      Enhance your market position and gain a competitive edge.
                    </li>
                    <li>
                      <span className="font-medium">Value: </span> Increase the
                      value and appeal of your invention to potential investors
                      and partners.
                    </li>
                  </ol>
                </div>
                <br />
                <h2 className="text-2xl	font-bold">Strategic Advantages</h2>
                <TextBlock>
                  {" "}
                  Securing a utility patent is more than just a defensive
                  measure - it's your ticket to a commanding market position. By
                  establishing exclusive rights, you ensure your invention's
                  commercial triumph and set the stage for success. Your utility
                  patent:
                </TextBlock>
                <div>
                  <ul className="bullet-list text-[#999] pt-5 text-[17px] font-light">
                    <li>
                      Protects your invention from imitation and infringement
                    </li>
                    <li>
                      Enhances your market leverage and competitive advantage
                    </li>
                    <li>
                      Increases the value and attractiveness of your invention
                      to potential investors and partners
                    </li>
                  </ul>
                  <br />
                  <Button
                    type="primary"
                    className="py-[26px] px-9 my-[5px] uppercase"
                    onClick={() => push("https://app.introstellar-ip.com/")}
                  >
                    Start a Utility Patent Filing Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
