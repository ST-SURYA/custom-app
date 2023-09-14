import React, { useRef } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import "./Accordion.scss";
const AccordionRoot = ({ children, className, ...props }) => {
  return (
    <RadixAccordion.Root
      className={`accordion ${className}`}
      type="single"
      collapsible
      {...props}
    >
      {children}
    </RadixAccordion.Root>
  );
};

export default AccordionRoot;
