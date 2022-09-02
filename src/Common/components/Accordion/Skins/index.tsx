import DefaultSkin from './Default/Default';
import { AC_SKIN_NAMES } from '../Accordion.interfaces';

export const SKINS = {
  [AC_SKIN_NAMES.DEFAULT_SKIN as string]: DefaultSkin,
};
export const AC_COMPONENT_SKINS = [SKINS];
