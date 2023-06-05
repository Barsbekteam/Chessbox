import {configureStore} from "@reduxjs/toolkit";
import testReduce from './testReduce'
const store = configureStore({

    reducer: {
        main: testReduce
    }
})

export default store