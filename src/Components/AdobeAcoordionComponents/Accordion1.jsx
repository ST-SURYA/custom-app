import { useState } from "react";
import Accordion from "./Accordion";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

function AriaAccordion() {
  return (
    <Accordion defaultValue={"ac2"}>
      <AccordionItem title="ac1" value={"ac1"}>
        <div>Ac1</div>
      </AccordionItem>
      <AccordionItem title="ac2" value={"ac2"}>
        <div>Ac2</div>
      </AccordionItem>
    </Accordion>
  );
}

export default AriaAccordion;
