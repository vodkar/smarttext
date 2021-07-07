import React from 'react';
import SearchInput from './ContentParser/SearchInput';
import { Container, Grid, Paper } from '@material-ui/core';
import { useStyles } from '../styles/mainStyles';
import clsx from 'clsx';
import useGlobal from '../store';

const ParserContent = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightForParser);
  const [globalState, globalActions] = useGlobal();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <div style={{ padding: '40px' }}>
        <SearchInput />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              {globalState.response?.map((el) => (
                <Paper className={fixedHeightPaper}>
                  <div>{el.url}</div>
                  <div>{el.header}</div>
                  <div>{el.text}</div>
                  {/*<TextField*/}
                  {/*    handleChangeRatio={handleChangeRatio}*/}
                  {/*    handleChangeText={handleChangeText}*/}
                  {/*    handleChangeWordCount={handleChangeWordCount}*/}
                  {/*    handleSendData={handleSendData}*/}
                  {/*/>*/}
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                {/*<TextField*/}
                {/*    handleChangeRatio={handleChangeRatio}*/}
                {/*    handleChangeText={handleChangeText}*/}
                {/*    handleChangeWordCount={handleChangeWordCount}*/}
                {/*    handleSendData={handleSendData}*/}
                {/*/>*/}
              </Paper>
              {/*<Readout readData={readData} />*/}
            </Grid>
          </Grid>
        </Container>
      </div>
    </main>
  );
};

export default ParserContent;
