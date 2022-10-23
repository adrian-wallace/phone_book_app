import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    contacts: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeContact = (id)=>{
        dispatch({
            type: 'REMOVE_CONTACT',
            payload: id
        })
    }

    const addContact = (contact)=>{
        dispatch({
            type: 'ADD_CONTACT',
            payload: contact
        })
    }

    const editContact = (contact)=>{
        dispatch({
            type: 'EDIT_CONTACT',
            payload: contact
        })
    }

    const searchContact = (lastName)=>{
        dispatch({
            type: 'SEARCH_CONTACT',
            payload: lastName
        })
    }

    return(
        <GlobalContext.Provider value={{
            contacts: state.contacts,
            removeContact,
            addContact,
            editContact,
            searchContact
        }}>
            {children}
        </GlobalContext.Provider>
    )
}