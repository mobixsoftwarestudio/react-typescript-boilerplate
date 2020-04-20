import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px auto;
  height: 100px;
  text-align: center;
  font-size: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoadingIndicator: React.SFC = () => (
  <Wrapper>
    <CircularProgress size={50} thickness={4} disableShrink />
  </Wrapper>
);

export default LoadingIndicator;
