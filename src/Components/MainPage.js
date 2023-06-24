import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";
import "../Styles/MainPage.css";
import { Shimmer } from "./Shimmer";
import { NoResult } from "./NoResult";

export const MainPage = () => {
  const { pageData, loading, setLoading, fetchCall } = useContext(UserContext);
  useEffect(() => {
    fetchCall();
  }, []);
  // console.log(listData);
  
  return (
    pageData.length === 0 ? <NoResult></NoResult> : 
    <div className="container">
      {loading ? (
        <Shimmer></Shimmer>
      ) : (
        <>
          {pageData.map((single) => {
            return (
              <div className="single-main" key={single.id}>
                <div className="page-id">{single.id}</div>
                <img src={single.avatar} className="page-image" />
                <div className="page-name">{single.first_name}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
