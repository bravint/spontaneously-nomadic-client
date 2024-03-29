import { useContext, useEffect } from 'react';

import { FriendsList } from './dashboard/FriendsList';
import { Map } from './dashboard/Map';
import { Sidebar } from './dashboard/Sidebar';

import { HTTP_AUTH_TYPE, HTTP_METHOD, LOCAL_STORAGE, SERVER_URL, STORE_ACTIONS } from '../utils/config';
import { IFriend } from '../utils/model';
import { StoreContext, initialState } from '../utils/store';

import '../styles/dashboard.css';

export const Dashboard = () => {
    // const { dispatch } = useContext(StoreContext);

    // const handleDispatch = (type: string, payload: IFriend | null | number | string): void => {
    //     dispatch({
    //         type: type,
    //         payload: payload,
    //     });
    // };

    // useEffect(() => {
    //     const jwt = localStorage.getItem(LOCAL_STORAGE.JWT);

    //     const fetchLocations = async () => {
    //         const response = await fetch(SERVER_URL.LOCATION, {
    //             method: HTTP_METHOD.GET,
    //             headers: {
    //                 Authorization: HTTP_AUTH_TYPE.BEARER + jwt,
    //             },
    //         });

    //         const result = await response.json();

    //         if (result.data) {
    //             handleDispatch(STORE_ACTIONS.LOCATIONS, result.data);
    //         }
    //     };

    //     const fetchFriends = async () => {
    //         const response = await fetch(SERVER_URL.FOLLOW, {
    //             method: HTTP_METHOD.GET,
    //             headers: {
    //                 Authorization: HTTP_AUTH_TYPE.BEARER + jwt,
    //             },
    //         });

    //         const result = await response.json();


    //         if (result.data) {
    //             handleDispatch(STORE_ACTIONS.FRIENDS, result.data);
    //         }
    //     };

    //     fetchLocations();
    //     fetchFriends();
    //     handleDispatch(STORE_ACTIONS.FRIEND_ID, initialState.friendId);
    //     handleDispatch(STORE_ACTIONS.FRIEND_NAME, initialState.friendName);
    //     handleDispatch( STORE_ACTIONS.SELECTED_LOCATION, initialState.selectedLocation);
    // }, []);

    return (
        <section className="dashboard">
            {/* <section className="dashboard-main">
                <Map />
                <FriendsList />
            </section>
            <Sidebar /> */}
        </section>
    );
};
