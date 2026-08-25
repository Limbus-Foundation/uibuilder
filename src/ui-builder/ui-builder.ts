
// (c) 2026 Rhyan Eduardo. MIT 

import { UIBody } from "../module/ui-body/ui-body.js";
import { UIHead } from '../module/ui-head/ui-head.js';
import { UIEvent } from '../module/ui-event/ui-event.js';
import { IUIButton, UIButton } from "../module/ui-button/ui-button.js";
import { IUICustom, UICustom } from "../module/ui-custom/ui-custom.js";
import { IUIGroup, UIGroup } from '../module/ui-group/ui-group.js';
import { UIHtml } from "../module/ui-html/ui-html.js";
import { IUIcon, UIIcon } from "../module/ui-icon/ui-icon.js";
import { IUIIconButton, UIIconButton } from "../module/ui-icon-button/ui-icon-button.js";
import { IUIImage, UIImage } from "../module/ui-image/ui-image.js";
import { UILabel, IUILabel } from "../module/ui-label/ui-label.js";
import { IUIPanel, UIPanel } from "../module/ui-panel/ui-panel.js";
import { IUISlider, UISlider } from '../module/ui-slider/ui-slider.js';
import { IUITextField, UITextField } from '../module/ui-text-field/ui-text-field.js';
import { UIElement } from "../module/ui-element/ui-element.js";
import { UIComponent } from "../module/ui-component/ui-component.js";
import { UIBlend } from "../module/ui-blend/ui-blend.js";

/**
 * ### UIBuilder 
 *
 * HTMLElement Wrapper
 *
 * @example
 * ```ts
 * const button = UIBuilder.button({ label: "Enviar" });
 * ```
 * @author Limbus Foundation OSG. 
 * @license MIT
 */
export class UIBuilder {

    /**
     * 
     * #### UIBuilder.UIButton
     * 
     * Wrapper class for creating and managing an `HtmlButtonElement `.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * @param option.text - Button label
     * 
     * @see {@link UIButton.id}
     * @see {@link UIButton.className}
     * @see {@link UIButton.classList}
     * @see {@link UIButton.attribute}
     * @see {@link UIButton.removeAttribute}
     * @see {@link UIButton.removeClassName}
     * @see {@link UIButton.remove}
     * @see {@link UIButton.append}
     * @see {@link UIButton.label}
     *
     * @example
     * ```ts
     * const btn = UIBuilder.button({ text : "label" });
     * ```
     * @public
     */
    public static button = (option: IUIButton): UIButton => new UIButton(option);

    /**
     * 
     * #### UIBuilder.UICustom
     * 
     * Wrapper class for creating and managing an `HTMLElement `.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * @param option.tag - HTML tag name
     * 
     * @see {@link UICustom.id}
     * @see {@link UICustom.className}
     * @see {@link UICustom.classList}
     * @see {@link UICustom.attribute}
     * @see {@link UICustom.removeAttribute}
     * @see {@link UICustom.removeClassName}
     * @see {@link UICustom.remove}
     * @see {@link UICustom.append}
     *
     * @example
     * ```ts
     * const element = UIBuilder.custom({ tag : "div" });
     * ```
     * @public
     */
    public static custom = (option: IUICustom): UICustom => new UICustom(option);

    /**
     * 
     * #### UIBuilder.UIGroup
     * 
     * Wrapper class for creating and managing an `HTMLDivElement `.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * 
     * @see {@link UIGroup.id}
     * @see {@link UIGroup.className}
     * @see {@link UIGroup.classList}
     * @see {@link UIGroup.attribute}
     * @see {@link UIGroup.removeAttribute}
     * @see {@link UIGroup.removeClassName}
     * @see {@link UIGroup.remove}
     * @see {@link UIGroup.append}
     *
     * @example
     * ```ts
     * const group = UIBuilder.group({ className : "class_name" });
     * ```
     * @public
     */
    public static group = (option: IUIGroup): UIGroup => new UIGroup(option);

    /**
     * 
     * #### UIBuilder.UIIcon
     * 
     * Wrapper class for creating and managing an `HTMLElement -> <i>`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * 
     * @see {@link UIIcon.id}
     * @see {@link UIIcon.className}
     * @see {@link UIIcon.classList}
     * @see {@link UIIcon.attribute}
     * @see {@link UIIcon.removeAttribute}
     * @see {@link UIIcon.removeClassName}
     * @see {@link UIIcon.remove}
     * @see {@link UIIcon.append}
     *
     * @example
     * ```ts
     * const icon = UIBuilder.icon({ className : "icon_class_name" });
     * ```
     * @public
     */
    public static icon = (option: IUIcon): UIIcon => new UIIcon(option);

    /**
     * 
     * #### UIBuilder.UIIconButton
     * 
     * Wrapper class for creating and managing an `HtmlButtonElment && HtmlElement -> <i>`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * @param option.iconClassName - Button icon class string.
     * 
     * @see {@link UIIconButton.id} - set a id to the element
     * @see {@link UIIconButton.className}
     * @see {@link UIIconButton.classList}
     * @see {@link UIIconButton.attribute}
     * @see {@link UIIconButton.removeAttribute}
     * @see {@link UIIconButton.removeClassName}
     * @see {@link UIIconButton.remove}
     * @see {@link UIIconButton.append}
     * @see {@link UIIconButton.icon}
     *
     * @example
     * ```ts
     * const buttonIcon = UIBuilder.iconButton({ className : "icon_class_name" });
     * ```
     * @public
     */
    public static iconButton = (option: IUIIconButton): UIIconButton => new UIIconButton(option);

    /**
     * 
     * #### UIBuilder.UIImage
     * 
     * Wrapper class for creating and managing an `HtmlImageElement`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * @param option.src - Image path.
     * 
     * @see {@link UIImage.id}
     * @see {@link UIImage.className}
     * @see {@link UIImage.classList}
     * @see {@link UIImage.attribute}
     * @see {@link UIImage.removeAttribute}
     * @see {@link UIImage.removeClassName}
     * @see {@link UIImage.clear}
     * @see {@link UIImage.src}
     *
     * @example
     * ```ts
     * const image = UIBuilder.image({ src : "../../img.png" });
     * ```
     * @public
     */
    public static image = (option: IUIImage): UIImage => new UIImage(option);

    /**
     * 
     * #### UIBuilder.UILabel
     * 
     * Wrapper class for creating and managing an `HTMLSpanElement`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * @param option.label - label text.
     * 
     * @see {@link UILabel.id}
     * @see {@link UILabel.className}
     * @see {@link UILabel.classList}
     * @see {@link UILabel.attribute}
     * @see {@link UILabel.removeAttribute}
     * @see {@link UILabel.removeClassName}
     * @see {@link UILabel.clear}
     *
     * @example
     * ```ts
     * const label = UIBuilder.label({ label : "hello_world" });
     * ```
     * @public
     */
    public static label = (option: IUILabel): UILabel => new UILabel(option);

    /**
     * 
     * #### UIBuilder.UIPanel
     * 
     * Wrapper class for creating and managing an `HTMLDivElement `.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     *
     * @see {@link UIPanel.id}
     * @see {@link UIPanel.className}
     * @see {@link UIPanel.classList}
     * @see {@link UIPanel.attribute}
     * @see {@link UIPanel.removeAttribute}
     * @see {@link UIPanel.removeClassName}
     * @see {@link UIPanel.clear}
     * 
     * @example
     * ```ts
     * const panel = UIBuilder.panel({ className : "class_name" });
     * ```
     * @public
     */
    public static panel = (option: IUIPanel): UIPanel => new UIPanel(option);

    /**
     * Wrapper class for creating and managing an `HTMLInputElement`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.value - Default input value.
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * 
     * @see {@link UISlider.id}
     * @see {@link UISlider.className}
     * @see {@link UISlider.classList}
     * @see {@link UISlider.attribute}
     * @see {@link UISlider.removeAttribute}
     * @see {@link UISlider.removeClassName}
     * @see {@link UISlider.value}
     * @see {@link UISlider.placeholder}
     * @see {@link UISlider.disable}
     * @see {@link UISlider.clear}
     *
     * @example
     * ```ts
     * const slide = UIBuilder.slider({ value: "id_string", className: "class_string" });
     * ```
     */
    public static slider = (option: IUISlider): UISlider => new UISlider(option);

    /**
     * 
     * ### UIBuilder.UITextField
     * 
     * Wrapper class for creating and managing an `HTMLInputElement`.
     *
     * @param option - Configuration object to initialize the input element.
     * @param option.id - Unique ID for the HTML element.
     * @param option.placeholder - Placeholder text.
     * @param option.value - Default input value.
     * @param option.type - Input type (`text`, `password`, or `number`).
     * @param option.className - Single class name string.
     * @param option.classList - List of CSS class names.
     * @param option.attribute - Custom HTML attributes list.
     * 
     * @see {@link UITextField.id}
     * @see {@link UITextField.className}
     * @see {@link UITextField.classList}
     * @see {@link UITextField.attribute}
     * @see {@link UITextField.removeAttribute}
     * @see {@link UITextField.removeClassName}
     * @see {@link UITextField.value}
     * @see {@link UITextField.placeholder}
     * @see {@link UITextField.disable}
     * @see {@link UITextField.clear}
     *
     * @example
     * ```ts
     * const password = UIBuilder.textField({ value: "value_name", type: "password"});
     * ```
     */
    public static textField = (option: IUITextField): UITextField => new UITextField(option);

    /**
     * #### UIEvent
     * 
     * Cria uma instância gerenciadora de eventos vinculada a um elemento específico.
     *
     * @param element - O elemento do UIBuilder que receberá os eventos.
     * @returns `UIEvent`
     *
     * @see {@link UIEvent}
     * @public
     * @static
     */
    public static event = (element: UIElement): UIEvent => new UIEvent(element);

    /**
     * 
     * #### UIComponent
     * 
     * Return a reference to the `UIComponent`.
     * 
     * @param props
     * 
     * @returns `UIComponent`.
     *
     * @see {@link UIComponent}
     * @public
     */
    public static component = <T>(build: (...props: any[]) => T): (...props: any[]) => T => build;

    /**
     * 
     * #### UIBlend
     * 
     * Return a reference to the `UIBlend`.
     * 
     * @param UIElementList
     * 
     * @returns `UIElementList`.
     *
     * @see {@link UIBlend}
     * @public
     */
    public static blend = (...elements: UIElement[]): UIBlend => new UIBlend(...elements)

    /**
     * 
     * #### UIBody
     * 
     * Return a reference to the `<body>` via `UIBody`.
     *
     * @returns `UIBody`.
     *
     * @see {@link UIBody}
     * @see {@link UIBody.append}
     * @see {@link UIBody.prepend}
     * @public
     * @static
     */
    public static body = (): typeof UIBody => UIBody;

    /**
     * 
     * #### UIBody
     * 
     * Return a reference to the `<head>` via `UIHead`.
     *
     * @returns `UIHead`.
     *
     * @see {@link UIBody}
     * @see {@link UIHead.append}
     * @public
     * @static
     */
    public static head = (): typeof UIHead => UIHead;

    /**
     * 
     * ####  UIHtml
     * 
     * Return a reference to the `UIHtml`.  
     *
     * @returns `UIHtml`.
     * 
     * @see {@link UIHtml}
     * @see {@link UIHtml.parseUIElement} - convert an UIBuilder Element in a HTMLElement
     * @public
     * @static
     */
    public static html = {
        parseHTMLElement : UIHtml.parseUIElement
    };


};
























