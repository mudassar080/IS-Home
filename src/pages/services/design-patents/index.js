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
                  Design Patents
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
                  Protecting Your Invention's Visual Appeal
                </h2>
                <TextBlock>
                  {" "}
                  Design patents guard the important aspects of your invention's
                  unique appearance. Unlike utility patents that protect an
                  invention's functionality, design patents focus on the
                  ornamental and aesthetic aspects.
                </TextBlock>
                <br />
                <h2 className="text-2xl	font-bold">
                  The Benefits of Design Patents
                </h2>
                <TextBlock>
                  {" "}
                  Utility patents encompass the very essence of ingenuity:
                </TextBlock>
                <div className="pl-5">
                  <ol className="counting-list text-[#999] pt-5 text-[17px] font-light max-[640px]:pl-[15px]">
                    <li>
                      <span className="font-medium">
                        Cost-Effective Protection:{" "}
                      </span>{" "}
                      Design patents offer a more affordable route to protecting
                      your intellectual property compared to utility patents,
                      with lower filing fees and a more streamlined application
                      process.
                    </li>
                    <li>
                      <span className="font-medium">
                        "Patent Pending" Status:{" "}
                      </span>
                      As soon as your design patent application is filed, you
                      can proudly claim "patent pending" on your invention,
                      asserting your exclusive rights while the US Patent &
                      Trademark Office (USPTO) reviews your application.
                    </li>
                    <li>
                      <span className="font-medium">
                        Tailored for Aesthetics:{" "}
                      </span>{" "}
                      Design patents are perfect for items where visual appeal
                      is paramount, such as fashion garments, product casings,
                      and any distinct visual appearance you want to protect
                      associated with your product.
                    </li>
                    <li>
                      <span className="font-medium">
                        Fast Approval Process:{" "}
                      </span>{" "}
                      4.Design patents often navigate the approval process
                      within about a year, providing a swift path to securing
                      your intellectual property.
                    </li>
                  </ol>
                </div>
                <h2 className="text-2xl	font-bold">
                  Leveraging Your Design Patent
                </h2>
                <div>
                  <ul className="bullet-list text-[#999] pt-5 text-[17px] font-light">
                    <li>
                      Use your design patent to prevent competitors from copying
                      or imitating your invention's unique appearance
                    </li>
                    <li>
                      Incorporate your patented design into your branding and
                      marketing strategies to differentiate your products in the
                      market
                    </li>
                    <li>
                      Consider licensing your patented design to generate
                      additional revenue streams
                    </li>
                    <li>
                      Monitor the market for potential infringement and enforce
                      your design patent rights when necessary
                    </li>
                  </ul>
                  <br />
                  <Button
                    type="primary"
                    className="py-[26px] px-9 my-[5px] uppercase"
                    onClick={() => push(process.env.NEXT_PUBLIC_BASE_URL)}
                  >
                    Start a Design Patent Filing Now
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
