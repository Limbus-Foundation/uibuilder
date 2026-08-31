<img width="100%" alt="html-bake-repo-banner (1)" src="https://github.com/user-attachments/assets/6b504859-2a1c-4bd8-abd1-00ff84aacef3" />

# UIBuilder

HTML Element Wrapper for JavaScript / TypeScript.

UIBuilder provides a direct API for creating, manipulating and composing HTML elements without requiring a virtual DOM or a component rendering system.

---

# API

| Method         | Param                           | Description                                          |
| -------------- | ------------------------------- | ---------------------------------------------------- |
| `button()`     | `option: IUIButton`             | Creates and returns a `UIButton`.                    |
| `custom()`     | `option: IUICustom`             | Creates and returns a `UICustom`.                    |
| `group()`      | `option: IUIGroup`              | Creates and returns a `UIGroup`.                     |
| `icon()`       | `option: IUIcon`                | Creates and returns a `UIIcon` (`<i>`).              |
| `iconButton()` | `option: IUIIconButton`         | Creates and returns a `UIIconButton`.                |
| `image()`      | `option: IUIImage`              | Creates and returns a `UIImage`.                     |
| `label()`      | `option: IUILabel`              | Creates and returns a `UILabel`.                     |
| `panel()`      | `option: IUIPanel`              | Creates and returns a `UIPanel`.                     |
| `slider()`     | `option: IUISlider`             | Creates and returns a `UISlider`.                    |
| `textField()`  | `option: IUITextField`          | Creates and returns a `UITextField`.                 |
| `event()`      | `element: UIElement`            | Creates a `UIEvent` manager for an element.          |
| `component()`  | `build, self`                   | Creates a reusable UI component with state support.  |
| `blend()`      | `...elements: UIElement[]`      | Creates a `UIBlend` containing multiple UI elements. |
| `style()`      | `properties: UIStyleProperties` | Creates a reusable `UIStyle`.                        |
| `body`         | —                               | Provides access to `<body>` operations.              |
| `head`         | —                               | Provides access to `<head>` operations.              |
| `html`         | —                               | Provides HTML utility methods.                       |
| `router`       | —                               | Provides client-side routing operations.             |
| `store`        | —                               | Provides state store creation.                       |
| `watcher`      | —                               | Provides value and store observation.                |

---

# Elements

UIBuilder elements are wrapper instances around native HTML elements.

```typescript
const button = UIBuilder.button({
    label: "Click Here"
});

button.label("Hello World");
button.className("primary");
button.style({
    margin: "10px"
});
```

Elements expose their own methods directly, while `UIBuilder` provides the factory methods used to create them.

---

# Rendering

Elements can be rendered directly into the document body:

```typescript
const button = UIBuilder.button({
    label: "Click Here"
});

UIBuilder.body.render(button);
```

Multiple elements can be grouped using `UIBuilder.blend()`:

```typescript
const label = UIBuilder.label({
    label: "Hello"
});

const button = UIBuilder.button({
    label: "Click"
});

const content = UIBuilder.blend(label, button);

UIBuilder.body.render(content);
```

Elements can also be organized through a `UIGroup`:

```typescript
const group = UIBuilder.group({
    className: "my-container"
});

group.render(button);
group.render(label);
```

Elements can be removed from the body using `unrender()`:

```typescript
UIBuilder.body.unrender(button);
```

---

# Event Management (`UIEvent`)

The `UIBuilder.event()` method creates an event manager bound to a specific element.

```typescript
UIBuilder.event(button).add("click", () => {
    console.log("Button clicked!");
});
```

Multiple listeners can be registered independently:

```typescript
UIBuilder.event(button).add("click", () => {
    console.log("Clicked");
});

UIBuilder.event(button).add("mouseenter", () => {
    console.log("Mouse entered");
});
```

---

# Components (`UIComponent`)

`UIBuilder.component()` creates reusable UI components with properties and state.

```typescript
const counter = UIBuilder.component(({ text }, self) => {

    const label = UIBuilder.label({
        label: text
    });

    const button = UIBuilder.button({
        label: "Adicionar"
    });

    let count = 0;

    self.stateListen(state => {
        label.label(state.text);
    });

    UIBuilder.event(button).add("click", () => {
        count++;
        label.label(String(count));
    });

    return UIBuilder.blend(label, button);
});
```

Component state can be updated using `.state()`:

```typescript
counter.state({
    text: "Click para adicionar ao contador"
});
```

The component can then be rendered like any other UI element:

```typescript
UIBuilder.body.render(counter);
```

---

# Component Lifecycle

UIBuilder provides listeners for when an element is rendered or unrendered.

```typescript
const button = UIBuilder.button({
    label: "Click"
});

button.renderListen(() => {
    console.log("Button rendered");
});

button.unrenderListen(() => {
    console.log("Button unrendered");
});
```

These listeners are useful when behavior depends on whether an element is currently mounted in the DOM.

---

# State (`UIStore`)

`UIBuilder.store` provides a simple state container.

```typescript
const store = UIBuilder.store.set({
    count: 3,
    username: "rick"
});
```

The current state can be accessed through `.get`:

```typescript
console.log(store.get.count);
console.log(store.get.username);
```

---

# Watcher (`UIWatcher`)

`UIBuilder.watcher` can observe values and stores.

```typescript
const count = UIBuilder.watcher.watch(0, value => {
    console.log(value);
});

count.value = 10;
count.value = 20;

UIBuilder.watcher.unwatch(count);
```

Stores can also be watched:

```typescript
const store = UIBuilder.store.set({
    count: 3,
    username: "rick"
});

UIBuilder.watcher.watch(store, value => {
    console.log(value.count);
});
```

---

# Router (`UIRouter`)

`UIBuilder.router` provides simple client-side routing using the browser History API.

```typescript
const home = UIBuilder.label({
    label: "Home"
});

const about = UIBuilder.label({
    label: "About"
});

UIBuilder.router.route("/", home);
UIBuilder.router.route("/about", about);

UIBuilder.router.init();
```

Navigation can be performed programmatically:

```typescript
UIBuilder.router.navigate("/about");
```

Browser history is also supported:

```typescript
UIBuilder.router.back();

UIBuilder.router.forward();
```

---

# Body

`UIBuilder.body` provides operations specifically for the document `<body>`.

```typescript
UIBuilder.body.render(button);

UIBuilder.body.unrender(button);
```

Body styles can be applied through `UIStyle`:

```typescript
const style = UIBuilder.style({
    backgroundColor: "green"
});

UIBuilder.body.style(style);
```

---

# Head

`UIBuilder.head` provides operations for the document `<head>`.

---

# HTML Utilities

`UIBuilder.html` provides utilities for working with native HTML elements.

```typescript
const element = UIBuilder.html.parseHTMLElement(button);
```

---

# Styling

Reusable styles can be created with `UIBuilder.style()`:

```typescript
const style = UIBuilder.style({
    width: "200px",
    height: "100px"
});
```

The style can then be applied to an element:

```typescript
button.style(style);
```

Styles can also be provided directly:

```typescript
button.style({
    width: "200px",
    height: "100px"
});
```

---

# Example

### `index.html`

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

### `index.ts`

```typescript
import { UIBuilder } from "../dist/ui-builder/ui-builder.js";

const button = UIBuilder.button({
    label: "Click Here"
});

const label = UIBuilder.label({
    label: "Value: 50"
});

const range = UIBuilder.custom({
    tag: "input",
    attribute: {
        type: "range",
        min: 0,
        max: 100,
        value: 50
    }
});

UIBuilder.event(button).add("click", () => {
    document.body.style.background = "#1a1a1a";
});

UIBuilder.event(range).add("input", () => {
    label.label(
        UIBuilder.html.parseHTMLElement(range).value
    );
});

UIBuilder.body.render(button);
UIBuilder.body.render(label);
UIBuilder.body.render(range);
```

---

# License (MIT)

Copyright (c) 2026 Limbus Foundation OSO & Community<br>
Copyright (c) 2026 Rhyan Eduardo Ferreira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
