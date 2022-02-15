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
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    Axios.get(`http://localhost:5000/user`).then(({ data }) =>
      setGetData(data.result)
    );
  }, [limit]);

  const fetchDataMore = () => {
    setTimeout(() => {
      setLimit(limit + 10);
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
          <div className="flexData">
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
