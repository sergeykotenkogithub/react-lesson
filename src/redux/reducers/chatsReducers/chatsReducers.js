const inialState = {
    chats: [
        {
            id: 1,
            name: 'Vasiliy'
        },
        {
            id: 2,
            name: 'Petr'
        }
    ]
}

export const chatReducers = (state = inialState, action) => {
    switch(action.type) {
 
        default:
            return state
    }
}