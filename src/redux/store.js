import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 2},
                {id: 2, message: "It's my first post", likeCounts: 27}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Serhiy'},
                {id: 2, name: 'Anastasia'},
                {id: 3, name: 'Oleksandr'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'Svitlana'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Only snowboarding'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Serhiy'},
                {id: 2, name: 'Anastasia'},
                {id: 3, name: 'Oleksandr'}
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;