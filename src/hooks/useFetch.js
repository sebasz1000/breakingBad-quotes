import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    quote: "",
    author: "",
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const { quote, author } = !!data && data[0];
        setState({ ...state, quote, author, isLoading: false });
      } catch (e) {
        setState({ ...state, hasError: e });
      }
    };
    setState({ ...state, isLoading: true });
    getData();
  }, [url]);

  return {
    quote: state.quote,
    author: state.author,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
