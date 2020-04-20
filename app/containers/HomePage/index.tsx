/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoadingOverlay from 'components/LoadingOverlay';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { dummyRequest } from './actions';
import { makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

const LoadingButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  &:hover {
    background-color: #5469d4;
  }
`;

export default function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const loading = useSelector(makeSelectLoading());
  const dispatch = useDispatch();

  const handleDummyLoader = () => {
    dispatch(dummyRequest());
  };

  return (
    <Container>
      <LoadingOverlay show={loading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>This is the HomePage container!</h1>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton variant="outlined" onClick={handleDummyLoader}>
            <span>
              Click here to dispatch <b>dummyRequest</b> action!
            </span>
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
}
