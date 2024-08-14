import { useState } from "react";

/**
 * Tooltip component that displays a tooltip text when the user hovers over it.
 *
 * @component
 * @param {Object} props - The properties of the Tooltip component.
 * @param {ReactNode} props.children - The content of the Tooltip component.
 * @param {string} [props.position="top"] - The position of the tooltip relative to the child component.
 * @param {string} props.tooltipText - The text to be displayed in the tooltip.
 * @return {JSX.Element} The Tooltip component.
 */

const Tooltip = ({ children, position = "top", tooltipText }) => {
  // State to track the visibility of the tooltip
  const [isVisible, setIsVisible] = useState(false);

  // Shows the tooltip by setting the visibility state to true.
  const showTooltip = () => setIsVisible(true);

  // Hides the tooltip by setting the visibility state to false.
  const hideTooltip = () => setIsVisible(false);

  return (
    // Container for the child component and the tooltip
    <div
      className="tooltip-container"
      // Event handlers for mouse enter and leave
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {/* Render the child component */}
      {children}
      {/* Render the tooltip if it is visible */}
      {isVisible && (
        <div className={`tooltip-text tooltip-${position}`}>{tooltipText}</div>
      )}
    </div>
  );
};

export default Tooltip;
