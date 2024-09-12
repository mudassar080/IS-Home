import React, { useRef, useEffect, useCallback } from "react";
import Button from "../../../../components/Button";
import { handleScroll, TextBlock } from "../../../../utils";

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
            <div className="mx-auto text-center max-[425px]:mx-2 col-md-6">
              <div className="brand">
                <h1 className="text-[53px] pb-5 font-bold leading-[3.5rem]">
                  Provisional Patents
                </h1>
                <Button
                  type="primary"
                  className="py-[26px] px-9 my-[5px] uppercase"
                >
                  Start a Provisional Patent Filing Now
                </Button>
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
                <h2 className="text-4xl	font-medium">
                  Fast and Economic Protection
                </h2>
                <TextBlock>
                  {" "}
                  Think of a provisional patent application as the first step in
                  your invention's journey towards a full utility patent. It's a
                  12-month sanctuary, offering a cost-effective way to establish
                  an early filing date and secure "patent pending" status while
                  you refine your creation.
                </TextBlock>
                <br />
                <h2 className="text-4xl	font-medium">
                  The Benefits of Filing a Provisional Patent Application
                </h2>
                <div className="flex justify-center items-center">
                  <ol className="counting-list text-[#999] pt-5 text-[17px] font-light max-[640px]:pl-[15px]">
                    <li>
                      <span className="font-medium">
                        Affordable Protection:{" "}
                      </span>{" "}
                      1.Provisional patent applications have lower filing fees
                      and a streamlined filing process compared to regular
                      utility patent applications.
                    </li>
                    <li>
                      <span className="font-medium">
                        "Patent Pending" Status:{" "}
                      </span>
                      Once your provisional application is filed, you can
                      proudly claim "patent pending" on your invention,
                      announcing to the world that you've started the patent
                      process.
                    </li>
                    <li>
                      <span className="font-medium">
                        Time to Perfect Your Invention:{" "}
                      </span>{" "}
                      The 12-month period provides a valuable opportunity to
                      further develop, test, and refine your invention before
                      committing to the more extensive and costly
                      non-provisional patent application.
                    </li>
                    <li>
                      <span className="font-medium">
                        Establishing an Early Priority Date:{" "}
                      </span>{" "}
                      Your provisional application serves as a "priority
                      application," setting an early effective filing date for
                      your invention. This can be crucial in determining who has
                      the right to patent the invention.
                    </li>
                  </ol>
                </div>
                <br />
                <h2 className="text-4xl	font-medium">
                  Navigating the Provisional Patent Journey
                </h2>
                <TextBlock>
                  Filing a provisional patent application is the first step. To
                  maintain your "patent pending" status and progress towards a
                  full utility patent, you'll need to file a non-provisional
                  application within 12 months.
                </TextBlock>
                <TextBlock>
                  The patent application is a temporary protective shield, not a
                  substitute for a full utility patent. It's an affordable
                  stepping stone that grants you a year of "patent pending"
                  status and buys you time to perfect your invention before
                  embarking on the full patent journey.
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
