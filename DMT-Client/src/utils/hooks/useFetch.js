import axios from "axios";
import { useEffect, useState } from "react";



export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const results = response.data;
  
      const pjs = results
  
      setData(pjs);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };
  
  
  useEffect(() => {
    fetchData();
  }, []); 
  
console.log("data:",data, "error:",error, "loading:", loading)
  return { loading, error, data };
};
