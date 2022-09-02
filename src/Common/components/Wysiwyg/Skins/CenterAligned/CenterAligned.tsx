import React from 'react';
import parse from 'html-react-parser';
import { WysiwygSkinProps } from '../../Wysiwyg.interfaces';

const CenterAlignedSkin: React.FC<WysiwygSkinProps> = ({
  content,
  styleName,
}: WysiwygSkinProps) => {
  if (content) {
    return (
      <div className={`container text-center ${styleName}`}>
        {parse(content)}
      </div>
    );
  }
  return <></>;
};

export default CenterAlignedSkin;
