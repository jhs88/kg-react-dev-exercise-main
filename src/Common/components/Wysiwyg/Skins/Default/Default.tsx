import React from 'react';
import parse from 'html-react-parser';
import { WysiwygSkinProps } from '../../Wysiwyg.interfaces';

const DefaultSkin: React.FC<WysiwygSkinProps> = ({
  content,
}: WysiwygSkinProps) => {
  if (content) {
    return <>{parse(content)}</>;
  }
  return <></>;
};

export default DefaultSkin;
