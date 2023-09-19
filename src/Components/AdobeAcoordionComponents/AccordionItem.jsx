import React, { useRef } from "react";
import { FocusRing } from "@react-aria/focus";
import clsx from "clsx";

export default function AccordionItem({ children, ...props }) {
  const domRef = useRef();
  const { value, title, selectedKey, setSelectedKey } = props;

  const isOpen = value === selectedKey;

  const handleClick = () => {
    if (isOpen) {
      // If the item is already open, close it
      setSelectedKey(null);
    } else {
      // Otherwise, open the item
      setSelectedKey(value);
    }
  };
  return (
    <div
      className={clsx("accordion-item", {
        "is-open": isOpen,
      })}
      isOpen={isOpen}
    >
      <h2 className="accordion-item-heading">
        <FocusRing within focusRingClass="focus-ring">
          <button
            onClick={handleClick}
            ref={domRef}
            className={clsx("accordion-item-header")}
          >
            {title}
            <span
              role="img"
              aria-hidden="true"
              aria-label="accordion item indicator"
              className="accordion-item-indicator"
            >
              {isOpen ? "🔽" : "▶️"}️
            </span>
          </button>
        </FocusRing>
      </h2>
      <div className="accordion-item-content">{children}</div>
    </div>
  );
}
