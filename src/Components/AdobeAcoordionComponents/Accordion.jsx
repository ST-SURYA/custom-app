import React, { useRef, useState } from "react";

const Accordion = ({ children, defaultValue }) => {
  const domRef = useRef();
  const [selectedKey, setSelectedKey] = useState(defaultValue || "");

  return (
    <div ref={domRef} className="accordion">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          selectedKey,
          setSelectedKey,
        });
      })}
    </div>
  );
};

export default Accordion;
