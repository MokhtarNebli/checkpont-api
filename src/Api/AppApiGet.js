import React, { useEffect, useState } from "react";

const AppApiGet = () => {
    const [data, setData] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
        function fetchData() {
            // the function to fetch data from the api
            fetch("https://hn.algolia.com/api/v1/search?query=redux")
                .then(res => res.json()) // when the result comes back with success here is what to do
                .then(res => setData(res.hits))
                .catch(error => setError(error)); // if there is an error here what you have to do.
        }

        fetchData();
    }, []);

    return (
        <div>
            <hr></hr>
            <ul>
                {data.map(course => (
                    <li>
                        <a href={course.url}> {course.title}</a>
                    </li>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
};
export default AppApiGet;