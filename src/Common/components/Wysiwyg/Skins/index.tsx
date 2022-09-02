import DefaultSkin from './Default/Default';
import CenterAlignedSkin from './CenterAligned/CenterAligned';
import { SKIN_NAMES } from '../Wysiwyg.interfaces';

export const SKINS = {
  [SKIN_NAMES.DEFAULT_SKIN as string]: DefaultSkin,
  [SKIN_NAMES.CENTER_ALIGNED_SKIN as string]: CenterAlignedSkin,
};
export const COMPONENT_SKINS = [SKINS];
