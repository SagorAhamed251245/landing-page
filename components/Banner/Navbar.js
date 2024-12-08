import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Menu } from "antd";
import Link from "next/link";
import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <nav className="nav container">
      <section className="logo-section">
        <Link href={"/"}>
          <img
            className="logo"
            src="/images/svg/logo.png"
            alt="Logo"
            style={{ width: "100%" }}
          />
        </Link>
      </section>

      {/* Desktop Menu */}
      <section className="desktop-menu">
        <Link href="/course/flex:-mern-full-stack-software-engineer">MERN</Link>
        <Link href="/course/flex:-software-quality-automation-engineer">
          SQA
        </Link>
        <Link href="/course/flex:-aws-devops-and-cloudops-engineer">
          CloudOps
        </Link>
        <Link href="/course/agile-product-owner">Agile Product Owner</Link>
      </section>

      <section className="desktop-meeting-modal">
        <BookMeetingModal />
      </section>

      {/* Mobile Menu (Hamburger and Drawer) */}
      <section className="mobile-nav-section">
        <Button
          className="hamburger"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
        />
      </section>

      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <Link href="/course/flex:-mern-full-stack-software-engineer">
              MERN
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/course/flex:-software-quality-automation-engineer">
              SQA
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/course/flex:-aws-devops-and-cloudops-engineer">
              CloudOps
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/course/agile-product-owner">Agile Product Owner</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
