
// UI ELEMENT : 

import { UIButton } from "../ui-button/ui-button.js";
import { UICustom } from "../ui-custom/ui-custom.js";
import { UIGroup } from "../ui-group/ui-group.js";
import { UIIconButton } from "../ui-icon-button/ui-icon-button.js";
import { UIIcon } from "../ui-icon/ui-icon.js";
import { UIImage } from "../ui-image/ui-image.js";
import { UILabel } from "../ui-label/ui-label.js";
import { UIPanel } from "../ui-panel/ui-panel.js";
import { UIRouteButton } from "../ui-route-button/ui-route-button.js";

export type UIElement = UIPanel | UIButton | UILabel | UIImage | UIIcon | UIGroup | UIIconButton | UICustom | UIRouteButton;
 