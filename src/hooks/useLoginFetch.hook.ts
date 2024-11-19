import { useState } from "react";
import { payload } from "~/models";

export const useLogin = <T>() => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<T | undefined>(undefined as T);
  const [error, setError] = useState(null);

  const login = async (url: string, payload: payload) => {
    try {
      setLoading(true);
      setUserData(undefined);
      setError(null);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      setUserData(json);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, userData, error, login };
};
