import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const Context = ({ children }) => {
  const [listData, setListData] = useState();
  const [pageData,setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchData , setSearchData] = useState('');
  async function fetchCall(page) {
    setLoading(true);
    try {
      const fetchedData = await fetch(
        `https://reqres.in/api/users?page=${page}`
      );
      const useData = await fetchedData.json();
      setListData(useData);
      setPageData(useData.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  function prevButton() {
    setPage(page - 1);
    fetchCall(page - 1);
  }
  function nextButton() {
    setPage(page + 1);
    fetchCall(page + 1);
  }
  function changeInSearch(event){
    setSearchData(event.target.value);
}
function repopulate(){
    setPageData(listData.data);
}
function serachForData(searchParam){
    const mySearchList = listData.data.filter((searchSort)=>{
        return searchSort.first_name?.toLowerCase() == searchParam.toLowerCase();
    }) 
    setPageData(mySearchList);
}
  const value = {
    listData,
    setListData,
    page,
    setPage,
    fetchCall,
    prevButton,
    nextButton,
    loading,
    setLoading,
    searchData,
    setSearchData,
    changeInSearch,
    pageData,
    setPageData,
    repopulate,
    serachForData
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
