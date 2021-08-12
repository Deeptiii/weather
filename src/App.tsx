import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertAction";
import { setError } from "./store/actions/weatherActions";

const App: FC = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alert = useSelector((state: RootState) => state.alert.message);
    console.log(error);
    return (
        <div className='has-text-centered'>
            <Search title='Enter city name and press search button' />
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                weatherData && <Weather data={weatherData} />
            )}

            {alert && (
                <Alert message={alert} onClose={() => dispatch(setAlert(""))} />
            )}
            {error && (
                <Alert message={error} onClose={() => dispatch(setError())} />
            )}
        </div>
    );
};

export default App;
