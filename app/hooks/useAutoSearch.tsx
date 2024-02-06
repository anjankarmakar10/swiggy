"use client";
import { useCallback, useEffect, useState } from "react";
import AutoSearchData from "../models/AutoSearchData";
import debounce from "../lib/debounce";
import { API_KEY, BASE_URL } from "@/lib/constants";

const useAutoSearch = (query: string) => {
  const [data, setData] = useState<AutoSearchData[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    debounce(async (query: string, signal: AbortSignal) => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}/recipes/autocomplete?number=10&query=${query}&apiKey=${API_KEY}`,
          { signal }
        );
        const data: AutoSearchData[] = await res.json();
        setIsLoading(false);
        setData(data);
      } catch (error) {
        if (error === "AbortError") setError("Signal Aborted");
      }
    }, 1),
    []
  );

  useEffect(() => {
    if (!query) {
      setData([]);
      setError("");
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(query, signal);

    return () => {
      controller.abort();
    };
  }, [query, fetchData]);

  return { isLoading, error, data };
};
export default useAutoSearch;
