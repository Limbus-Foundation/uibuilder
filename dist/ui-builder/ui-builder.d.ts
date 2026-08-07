import { UIBody } from "../ui-body/ui-body.js";
import { UIHead } from './../ui-head/ui-head.js';
import { UIEvent } from './../ui-event/ui-event.js';
import { IUIButton, UIButton } from "../ui-button/ui-button.js";
import { IUICustom, UICustom } from "../ui-custom/ui-custom.js";
import { IUIGroup, UIGroup } from '../ui-group/ui-group.js';
import { UIHtml } from "../ui-html/ui-html.js";
import { IUIcon, UIIcon } from "../ui-icon/ui-icon.js";
import { IUIIconButton, UIIconButton } from "../ui-icon-button/ui-icon-button.js";
import { IUIImage, UIImage } from "../ui-image/ui-image.js";
import { UILabel, IUILabel } from "../ui-label/ui-label.js";
import { IUIPanel, UIPanel } from "../ui-panel/ui-panel.js";
import { IUISlider, UISlider } from './../ui-slider/ui-slider.js';
import { IUITextField, UITextField } from './../ui-text-field/ui-text-field.js';
import { UIElement } from "../ui-element/ui-element.js";
/**
 * ### UIBuilder
 *
 * Classe fabril (*Factory*) estática responsável pela criação rápida e centralizada
 * de componentes de interface visual e acesso aos utilitários globais de DOM/Eventos.
 *
 * @example
 * ```ts
 * const button = UIBuilder.button({ label: "Enviar" });
 * ```
 *
 * @see {@link UIButton}
 * @see {@link UITextField}
 *
 * @author Limbus Foundation OSG.
 * @version 1.0.0
 * @license MIT
 */
export declare class UIBuilder {
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
    static button: (option: IUIButton) => UIButton;
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
    static custom: (option: IUICustom) => UICustom;
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
    static group: (option: IUIGroup) => UIGroup;
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
    static icon: (option: IUIcon) => UIIcon;
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
    static iconButton: (option: IUIIconButton) => UIIconButton;
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
    static image: (option: IUIImage) => UIImage;
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
    static label: (option: IUILabel) => UILabel;
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
    static panel: (option: IUIPanel) => UIPanel;
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
    static slider: (option: IUISlider) => UISlider;
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
    static textField: (option: IUITextField) => UITextField;
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
    static event: (element: UIElement) => UIEvent;
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
    static body: () => typeof UIBody;
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
    static head: () => typeof UIHead;
    /**
     *
     * #### UIHtml
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
    static html: () => typeof UIHtml;
}
