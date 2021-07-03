import React from 'react';
import globalHook from 'use-global-hook';
import * as actions from '../store/actions';

const initialState = {
    response: null,
    loading: false,
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
