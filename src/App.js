import React, { useEffect, useState } from "react";

function App() {
  const [isSmall, setIsSmall] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(100);

  const handleClick = () => {
    setIsSmall((prev) => !prev);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setButtonWidth((prev) => {
        if (!isSmall && prev > 100) {
          return prev - 50;
        } else if (isSmall && prev < 250) {
          return prev + 50;
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isSmall]);

  return (
    <div className="flex justify-center mt-[30px] w-full">
      <GrowingButton
        handleClick={handleClick}
        isSmall={isSmall}
        buttonWidth={buttonWidth}
      />
    </div>
  );
}

const GrowingButton = ({ handleClick, isSmall, buttonWidth }) => {
  return (
    <button
      onClick={handleClick}
      className={`border-2  py-2   bg-blue-400`}
      style={{ width: buttonWidth }}
    >
      {isSmall ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
