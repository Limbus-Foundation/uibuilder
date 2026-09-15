
// UI BUILDER EXAMPLE : 

import { UIBuilder } from "../dist/ui-builder.js";



// BASIC UI
// ------------------------------------------------------------

const button = UIBuilder.button({ label: "Hello World" });
const label = UIBuilder.label({ label: "Hello World" });
const range = UIBuilder.custom({
    tag: "input",
    attribute: {
        type: "range",
        min: 0,
        max: 100,
        value: 50
    }
});

UIBuilder.body.render(button);
UIBuilder.body.render(label);
UIBuilder.body.render(range);



// EVENTS
// ------------------------------------------------------------

UIBuilder.event(button).add("click", () => {
    document.body.style.background = "red";
});

UIBuilder.event(UIBuilder.body.body).add("click", () => {
    console.log("Body clicked");
});

UIBuilder.event(range).add("input", () => {
    label.content(UIBuilder.html.parseHTMLElement(range).value);
});



// WATCHER
// ------------------------------------------------------------

const count = UIBuilder.watcher.watch(0, value => {
    console.log("Count:", value);
});

count.value = 10;
count.value = 20;

UIBuilder.watcher.unwatch(count);



// ROUTER
// ------------------------------------------------------------

UIBuilder.router.base("/example");

UIBuilder.router.listenAllRoute(route => {
    console.log("Route accessed:", route);
});



// COMPONENT
// ------------------------------------------------------------

const counter = UIBuilder.component(({ text, image }, self) => {

    const label = UIBuilder.label({ label: text });
    const button = UIBuilder.button({ label: "Add" });
    const imageElement = UIBuilder.image({ src: image });

    imageElement.style({
        width: "200px",
        height: "400px"
    });

    label.listenRender(() => console.log("Label rendered"));
    button.listenRender(() => console.log("Button rendered"));

    let count = 0;

    self.stateListen(state => label.content(state.text));
    self.stateListen(state => imageElement.src(state.image));

    UIBuilder.event(button).add("click", () => {
        count++;
        label.content(String(count));
    });

    return UIBuilder.blend(label, button, imageElement);
});

const counter1 = counter({
    text: "Click to add to the counter",
    image: "https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"
});

const counter2 = counter({
    text: "Route Two",
    image: "https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"
});

counter1.state();



// ROUTE ELEMENTS
// ------------------------------------------------------------

UIBuilder.router.route("/image", counter1);
UIBuilder.router.route("/image2/:age", counter2);

UIBuilder.router.listenRoute("/image", () => {
    console.log("Route /image accessed");
});

UIBuilder.router.listenRoute("/image2", () => {
    console.log("Route /image2 accessed");
});

UIBuilder.router.listenParam("/image2", ({ age }) => {
    console.log("Parameter age:", age);
});

const routeButton = UIBuilder.button({ label: "Route Image" });
const routeButton2 = UIBuilder.button({ label: "Route Image 2" });

UIBuilder.event(routeButton).add("click", () => {
    UIBuilder.router.navigate("/image");
});

UIBuilder.event(routeButton2).add("click", () => {
    UIBuilder.router.navigate("/image2/12");
});

UIBuilder.body.render(routeButton);
UIBuilder.body.render(routeButton2);



// STORE
// ------------------------------------------------------------

const store = UIBuilder.store.set({
    count: 3,
    username: "rick"
});

UIBuilder.watcher.watch(store, value => {
    console.log("Store:", value.count);
});

store.get.count++;



// HTML BRIDGE
// ------------------------------------------------------------

const span = UIBuilder.label({
    label: "Hello World",
    className: "jjj"
});

UIBuilder.body.render(span);

const htmlElement = UIBuilder.html.rendered(span);
const parsedElement = UIBuilder.html.parseUIElement(htmlElement);

parsedElement.style({
    color: "red",
    fontSize: "30px"
});

parsedElement.content("Hello World 2");



// STYLES
// ------------------------------------------------------------

const bodyStyle = UIBuilder.style({
    backgroundColor: "green"
});

UIBuilder.body.style(bodyStyle);



// SWITCHER
// ------------------------------------------------------------

const switcherRoot = UIBuilder.group({});

switcherRoot.style({
    width: "400px",
    height: "400px",
    border: "1px solid black"
});

const tab1 = UIBuilder.label({ label: "Tab 1" });
const tab2 = UIBuilder.label({ label: "Tab 2" });

const tabButton1 = UIBuilder.button({ label: "Tab 1" });
const tabButton2 = UIBuilder.button({ label: "Tab 2" });

const switcher = UIBuilder.switcher();

switcher.root(switcherRoot);

switcher.register(tab1).register(tab2);

UIBuilder.event(tabButton1).add("click", () => switcher.switch(tab1));
UIBuilder.event(tabButton2).add("click", () => {
    switcher.switch(tab2)
    console.log("current tab:", switcher.current());
});

UIBuilder.body.render(switcherRoot);
UIBuilder.body.render(tabButton1);
UIBuilder.body.render(tabButton2);
