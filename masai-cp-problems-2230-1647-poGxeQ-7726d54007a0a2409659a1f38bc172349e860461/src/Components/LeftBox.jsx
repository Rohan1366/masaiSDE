import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div>
      {/* Add input for bill */}
      <input/>
      {/* Add buttons for % of tip */}
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>20%</button>
      <button>Costum</button>
      {/* Add input for no.of peoples */}
      <input/>
    </div>
  );
};

export default LeftBox;
