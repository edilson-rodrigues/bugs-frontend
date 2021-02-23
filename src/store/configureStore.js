import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer';
import toast from './middleware/toast';
import api from './middleware/api';

const store = () => configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware(),
        /* logger({ destination: "console" }), */
        toast,
        api
    ]
});

export default store;

