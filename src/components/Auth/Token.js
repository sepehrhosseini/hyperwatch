import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import Grid from '@material-ui/core/Grid';

import { getToken } from '../../utils/api';

import { useQuery } from '../../utils/router';

const Token = (props) => {
  const { code } = useQuery();
  const history = useHistory();

  const fetchToken = useCallback(async () => {
    const {
      data: { access_token: token },
    } = await getToken({ code });

    localStorage.setItem('jwt', token);

    history.push('/');
  }, [code, history]);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return (
    <div>
      <Card style={{ maxWidth: 300, margin: '5rem auto' }}>
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={4}
          >
            <Grid item>
              <CircularProgress />
            </Grid>
            <Grid item>Logging you in...</Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Token;
