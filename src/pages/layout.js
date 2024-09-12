import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Drawer, Menu } from "antd";
import {
  MenuOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";

const noLayoutPaths = [""];

export default ({ children }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { SubMenu } = Menu;

  const [navbarPosition, setNavbarPosition] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const footerMenuUrl = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services/patent-searches", label: "Patent Searches" },
    { href: "/services/utility-patents", label: "Utility Patents" },
    {
      href: "/services/provisional-patents",
      label: "Provisional Patents",
    },
    { href: "/services/design-patents", label: "Design Patents" },
    { href: "/services/trademarks", label: "Trademarks" },
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
              className={`menu-desktop w-[35%] ${
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
              <Menu.Item key="sign_in">
                <Button
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
              <Menu.Item key="home" onClick={() => navigateRoute("/")}>
                Home
              </Menu.Item>
              <Menu.Item key="about" onClick={() => navigateRoute("/about")}>
                About
              </Menu.Item>
              <SubMenu
                key="services"
                title={<p className="text-black">Services</p>}
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
              <Button
                onClick={closeDrawer}
                className="rounded-full uppercase ml-5 mt-2"
              >
                Sign In
              </Button>
            </Menu>
          </Drawer>
        </div>
      </div>
      <div>{children}</div>
      <footer className="py-5 flex justify-center">
        <div className="container flex max-[625px]:text-center">
          <div className="max-[625px]:mx-auto">
            {footerMenuUrl.map((item, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={item.href}
                  className="p-2 text-xs font-medium uppercase"
                >
                  {item.label}
                </Link>
                {idx === 2 || idx === 4 ? (
                  <br className="hidden max-[625px]:block" />
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
