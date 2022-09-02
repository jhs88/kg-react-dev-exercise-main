export enum SKIN_NAMES {
  DEFAULT_SKIN = 'Default',
  CENTER_ALIGNED_SKIN = 'Center Aligned',
}

export interface WysiwygSkinProps {
  content: string;
  styleName: string;
}

export interface WysiwygProps {
  skin?: SKIN_NAMES;
}
