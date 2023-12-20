import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useFaqTextContent } from './useFaqTextContent';


import './AccordionFaq.styles.scss';

export const AccordionFaq = () => {
  const faqTextContent = useFaqTextContent();

  return (
    <Accordion
      className="accordionFaq"
      allowZeroExpanded
      preExpanded={[faqTextContent[0].id]}
    >
      {faqTextContent.map((item, index) => (
        <AccordionItem key={index} className="accordionFaq_item" uuid={item.id}>
          <AccordionItemHeading>
            <AccordionItemButton className="accordionFaq_button">
              <span className="accordionFaq_icon">{item.icon}</span>
              <span className="accordionFaq_buttonText">{item.title}</span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordionFaq_panel">
            <div>
              {item.texts.map((el, index) => (
                <p key={index}>{el.text}</p>
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
