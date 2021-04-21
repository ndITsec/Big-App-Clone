import React, { createContext, useContext, useReducer } from 'react';

// Preparing our Data Layer

export const StateContext = createContext ();

// Wrap the app and provide the Data Layer

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
    </StateContext.Provider>
);

// Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);