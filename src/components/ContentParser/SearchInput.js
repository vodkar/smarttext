import {
  createStyles,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import useGlobal from '../../store';
import { searcherApi } from '../../api/searcherApi';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    // .Mui-focused: {}
  })
);

// interface State {
//     search: string;
//
// }

const SearchInput = (setResponse) => {
  const [globalState, globalActions] = useGlobal();

  const classes = useStyles();

  const [values, setValues] = React.useState({
    response: '',
    post: '',
    searcherId: '',
  });
  console.log(values);

  const handleSubmit = async (e) => {
    globalActions.actions.loadingActions(true);
    e.preventDefault();
    const response = await searcherApi.post('api/search', {
      post: values.post,
    });
    let workerId = await response.data.searcherData.id;

    async function get() {
      searcherApi.get(`api/search/${workerId}`).then((resp) => {
        let data = resp.data;
        switch (data.state) {
          case 'active':
          case 'waiting':
            globalActions.actions.responseActions({
              data: Array.isArray(data.data) ? data.data : [],
              progress: data.progress,
            });

            setTimeout(() => get(), 1500);
            break;
          case 'completed':
            globalActions.actions.responseActions({
              data: data.data,
              progress: 100,
            });
            break;
        }
      });
    }
    // do {
    //     let resp = await fetch("http://127.0.0.1:3001/api/search", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ post: values.post }),
    //       });
    // }
    get();
    // globalActions.actions.loadingActions(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.margin}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Поиск</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.search}
          onChange={handleChange('post')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          endAdornment={
            <InputAdornment position="end">
              <CircularProgress
                variant="determinate"
                value={globalState.progress || 0}
              />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </form>
  );
};

export default SearchInput;
