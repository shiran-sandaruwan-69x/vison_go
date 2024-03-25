import React, { useState } from "react";
import { Form, Dropdown, DropdownMenu,  DropdownToggle, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logodarkImg from "../../assets/images/logo/logo-dark.webp";
import logosmImg from "../../assets/images/logo/Logo-Icon.webp";
import logolightImg from "../../assets/images/logo/logo-white.webp";
import inquiryImg from "../../assets/images/header/inquiry.png";
import {useTranslation} from "react-i18next";

const Header = props => {
  const [search, setsearch] = useState(false);
  const { t } = useTranslation();

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 992) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/dashboard" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="8" />
                </span>
                <span className="logo-lg">
                  <img src={logodarkImg} alt="" height="24" />
                </span>
              </Link>

              <Link to="/dashboard" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src={logolightImg} alt="" height="42" />
                </span>
              </Link>
            </div>
            <button type="button" className="btn btn-sm px-3 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle();
              }}
              data-target="#topnav-menu-content"
            >
              <i className="mdi mdi-menu font-size-24"></i>
            </button>

            {/*<div className="d-none d-sm-block">*/}

            {/*  <Dropdown*/}
            {/*    isOpen={singlebtn}*/}
            {/*    toggle={() => setSinglebtn(!singlebtn)}*/}
            {/*    className="pt-3 d-inline-block"*/}
            {/*  >*/}
            {/*    <DropdownToggle className="btn btn-secondary" caret>*/}
            {/*      Create <i className="mdi mdi-chevron-down"></i>*/}
            {/*    </DropdownToggle>*/}
            {/*    <DropdownMenu>*/}
            {/*      <DropdownItem>Action</DropdownItem>*/}
            {/*      <DropdownItem>Another action</DropdownItem>*/}
            {/*      <DropdownItem>Something else here</DropdownItem>*/}
            {/*      <div className="dropdown-divider"></div>*/}
            {/*      <DropdownItem>Separated link</DropdownItem>*/}
            {/*    </DropdownMenu>*/}
            {/*  </Dropdown>*/}

            {/*</div>*/}
          </div>

          <div className="d-flex">
            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="fa fa-search"></span>
              </div>
            </form> */}

            {/* <Dropdown
              className="d-inline-block d-lg-none ms-2"
              onClick={() => {
                setsearch(!search);
              }}
              type="button"
            > */}
              {/* <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                tag="button"
              > <i className="mdi mdi-magnify"></i>
              </DropdownToggle> */}
              {/* <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                <Form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </DropdownMenu> */}
            {/* </Dropdown> */}

            <LanguageDropdown />

            <div className='d-flex align-items-center mx-2'>
              <Link to="/inquiry" className="waves-effect">
                <div className='d-flex align-items-center gap-2 header-item fw-700'>
                  <img src={inquiryImg} alt="" height="18" />
                  {t("INQUIRY")}
                </div>
              </Link>
            </div>

            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            {/* <NotificationDropdown /> */}
            <ProfileMenu />

            {/*<div*/}
            {/*  onClick={() => {*/}
            {/*    props.showRightSidebarAction(!props.showRightSidebar);*/}
            {/*  }}*/}
            {/*  className="dropdown d-inline-block"*/}
            {/*>*/}
            {/*  <button*/}
            {/*    type="button"*/}
            {/*    className="btn header-item noti-icon right-bar-toggle waves-effect"*/}
            {/*  >*/}
            {/*    <i className="mdi mdi-cog-outline"></i>*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};


export default Header;
