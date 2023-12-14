import React, { useState } from "react";

const Header = () => {
  const [isGreen, setGreen] = useState(false);
  const [isBlue, setBlue] = useState(false);
  const handleTitleClick = () => {
    setGreen((prev) => !prev);
  };

  const handleSubTitleClick = () => {
    setBlue((prev) => !prev);
  };

  return (
    <>
      <h2 className={isGreen ? "green" : ""} onClick={handleTitleClick}>
        Tytarenko Danylo Olehovych
      </h2>
      <p className={isBlue ? "blue" : ""} onClick={handleSubTitleClick}>
        07.11.2003, Cherkasy
      </p>
    </>
  );
};

export default Header;
