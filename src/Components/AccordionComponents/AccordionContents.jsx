import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={`accordion-panel ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <div>{children}</div>
    </Accordion.Content>
  )
);
export default AccordionContent;
