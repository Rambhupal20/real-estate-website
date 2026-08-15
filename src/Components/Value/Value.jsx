import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="flexCenter v-left">
          <div className="image-container">
            <img src="./value.png" alt="Our values" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br className="desktop-break" />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <CustomAccordionItem key={i} item={item} uuid={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

// Sub-component to safely manage className based on expansion state
const CustomAccordionItem = ({ item, uuid }) => {
  const [className, setClassName] = useState(null);

  return (
    <AccordionItem className={`accordionItem ${className}`} uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton className="flexCenter accordionButton">
          <AccordionItemState>
            {({ expanded }) => {
              if (expanded && className !== "expanded") {
                setClassName("expanded");
              } else if (!expanded && className !== "collapsed") {
                setClassName("collapsed");
              }
              return null;
            }}
          </AccordionItemState>

          <div className="flexCenter icon">{item.icon}</div>
          <span className="primaryText accordion-title">{item.heading}</span>
          <div className="flexCenter icon arrow-icon">
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel className="accordionPanel">
        <p className="secondaryText">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};