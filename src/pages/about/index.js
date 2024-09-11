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
                <p className="text-[53px] font-bold leading-[3.5rem]">About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container mr-auto ml-auto">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="text-4xl	font-bold">Our Mission</h2>
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
                  cost/value IP services on the market. We achieve this by
                  partnering with professional lawyers and providing
                  cutting-edge legal services that streamline the patent
                  drafting process. By leveraging our expertise and advanced
                  tools, we enable law firms to significantly reduce the time
                  and resources required to draft patent applications,
                  ultimately lowering costs for their clients.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  Through our unique approach, we support lawyers in delivering
                  more efficient services and help them serve a broader range of
                  clients. By making patent drafting more cost-effective, we
                  contribute to a more inclusive IP ecosystem, enabling
                  inventors from all backgrounds to protect their ideas and
                  bring them to market.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  At Introstellar IP, we aim to inspire more innovation and
                  entrepreneurship worldwide. We strive to be a catalyst for
                  change in the IP landscape, breaking down barriers and making
                  IP protection more accessible to all.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  We're dedicated to delivering the best value IP services to
                  our partners and their clients, helping them secure the
                  legitimacy and value they deserve. Together, we can foster a
                  more innovative and entrepreneurial future.
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
