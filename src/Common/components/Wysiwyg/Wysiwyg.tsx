import React, { Fragment } from 'react';
import { WysiwygProps } from './Wysiwyg.interfaces';
import { SKINS } from './Skins';

const Wysiwyg: React.FC<WysiwygProps> = ({ skin }) => {
  if (skin) {
    const typeComponent = React.createElement(SKINS[skin], {
      content:
        '<p><img data-src="/tooltip-dark.svg" src="/tooltip-dark.svg" style="width: 100%; max-width: fit-content;" alt="Search icon" class="cld-responsive" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
      styleName: 'text-center',
    });
    return <>{typeComponent}</>;
  }
  return <></>;
};

export default Wysiwyg;
