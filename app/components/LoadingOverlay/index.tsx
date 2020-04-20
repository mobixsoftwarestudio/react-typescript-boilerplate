/**
 *
 * LoadingOverlay
 *
 */

import React from 'react';
import styled from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';

interface ILoadingOverlay {
  show: boolean;
}

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &:before {
    content: close-quote;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const LoadingOverlay: React.SFC<ILoadingOverlay> = ({ show }) => {
  if (!show) return null;
  return (
    <Overlay>
      <LoadingIndicator />
    </Overlay>
  );
};

export default LoadingOverlay;
