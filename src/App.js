import React, {useEffect, useState} from 'react';
import './App.scss'
import axios from "axios";
import Group from "./Group";
import Loader from "./Loader";

const App = () => {
    const [test, setTest] = useState([])
    const [loader, setLoader] = useState(false)
    const getTest = async () => {
        try {
            setLoader(true)
            const tests = await axios(`https://63f48a6e2213ed989c44ef9c.mockapi.io/test`)
            const {data} = await tests
            setTest(data)
            setLoader(false)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(test)
    useEffect(() => {
        getTest()
    }, [])
    return (
        <div className="container">
            {loader && <Loader/>}

            <div className="group">
                {
                    test.map(el => <Group el={el}/>)
                }
            </div>
        </div>
    );
};

export default App;