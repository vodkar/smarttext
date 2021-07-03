import {createStyles, InputAdornment, InputLabel, makeStyles, OutlinedInput, Theme} from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import React from 'react';
import useGlobal from "../../store";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
        // .Mui-focused: {}
    }),
);

// interface State {
//     search: string;
//
// }

const SearchInput = (setResponse) => {
    const [,globalActions] = useGlobal();

    const classes = useStyles();

    const [values, setValues] = React.useState({
        response: '',
        post: '',
        responseToPost: '',
    });
    console.log(values)
    const handleSubmit = async (e) => {
        globalActions.actions.loadingActions(true)
        e.preventDefault();
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: values.post}),
        });
        const body = await response.json();
        setValues({responseToPost: body});
        globalActions.actions.responseActions(body)
        globalActions.actions.loadingActions(false)

    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <form onSubmit={handleSubmit}  className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Поиск</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.search}
                    onChange={handleChange('post')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    labelWidth={60}
                />
            </form>
    );
};

export default SearchInput;
