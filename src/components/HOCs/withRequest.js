import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import requestReducer, { REQUEST_STATUS } from '../../reducers/request';

import {
    PUT_FAILURE,
    PUT_SUCCESS,
    GET_ALL_FAILURE,
    GET_ALL_SUCCESS,
} from '../../actions/request';

const withRequest = (baseUrl, routeName) => (Component) => () => {

    const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
        status: REQUEST_STATUS.LOADING,
        records: [],
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${routeName}`);

                dispatch({
                    type: GET_ALL_SUCCESS,
                    records: response.data,
                });
            } catch (e) {
                console.log('Loading data error', e);

                dispatch({
                    type: GET_ALL_FAILURE,
                    error: e,
                });
            }
        };
        fetchData();
    }, [baseUrl, routeName]);

    const props = {
        records,
        status,
        error,
        put: async (record) => {
            try {
                await axios.put(`${baseUrl}/${routeName}/${record.id}`, record);
                dispatch({
                    type: PUT_SUCCESS,
                    record: record,
                });
            } catch (e) {
                dispatch({
                    type: PUT_FAILURE,
                    error: e,
                });
            }
         },
    };
    return <Component {...props}></Component>;
};

export default withRequest;