import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useFaqTextContent } from './useFaqTextContent';
// import { Icon1 } from './assets/Icon1';
// import { Icon2 } from './assets/Icon2';
// import { Icon3 } from './assets/Icon3';
// import { Icon4 } from './assets/Icon4';
// import { Icon5 } from './assets/Icon5';
// import { Icon6 } from './assets/Icon6';
// import { Icon7 } from './assets/Icon7';
// import { Icon8 } from './assets/Icon8';
// import { Icon9 } from './assets/Icon9';
// import { Icon10 } from './assets/Icon10';
// import { Icon11 } from './assets/Icon11';
// import { Icon12 } from './assets/Icon12';
// import { Icon13 } from './assets/Icon13';
// import { Icon14 } from './assets/Icon14';
// import { Icon15 } from './assets/Icon15';
// import { Icon16 } from './assets/Icon16';
// import { Icon17 } from './assets/Icon17';
// import { Icon18 } from './assets/Icon18';

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
              {item.title}
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
