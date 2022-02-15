/**
 * Title: user list
 * description: user list and infinite scroll data
 * name: Nure Alam
 * date: 15/2/2022
 */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Home = () => {
  const [getData, setGetData] = useState([]);
  const [limit, setLimit] = useState(7);

  // user list
  useEffect(() => {
    Axios.get(`http://localhost:5000/user?limit=${limit}`).then(({ data }) =>
      setGetData(data.result)
    );
  }, [limit]);

  // page limit
  const fetchDataMore = () => {
    setTimeout(() => {
      setLimit(limit + 3);
    }, 1000);
  };

  return (
    <section>
      <div className="container">
        <div style={{ marginBottom: 25 }}>
          <Link to={"/create"} style={{ color: "red" }}>
            Create
          </Link>
        </div>

        <InfiniteScroll
          dataLength={getData.length}
          next={fetchDataMore}
          hasMore={true}
          loader={limit === getData.length ? <h4>Loading...</h4> : ""}
        >
          <div className="">
            {getData.map((data, index) => (
              <div className="card" key={index + 1}>
                <h2>Title: {data.calculateTitle}</h2>
                <p>Calculate: {data.calculateNumber}</p>
                <p>File: {data.filePath}</p>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Home;
