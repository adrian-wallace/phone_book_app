export default (state, action) => {
    switch(action.type){
        case 'REMOVE_CONTACT':
            return {
                contacts: state.contacts.filter(contact => {
                    return contact.id !== action.payload
                })
            }

        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            }

        case 'EDIT_CONTACT':
            const updatedContact = action.payload
            const updatedContacts = state.contacts.map(contact =>{
                if(contact.id === updatedContact.id){
                    return updatedContact;
                }
                return contact;
            })
            return {
                contacts: updatedContacts
            }

        case 'SEARCH_CONTACT':
            const searchString = action.payload;
            console.log(searchString);

            return {
                contacts: state.contacts.filter(contact => {
                    return contact.lastName.includes(searchString) || searchString ===""
                })
            }

        default:
            return state
    }
}