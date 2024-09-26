import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useCallback } from "react";
import Button from "../../components/Button";
import { handleScroll } from "../../utils";

const lawyers = [
  {
    name: "Makridakis PLLC",
    logo: "/makridakisLogo.png",
    url: "https://makridakispllc.com",
  },
  {
    name: "Black Mesa",
    logo: "/blacMesaLogo.png",
    url: "https://www.blackmesalaw.com/",
  },
  {
    name: "Greg Sachs and Associates",
    logo: "/vps.png",
    url: "https://valetpatentservices.com/",
  },
];

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
      <div ref={overlayRef} className="background-image overlay">
        <div className="container">
          <div className="row">
            <div className="mr-auto max-[640px]:mx-2 col-md-6">
              <div className="brand">
                <h1 className="text-[53px] font-bold mt-[30px] leading-[46px]">
                  Introsteller
                </h1>
                <h2 className="text-[20px] mt-1	font-bold">
                  IP Services and Technology
                </h2>
                <p className="text-lg font-light my-[10px]">
                  Become an inventor and start filing your first patent today.
                </p>
                <br />
                <Button
                  onClick={() => push("/pricing")}
                  type="primary"
                  className="text-sm font-medium py-[26px] px-9 my-[5px] uppercase duration-300 animate-pulse-glow"
                >
                  File Now
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
                <h2 className="text-4xl	font-medium mt-8">
                  Partnered with Experienced Lawyers & Firms
                </h2>
              </div>
            </div>
            <div>
              <div className="row max-[640px]:flex-col justify-center">
                {lawyers.map((lawyer) => (
                  <div key={lawyer.name} className="col-md-4 mx-4">
                    <div className="info">
                      <div className="h-[92px!important]">
                        <img
                          src={lawyer.logo}
                          alt={lawyer.name}
                          className="max-[640px]:mx-auto"
                        />
                      </div>
                      <Link className="text-lg font-bold" href={lawyer.url}>
                        {lawyer.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#999] pt-5 text-[17px] font-light	">
                {" "}
                Companies with IP have a 10.4X higher chance of getting
                funding.Peer reviewed study from the European USTPO
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
