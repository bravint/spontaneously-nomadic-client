import { useState, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';

import { StoreContext } from '../../utils/store';
import { ILocation } from '../../utils/model';
import { HTTP_AUTH_TYPE, HTTP_METHOD, LOCAL_STORAGE, SERVER_URL, STORE_ACTIONS } from '../../utils/config';


export const CreateLocation = (props: any) => {
    const { newLocation, setNewLocation } = props;

    const { dispatch, state } = useContext(StoreContext);

    const { locations } = state;

    const handleDispatch = (type: string, payload: Array<ILocation>) => {
        dispatch({
            type: type,
            payload: payload,
        });
    };

    const initialForm = {
        name: '' as string,
        lat: newLocation.lat as number,
        lng: newLocation.lng as number,
    };

    const initialRating = 0;

    const [form, setForm] = useState(initialForm);
    const [rating, setRating] = useState(initialRating);

    const handleChange = (event: React.SyntheticEvent): void => {
        const target = event.target as HTMLInputElement;

        setForm({ ...form, [target.name]: target.value });
    };

    const handleRatingChange = (rate: number) => setRating(rate);

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const locationToCreate = { ...form, rating: rating };

        const jwt = localStorage.getItem(LOCAL_STORAGE.JWT);

        const response = await fetch(SERVER_URL.LOCATION, {
            method: HTTP_METHOD.POST,
            headers: {
                'Content-Type': 'Application/json',
                Authorization: HTTP_AUTH_TYPE.BEARER + jwt,
            },
            body: JSON.stringify(locationToCreate),
        });

        const result = await response.json();

        if (result.data) {
            handleDispatch(STORE_ACTIONS.LOCATIONS, [
                ...locations,
                result.data,
            ]);
        }

        setNewLocation(null);
    };

    return (
        <div className="create-location">
            <h2 className="create-location-title">Create Location</h2>
            <Rating ratingValue={rating} onClick={handleRatingChange} />
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name of Location"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <button className="create-location-button" type="submit">
                    Add Location
                </button>
            </form>
        </div>
    );
};
