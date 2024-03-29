/* eslint-disable import/prefer-default-export */

import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Modal from "react-modal";

type ReactModalAdapterProps = {
  className: string;
  modalClassName: string;
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose: () => void;
  contentLabel: string;
  children: ReactNode;
};

const ReactModalAdapter = ({
  className,
  modalClassName,
  isOpen,
  onAfterOpen,
  onRequestClose,
  contentLabel,
  ...props
}: ReactModalAdapterProps): ReactElement => (
  <Modal
    className={modalClassName}
    portalClassName={className}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
    onAfterOpen={onAfterOpen}
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  />
);

export const StyledModal = styled(ReactModalAdapter).attrs({
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

export const Body = styled.div`
  flex: 1;
  /* overflow-y: scroll; */
`;
