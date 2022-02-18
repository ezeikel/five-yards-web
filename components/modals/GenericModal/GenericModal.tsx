import { ReactNode, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { StyledModal, Body } from "./GenericModal.styled";

Modal.setAppElement("body");

type GenericModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  close: () => void;
  children: ReactNode;
  className?: string;
};

const GenericModal = ({
  isOpen = false,
  onRequestClose,
  contentLabel,
  close,
  children,
  className,
}: GenericModalProps) => {
  const router = useRouter();
  const modalEl = useCallback(
    (node) => {
      if (node) {
        if (isOpen) {
          disableBodyScroll(node);
        } else {
          enableBodyScroll(node);
        }
      }
    },
    [isOpen],
  );

  useEffect(() => {
    const handleRouteChange = () => {
      close();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={className}
    >
      <Body ref={modalEl}>{children}</Body>s
    </StyledModal>
  );
};

export default GenericModal;
