import { useEffect, useState } from "react";

export function useCheckUser() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const checkForUserName = localStorage.getItem("userName");
    if (checkForUserName) {
      setUserName(JSON.parse(checkForUserName));
    }
  }, [setUserName]);

  return userName;
}
