import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className={`accordion-trigger ${className}`}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="accordion-icon" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export default AccordionTrigger;
