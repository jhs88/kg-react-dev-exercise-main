export enum AC_SKIN_NAMES {
  DEFAULT_SKIN = 'Default',
}

export interface AccordionSkinProps {
  header: string;
  subheader: string;
  accHeader: string;
  accContent: string;
}

export interface AccordionProps {
  skin?: AC_SKIN_NAMES;
}
