import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { Accordion } from "./index";
const AccordionItem = ({ children, ...props }) => (
  <RadixAccordion.Item {...props}>{children}</RadixAccordion.Item>
);
export default AccordionItem;
