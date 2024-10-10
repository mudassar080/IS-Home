import React, { useCallback, useEffect, useRef } from "react";
import { handleScroll, TextBlock } from "../../../utils";

const Page = () => {
  const overlayRef = useRef(null);

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
                <h1 className="text-[53px] font-bold leading-[3.5rem]">About</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container mr-auto ml-auto">
          <div className="section max-[480px]:pt-[25px]">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <p className="text-[#999] text-[17px] font-light min-[480px]:pt-5">
                  Introstellar derived from the words “interstellar“ meaning
                  distance between stars and “introspection” meaning to look
                  inwards. <br />
                  Introstellar is defined as the space or distance within a
                  persons mind.
                </p>
                <br />
                <h2 className="text-4xl	font-medium">Our Mission</h2>
                <TextBlock>
                  {" "}
                  At Introstellar IP, we believe that intellectual property
                  protection should be accessible to all inventors and
                  entrepreneurs. We understand the challenges faced by startups
                  and small businesses in securing patents, and we're committed
                  to making the process more affordable and efficient.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  Our mission is to empower innovators by providing the best
                  value/cost IP services on the market. We achieve this by
                  partnering with professional lawyers and providing
                  cutting-edge legal services that streamline the patent
                  drafting process. By leveraging our expertise and tools, we
                  enable law firms to significantly reduce the time and
                  resources required to draft patent applications, ultimately
                  lowering costs for their clients.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  At our core Introstellar aims to inspire more innovation and
                  entrepreneurship worldwide. We strive to be a catalyst for
                  change in the IP landscape, breaking down barriers and making
                  IP protection more accessible to all.
                </TextBlock>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
