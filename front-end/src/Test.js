import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        getData().then((d) => setData(d));
    }, []);

    return (
        <h1>{data}</h1>
    );
}

const getData = async () => {
    const date = await axios.get('http://localhost:3030/data');
    console.log(date);
    return date.data;
}

export default Test;