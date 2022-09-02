export enum AC_SKIN_NAMES {
  DEFAULT_SKIN = 'Default',
}

export interface AccordionSkinProps {
  header: string;
  subheader: string;
  items: AccordionItemProps[];
}

export interface AccordionItemProps {
  id: number;
  header?: string;
  headerImg?: string;
  content: string;
}

export interface AccordionProps {
  skin?: AC_SKIN_NAMES;
}
