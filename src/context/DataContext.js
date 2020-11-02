import React, {createContext} from 'react';
import useRequest from '../hooks/useRequest';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const state = useRequest();

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };