import React, { useEffect, useState } from 'react';

function List() {
    const [ring, setRing] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/ring')
        .then((res) => res.json())
        .then((data) => {
            setRing(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

  return (
    <React.Fragment>
        <h1 class="production-h1">List</h1>
        <ul>
            {ring?.map((halo) => (
                <div key={halo.id}>
                    <h1 class="production-h1">{halo.installation}</h1>
                    <h1 class="production-h1">{halo.range}</h1>
                    <h1 class="production-h1">{halo.array}</h1>
                    <h1 class="production-h1">{halo.operational}</h1>
                </div>
            ))}
        </ul>
    </React.Fragment>
  );
}

export default List;