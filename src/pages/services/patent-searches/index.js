import React, { useCallback, useEffect, useRef } from "react";
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
                <h1 className="text-[53px] pb-5 font-medium leading-[3.5rem]">
                  Patent Searches
                </h1>
                <Button
                  type="primary"
                  className="py-[26px] px-9 my-[5px] uppercase"
                >
                  Start a Patent Search Now
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
                  The Crucial Role of Prior Art Searches
                </h2>
                <TextBlock>
                  {" "}
                  Before embarking on your journey to secure a utility patent,
                  it's crucial to understand the lay of the land. Thorough prior
                  art research is your compass, guiding you through the complex
                  world of existing inventions and patents.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  Many inventors make the mistake of assuming that their idea is
                  novel simply because they haven't seen it on the market.
                  However, the absence of a commercial product doesn't
                  necessarily mean that your invention is patentable. Countless
                  revolutionary ideas, already protected by patents, have yet to
                  make their commercial debut.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  Failing to conduct a comprehensive patent search can lead to
                  dire consequences. Imagine the heartbreak of having your
                  application rejected years down the line, all because of a
                  prior art patent that you were unaware of. This scenario can
                  be easily avoided by investing time and effort into a
                  meticulous patent search.
                </TextBlock>
                <br />
                <TextBlock>
                  But patent searches are more than just a checkpoint for
                  patentability. Even if your search doesn't uncover direct
                  competitors, the insights gained are invaluable. By
                  understanding the existing patent landscape, you can:
                </TextBlock>
                <div className="flex justify-center items-center">
                  <ul className="bullet-list text-[#999] pt-5 text-[17px] font-light">
                    <li>Identify potential obstacles and opportunities</li>
                    <li>
                      Refine your invention to differentiate it from prior art
                    </li>
                    <li>
                      Develop a stronger, more targeted patent application
                    </li>
                    <li>Make informed decisions about your IP strategy</li>
                  </ul>
                </div>
                <br />
                <TextBlock>
                  {" "}
                  In essence, patent searches provide a roadmap for navigating
                  the competitive landscape you're about to enter. They arm you
                  with the knowledge and foresight needed to chart a successful
                  course for your invention.
                </TextBlock>
                <br />
                <TextBlock>
                  {" "}
                  So, as you set sail on your quest for a utility patent,
                  remember: a thorough prior art search is your most trusted
                  ally. It's not just a formality, but a critical step in
                  ensuring the success and longevity of your intellectual
                  property.
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
