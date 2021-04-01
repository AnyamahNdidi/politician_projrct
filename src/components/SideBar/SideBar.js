import React from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Biography
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Education
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Awards
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Past Office
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
