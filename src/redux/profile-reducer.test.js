import {render, screen} from "@testing-library/react";
import App from "../App";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 2},
        {id: 2, message: "It's my first post", likeCounts: 27}
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');


    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});