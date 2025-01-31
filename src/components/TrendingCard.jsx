import React from "react";

const TrendingCard = ({ numberImage, posterPath }) => {
  return (
    <div className="flex-shrink-0 w-96 h-64 bg-black-100 rounded-lg shadow-md flex hover:bg-slate-900">
      <div className="w-1/2 flex items-center justify-center bg-black-300">
        <img src={numberImage} alt="ars" />
      </div>
      <div className="w-1/2 cursor-pointer">
        <img
          src={posterPath}
          alt="rie"
          className="h-full w-full object-cover rounded-r-lg"
        />
      </div>
    </div> 
  );
};

export default TrendingCard;
