import React from "react";
import { Virtuoso } from "react-virtuoso";

const VirtuosoProvider = ({ children }) => {
  const childArray = React.Children.toArray(children);

  return (
    <Virtuoso
      style={{ height: "100vh", width: "100%" }}
      totalCount={childArray.length}
      itemContent={(index) => (
        <div key={index} style={{ minHeight: "1px" }}>
          {childArray[index]}
        </div>
      )}
    />
  );
};

export default VirtuosoProvider;
