import { useEffect, useRef } from "react";
import LandPage from "./LandPage";

export default () => {
  const topRef = useRef(null);

  // useEffect(() => {
  //   console.log(topRef.current);

  //   const topObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.) {
  //         console.log("top");
  //       }
  //     });
  //   });

  //   topObserver.observe(topRef.current);
  // }, []);

  const handleScroll = () => {
    if (topRef.current.getBoundingClientRect().top < 0) {
      console.log("top");
    }
  };

  return (
    <div className="flex flex-col justify-center w-full ">
      <LandPage />
    </div>
  );
};
