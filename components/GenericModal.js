import { useEffect, useRef, useState, forwardRef } from "react";
import Router from "next/router";
import Modal from "react-modal";
import styled from "styled-components";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { isIOS } from "react-device-detect";
import CloseButton from "./CloseButton";

Modal.setAppElement("body");

const ReactModalAdapter = forwardRef(
  ({ className, modalClassName, ...props }, ref) => (
    <Modal
      className={modalClassName}
      portalClassName={className}
      ref={ref}
      {...props}
    />
  ),
);

const StyledModal = styled(ReactModalAdapter).attrs({
  //https://github.com/styled-components/styled-components/issues/1494
  overlayClassName: "overlay",
  modalClassName: "modal",
})`
  /* Portal styles here (though usually you will have none) */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    place-items: center;
    z-index: 3;
  }
  .modal {
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    outline: 0;
    width: 100%;
    height: 100%;
  }
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1cfcf;
  padding: var(--spacing-medium);
  > svg {
    flex: 0 0 auto;
  }
`;

const Heading = styled.h1`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-family: var(--secondary-font-family);
  font-weight: var(--font-weight-secondary-semi-bold);
  margin: 0;
`;

const Body = styled.div`
  overflow-y: scroll;
  padding-top: var(--spacing-large);
`;

const GenericModal = ({
  heading,
  isOpen,
  onRequestClose,
  contentLabel,
  close,
  children,
}) => {
  const modalEl = useRef(null);
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      close();
    };

    Router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(modalEl.current);
    } else {
      enableBodyScroll(modalEl.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      isIOS={isIOSBrowser}
      ref={modalEl}
    >
      <Header>
        <Heading>{heading}</Heading>
        <CloseButton circle handleClick={close} />
      </Header>
      {/** TODO: allow the id to be passed in prop */}
      <Body>{children}</Body>
    </StyledModal>
  );
};

export default GenericModal;
