import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Drawer, Menu } from "antd";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";

const noLayoutPaths = [""];

export default ({ children }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { SubMenu } = Menu;

  const [navbarPosition, setNavbarPosition] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-K83BK4J4MT";
    gtagScript.async = true;
    document.body.appendChild(gtagScript);

    const gtagInitScript = document.createElement("script");
    gtagInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-K83BK4J4MT');
    `;
    document.body.appendChild(gtagInitScript);

    return () => {
      document.body.removeChild(gtagScript);
      document.body.removeChild(gtagInitScript);
    };
  }, [pathname]);

  const showDrawer = () => setVisible(true);

  const closeDrawer = () => setVisible(false);

  const navigateRoute = (href) => {
    if (isMobile) closeDrawer();
    push(href);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) setIsMobile(true);
    else {
      setIsMobile(false);
      setVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setNavbarPosition(true);
      else setNavbarPosition(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const subMenuUrl = [
    { key: "patent-searches", label: "Patent Searches" },
    { key: "utility-patents", label: "Utility Patents" },
    { key: "provisional-patents", label: "Provisional Patents" },
    { key: "design-patents", label: "Design Patents" },
    { key: "trademarks", label: "Trademarks" },
  ];

  if (noLayoutPaths.includes(pathname)) return <>{children}</>;

  return (
    <div className="min-h-screen">
      <div
        className={`${
          navbarPosition
            ? "bg-white shadow-[0_4px_18px_0_rgba(0,0,0,.12)]"
            : "bg-transparent"
        } fixed flex items-center justify-center w-full z-20 top-0 start-0 transition-colors duration-300 py-2 px-10`}
      >
        <div className="container flex justify-between items-center">
          <Link href="/">
            <span
              className={`self-center text-lg font-light whitespace-nowrap ${
                navbarPosition ? "dark:text-black" : "text-white"
              }`}
            >
              Introstellar
            </span>
          </Link>

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
              triggerSubMenuAction="click"
              mode="horizontal"
              className={`menu-desktop w-[475px] ${
                navbarPosition ? "" : "white-text-custom"
              }`}
            >
              <Menu.Item
                key="home"
                className="uppercase"
                onClick={() => navigateRoute("/")}
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="about"
                className="uppercase"
                onClick={() => navigateRoute("/about")}
              >
                About
              </Menu.Item>
              <SubMenu
                key="services"
                className="uppercase"
                title={
                  <p className={navbarPosition ? "text-black" : "text-white"}>
                    Services <CaretDownOutlined />
                  </p>
                }
              >
                {subMenuUrl.map((item) => (
                  <Menu.Item
                    key={item.key}
                    onClick={() => navigateRoute(`/services/${item.key}`)}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </SubMenu>
              <Menu.Item
                key="pricing"
                className="uppercase"
                onClick={() => navigateRoute("/pricing")}
              >
                Pricing
              </Menu.Item>
              <Menu.Item key="sign_in">
                <Button
                  onClick={() => push(process.env.NEXT_PUBLIC_BASE_URL)}
                  type={navbarPosition ? "primary" : ""}
                  className="rounded-full uppercase"
                >
                  Sign In
                </Button>
              </Menu.Item>
            </Menu>
          )}

          {/* Drawer for mobile view */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            open={visible}
            className="menu-mobile"
          >
            <Menu mode="inline">
              <Menu.Item key="home" className="uppercase" onClick={() => navigateRoute("/")}>
                Home
              </Menu.Item>
              <Menu.Item key="about" className="uppercase" onClick={() => navigateRoute("/about")}>
                About
              </Menu.Item>
              <SubMenu
                key="services"
                title={<p className="text-black uppercase">Services</p>}
              >
                {subMenuUrl.map((item) => (
                  <Menu.Item
                    key={item.key}
                    onClick={() => navigateRoute(`/services/${item.key}`)}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </SubMenu>
              <Menu.Item
                key="pricing"
                className="uppercase"
                onClick={() => navigateRoute("/pricing")}
              >
                Pricing
              </Menu.Item>
              <Button
                onClick={() => {
                  closeDrawer();
                  push(process.env.NEXT_PUBLIC_BASE_URL);
                }}
                className="rounded-full uppercase ml-5 mt-2"
              >
                Sign In
              </Button>
            </Menu>
          </Drawer>
        </div>
      </div>
      <div>{children}</div>
      <footer className="py-5 flex justify-center"></footer>
    </div>
  );
};
