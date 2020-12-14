import { React, useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@material-ui/core';
import Posts from './components/posts/Posts.js';
import Form from './components/form/Form.js';
import useStyle from './styles.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/actions/posts'
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const smallScreen = useMediaQuery('(max-width:600px)');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          <Box fontFamily="Monospace" m={1}>
            Memories
          </Box>
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container classname={classes.mainContainer} direction={smallScreen?"column-reverse":""}justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
