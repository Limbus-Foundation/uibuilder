<img width="100%" alt="html-bake-repo-banner (1)" src="https://github.com/user-attachments/assets/6b504859-2a1c-4bd8-abd1-00ff84aacef3" />

# UIBuilder

HTML Element Wrapper for JavaScript / TypeScript.

---

# API

| Method | Param | Description |
| --- | --- | --- |
| `button()` | `option: IUIButton` | Wrapper class for creating and managing an `HTMLButtonElement`. |
| `custom()` | `option: IUICustom` | Wrapper class for creating and managing a custom `HTMLElement`. |
| `group()` | `option: IUIGroup` | Wrapper class for creating and managing an `HTMLDivElement`. |
| `icon()` | `option: UIIcon` | Wrapper class for creating and managing an `HTMLElement` (`<i>`). |
| `iconButton()` | `option: IUIIconButton` | Wrapper class for creating and managing an `HTMLButtonElement` with an `HTMLElement` (`<i>`). |
| `image()` | `option: IUIImage` | Wrapper class for creating and managing an `HTMLImageElement`. |
| `label()` | `option: IUILabel` | Wrapper class for creating and managing an `HTMLSpanElement`. |
| `panel()` | `option: IUIPanel` | Wrapper class for creating and managing an `HTMLDivElement`. |
| `slider()` | `option: IUISlider` | Wrapper class for creating and managing an `HTMLInputElement` (range/slider). |
| `textField()` | `option: IUITextField` | Wrapper class for creating and managing an `HTMLInputElement` (`text`, `password`, `number`). |
| `event()` | `element: UIElement` | Creates an event manager instance (`UIEvent`) bound to a specific element. |
| `body()` | `{void}` | Return a reference to the `<body>` via `UIBody`. |
| `head()` | `{void}` | Return a reference to the `<head>` via `UIHead`. |
| `html()` | `{void}` | Return a reference to `UIHtml` utility helpers. |

---

# USAGE

### _index.html_

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UIBuilder Example</title>
</head>
<body>
    <script type="module" src="./index.js"></script>
</body>
</html>
```

### _index.ts / index.js_

```typescript
import { UIBuilder } from "../dist/ui-builder/ui-builder.js";
import { UIHtml } from "../dist/ui-html/ui-html.js";

// Instantiating components
const button = UIBuilder.button({ text: "Click Here" });
const label = UIBuilder.label({ label: "Value: 50" });
const range = UIBuilder.custom({ tag: "input", attribute: { type: "range", min: 0, max: 100, value: 50 } });

//  Body appending elements
const body = UIBuilder.body();
body.append(button);
body.append(label);
body.append(range);

// Managing events bound to elements
UIBuilder.event(button).add("click", () => document.body.style.background = "#1a1a1a");

UIBuilder.event(range).add("input", () => label.label(UIHtml.parseUIElement(range).value));
```

---

# Event Management (`UIEvent`)

The `UIBuilder.event()` method receives the element as a parameter and allows chaining multiple event listeners fluently:

```typescript
UIBuilder.event(button).add("click", (e) => console.log("Button clicked!", e))
UIBuilder.event(button).add("mouseenter", () => console.log("Mouse entered the button"));
```

---

# License ( MIT )

Copyright (c) 2026 Limbus Foundation OSO & Community <br>
Copyright (c) 2026 Rhyan Eduardo Ferreira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
