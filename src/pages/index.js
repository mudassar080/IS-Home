import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Page = () => {
  const [navbarPosition, setNavbarPosition] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarPosition(true);
      } else {
        setNavbarPosition(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          navbarPosition
            ? "bg-white shadow-[0_4px_18px_0_rgba(0,0,0,.12)]"
            : "bg-transparent"
        } fixed flex items-center justify-between w-full z-20 top-0 start-0 transition-colors duration-300 py-2 px-10`}
      >
        <a>
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              navbarPosition ? "dark:text-black" : "dark:text-white"
            }`}
          >
            Introstellar
          </span>
        </a>

        {/* Hamburger Button for Mobile */}
        {isMobile ? (
          <div
            onClick={showDrawer}
            className={`mobile-menu-button ${
              navbarPosition ? "" : "text-white"
            }`}
          >
            <MenuOutlined />
          </div>
        ) : null}

        {/* Menu for larger screens */}
        {!isMobile && (
          <Menu
            mode="horizontal"
            className={`menu-desktop ${
              navbarPosition ? "" : "white-text-custom"
            }`}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Services</Menu.Item>
            <Button type={navbarPosition ? "primary" : ""}>BUY NOW</Button>
          </Menu>
        )}

        {/* Drawer for mobile view */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={visible}
          className="menu-mobile"
        >
          <Menu>
            <Menu.Item key="1" onClick={closeDrawer}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={closeDrawer}>
              About
            </Menu.Item>
            <Menu.Item key="3" onClick={closeDrawer}>
              Services
            </Menu.Item>
            <Button onClick={closeDrawer}>BUY NOW</Button>
          </Menu>
        </Drawer>
      </div>

      <div className="background-image overlay">
        <div className="container">
          <div className="row">
            <div className="mr-auto col-md-6">
              <div className="brand">
                <p className="text-[53px] font-normal leading-[3.5rem]">
                  IP Services <br />
                  and Technology
                </p>
                <Button type="primary" size="large" className="mt-3">
                  <div className="text-sm font-medium">
                    Click here to become an inventor and file your first patent
                  </div>
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
                <h2 className="text-4xl	">
                  Companies with IP have a 10.4X higher chance of getting
                  funding.
                </h2>
                <p className="text-[#999] pt-5 text-[17px]">
                  {" "}
                  (Peer reviewed study from the European USTPO)
                </p>
              </div>
            </div>
            <div>
              <div className="row justify-center">
                <div className="col-md-4 mx-4">
                  <div className="info">
                    <div className="h-[92px!important]">
                      <img src="/makridakisLogo.png" className="pt-3" />
                    </div>
                    <Link className="text-xl" href="https://makridakispllc.com">
                      Makridakis PLLC
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mx-4">
                  <div className="info">
                    <div className="h-[92px!important]">
                      <img src="/blacMesaLogo.png" />
                    </div>
                    <Link className="text-xl" href="https://makridakispllc.com">
                      Black Mesa
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mx-4">
                  <div className="info">
                    <div className="h-[92px!important]">
                      <img src="/vps.png" />
                    </div>
                    <Link className="text-xl" href="https://makridakispllc.com">
                      Greg Sachs and Associates
                    </Link>
                  </div>
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
