import React, { useState, useEffect } from "react";
import axios from "axios";

/* export default function UseFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://localhost:8000/api/markers/?format=json"
      );

      setData(result.data);

    };

    fetchData();
  }, []);

  return { data };
} */

const fetchURL = "http://127.0.0.1:8000/api/markers/?format=json"
const UseFetch = () => {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (<div> {data?.map((item) =>
    <ul>
      <li>{item.name}</li>
      <li>{item.address}</li>

    </ul>
  )}</div>)
}

export default UseFetch;