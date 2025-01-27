import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show the button after 300px
      } else {
        setIsVisible(false); // Hide the button otherwise
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "9vh",
            right: "20px",
            background: "orange",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default GoToTop;
