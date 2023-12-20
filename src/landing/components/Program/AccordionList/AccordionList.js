import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { PROGRAM_LIST } from './AccordionList.constans';

import './AccordionList.styles.scss';

export const AccordionList = () => {
  return (
    <Accordion
      className="accordionList"
      allowZeroExpanded
      preExpanded={[PROGRAM_LIST[0].id]}
    >
      {PROGRAM_LIST.map((item, index) => (
        <AccordionItem
          key={index}
          className="accordionList_item"
          uuid={item.id}
        >
          <AccordionItemHeading>
            <AccordionItemButton className="accordionList_button">
              {`${item.id}. ${item.name}`}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordionList_panel">
            <img src="./images/landingContent/program/test.png" />
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
