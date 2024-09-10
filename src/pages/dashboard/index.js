import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-4 px-8">
      <Row justify="space-between" align="middle" className="pl-3" gutter={16}>
        <Col span={16} className="animate-fade-right">
          <p className="text-3xl">Introstellar</p>
          <p className="text-xl">IP Services and Technology </p>
        </Col>
        <Col span={8} className="text-end animate-fade-left">
          <Row gutter={30} align="end">
            <Col className="text-end">
              <Link className="text-xl" href="#">
                About
              </Link>
            </Col>
            <Col className="text-end">
              <Link className="text-xl" href="#">
                Home
              </Link>
            </Col>
            <Col className="text-end">
              <Link className="text-xl" href="#">
                Services
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={8} className="my-auto animate-fade-right">
          <p className="text-xl text-center max-[576px]:pb-10  min-[576px]:pr-10 responsive-font max-[576px]:pt-20">
            Our research shows consumers are 50% more likely to buy a product if
            it has a patent or related IP{" "}
          </p>
        </Col>
        <Col xs={24} sm={8} className="animate-jump-in animate-duration-[1200ms] animate-ease-in">
          <Image src="/lightBulb.png" width={612} height={408} alt="lightBulb" />
        </Col>
        <Col xs={24} sm={8} className="my-auto animate-fade-left">
          <p className="text-xl text-center max-[576px]:pt-10 min-[576px]:pl-16 responsive-font max-[576px]:pt-5">
            Companies with IP have a 10.4X higher chance of getting funding.
            (Peer reviewed study from the European USTPO)
          </p>
        </Col>
      </Row>
      <Row justify="center" className="pt-[3rem]">
        <Col xs={24} sm={15} lg={12} xl={9} className="animate-jump-in animate-duration-[1200ms] animate-ease-in">
          <div className="px-5 py-3 hover:bg-slate-50 cursor-pointer rounded text-[#000000] border border-[#C3C3C3!important] flex justify-center items-center shadow-[0_4px_7px_0_#29E64D80]">
            Click here to become an inventor and file your first patent
          </div>
        </Col>
      </Row>
      <Row justify="center" className="pt-[6rem] pb-5 animate-jump-in animate-duration-[1200ms] animate-ease-in">
        <Col xs={24} className="text-center">
          <p className="text-lg">Partnered with Experienced Lawyers/Firms</p>
        </Col>
      </Row>
      <Row justify="justify-between" className="pt-[6rem]">
        <Col
          xs={24}
          sm={8}
          className="min-[575px]:pl-20 max-[576px]:pb-10 max-[576px]:text-center animate-fade-right"
        >
          <div className="h-[92px!important]">
            <img src="/makridakisLogo.png" className="max-[575px]:mx-auto pt-5" />
          </div>
          <p className="text-xl pl-3">https://makridakispllc.com</p>
        </Col>
        <Col
          xs={24}
          sm={8}
          className="min-[575px]:pl-20 max-[576px]:pb-10 max-[576px]:text-center animate-fade-up"
        >
          <div className="h-[92px!important]">
            <img src="/blacMesaLogo.png" className="max-[575px]:mx-auto" />
          </div>
          <p className="text-xl pl-3">https://makridakispllc.com</p>
        </Col>
        <Col xs={24} sm={8} className="text-center animate-fade-left">
          <div className="min-[575px]:h-[92px!important]"></div>
          <p className="pt-1 text-xl">Greg Sachs and Associates</p>
        </Col>
      </Row>
    </div>
  );
};

export default page;
