import React from 'react';
import { Helmet } from 'react-helmet';

import { AccordionSkinProps } from '../../Accordion.interfaces';
import AccordionItem from './DefaultItem';

const DefaultSkin: React.FC<AccordionSkinProps> = ({
  header,
  subheader,
  items,
}: AccordionSkinProps) => {
  if (header) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/d110da3802.js"
            crossOrigin="anonymous"
          />

          <link rel="stylesheet" href="./css/global.css" />
          <title>Accordion</title>
          <script src="./js/bootstrap.bundle.js" />
        </Helmet>
        <h4 className="container mt-50">{header}</h4>
        <h5 className="container my-50">{subheader}</h5>
        <section>
          <div className="accordionSk2" id="accordionSk2">
            <div className="sectionBody">
              <div className="col-lg-10 mx-auto">
                {Array.from(items).map((item) => (
                  <AccordionItem
                    key={item.id}
                    id={item.id}
                    header={item.header}
                    headerImg={item.headerImg}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <></>;
};

export default DefaultSkin;
