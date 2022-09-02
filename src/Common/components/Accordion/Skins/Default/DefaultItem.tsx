import React from 'react';
import parse from 'html-react-parser';
import { AccordionItemProps } from '../../Accordion.interfaces';

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  header,
  headerImg,
  content,
}) => {
  if (id) {
    return (
      <div className="accordion-item">
        <p className="accordion-header" id="heading-21">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded="true"
            aria-controls={`collapse-${id}`}
          >
            <img src={headerImg} className="thumbnail" alt="" />
            {header}
          </button>
        </p>
        <div
          id={`collapse-${id}`}
          className="accordion-collapse collapse"
          aria-labelledby="heading-21"
          data-bs-parent="#accordionSk2"
        >
          <div className="accordion-body">
            <div className="accordion-text">{parse(content)}</div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default AccordionItem;
