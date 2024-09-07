import { useState, useEffect } from "react";

function useHash() {
  const [currentHash, setCurrentHash] = useState("");
  const [previousHash, setPreviousHash] = useState("DEFAULT");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);

      const handleHashChange = () => {
        // Get the current hash and update the activeSection state
        const hash = window.location.hash; // remove the '#' sign
        setCurrentHash((prevActiveSection) => {
          // Use the previous state to calculate the new state
          setPreviousHash(prevActiveSection);
          return hash; // Update activeSection based on the new hash
        });
        setCurrentHash(hash);
      };

      window.addEventListener("hashchange", handleHashChange);
      setCurrentHash(window.location.hash);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return { currentHash, previousHash };
}

export default useHash;
