import React, { useRef } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import "./Accordion.scss";
const AccordionRoot = ({ children, ...props }) => {
  return (
    <RadixAccordion.Root
      className="accordion"
      type="single"
      collapsible
      {...props}
    >
      {children}
    </RadixAccordion.Root>
  );
};

export default AccordionRoot;
