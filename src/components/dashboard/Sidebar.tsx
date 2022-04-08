import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TopLocations } from './TopLocations';
import { RecentlyAddedFriends } from './RecentFriends';
import { SidebarFooter } from '../SidebarFooter';

import { StoreContext } from '../../utils/store';
import { LOCAL_PATH, LOCAL_STORAGE, STORE_ACTIONS } from '../../utils/config';

import '../../styles/dashboard.css';

export const DashboardSidebar = () => {
    const { state, dispatch } = useContext(StoreContext);

    const { user } = state;

    const navigate = useNavigate();

    const [showUserOptions, setShowUSerOptions] = useState(false);

    const handleDispatch = (type: string, payload: any) => {
        dispatch({
            type: type,
            payload: payload,
        });
    };

    const handleLogout = () => {
        localStorage.removeItem(LOCAL_STORAGE.JWT);

        handleDispatch(STORE_ACTIONS.USER, null);

        navigate(LOCAL_PATH.ROOT);
    };

    const handleShowOption = () => {
        setShowUSerOptions(!showUserOptions);
    };

    return (
        <section className="sidebar">
            <div className="sidebar-header-container">
                <section className="sidebar-header">
                    <div className="sidebar-header-main">
                        <div>
                            <Link to={LOCAL_PATH.ROOT}>
                                <button className="sidebar-header-button">
                                    Back to Home Page
                                </button>
                            </Link>
                        </div>
                        <div className="sidebar-header-profile">
                            <h1>{user.username}</h1>
                            <img
                                className="sidebar-header-profile-img"
                                src={user.profileImage}
                                alt="user profile"
                                onClick={handleShowOption}
                            />
                        </div>
                    </div>
                    {showUserOptions && (
                        <div className="dashboard-sidebar-header-menu">
                            <Link to="">Edit Profile</Link>
                            <li>
                                <button
                                    className="sidebar-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </div>
                    )}
                </section>
            </div>
            <section className="sidebar-stats">
                <TopLocations />
                <RecentlyAddedFriends />
            </section>
            <SidebarFooter />
        </section>
    );
};