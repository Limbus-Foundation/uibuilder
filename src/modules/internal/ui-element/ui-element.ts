
// UI ELEMENT : 

import { UIButton } from "../../element/ui-button/ui-button.js";
import { UICustom } from "../../element/ui-custom/ui-custom.js";
import { UIGroup } from "../../element/ui-group/ui-group.js";
import { UIIconButton } from "../../deprecated/ui-icon-button/ui-icon-button.js";
import { UIIcon } from "../../element/ui-icon/ui-icon.js";
import { UIImage } from "../../element/ui-image/ui-image.js";
import { UILabel } from "../../element/ui-label/ui-label.js";
import { UIPanel } from "../../deprecated/ui-panel/ui-panel.js";
import { UIAnchor } from "../../element/ui-anchor/ui-anchor.js";
import { UIRouteButton } from "../../deprecated/ui-route-button/ui-route-button.js";
import { UITextField } from "../../deprecated/ui-text-field/ui-text-field.js";
import { UIField } from "../../element/ui-field/ui-field.js";

export type UIElement = UIPanel | UIButton | UILabel | UIImage | UIIcon | UIGroup | UIIconButton | UICustom | UIRouteButton | UIAnchor | UITextField | UIField;
 