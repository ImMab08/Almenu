import { useState, useEffect } from "react";

const useLoading = () => {
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading;
}

export default useLoading;