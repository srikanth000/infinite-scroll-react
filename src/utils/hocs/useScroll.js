import { useState, useEffect } from 'react'

const useScroll = () => {
  const [endOfPage, setEndOfPage] = useState(false)

  useEffect(() => {
    function handleScroll(e) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setEndOfPage(scrollTop+clientHeight >= scrollHeight)
    }
    //listener for scroll events
    window.addEventListener("scroll", handleScroll);
    // handleScroll();
    //cleaning up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { endOfPage }
}

export default useScroll;