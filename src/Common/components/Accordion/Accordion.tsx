import React, { Fragment } from 'react';
import { AccordionProps } from './Accordion.interfaces';
import { SKINS } from './Skins';

const Accordion: React.FC<AccordionProps> = ({ skin }) => {
  if (skin) {
    const typeComponent = React.createElement(SKINS[skin], {
      header: 'C10 Accordion skin S2 thumbnail',
      subheader: 'Accordion 1.0 | Accordion-s1',
      accHeader: 'Who is eligible for a COVID-19 vaccine booster?',
      accContent:
        "Boosters are currently available for Pfizer recipients, starting 6 months after their second dose, specifically for:<ul><li>People ages 65 years and up</li><li>People 18 and up with underlying health conditions</li><li>People 18 and up who work or live in high-risk settings</li></ul>The FDA is currently reviewing Moderna's request for booster authorization and is expected to provide additional recommendations on boosters soon, including for Johnson & Johnson vaccine recipients.",
    });
    return <>{typeComponent}</>;
  }
  return <></>;
};

export default Accordion;
