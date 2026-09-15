
// UI BUILDER EXAMPLE : 

import { UIBuilder } from "../dist/ui-builder.js";

const button = UIBuilder.button({ label : "hello world"});

const label = UIBuilder.label({ label : "hello world"});

const range = UIBuilder.custom({ tag : "input", attribute : { type : "range", min : 0, max : 100, value : 50 }});

UIBuilder.body.render(button); 
UIBuilder.body.render(label);  
UIBuilder.body.render(range);   
    
UIBuilder.event(button).add("click", () => document.body.style.background = "red"); 

const count = UIBuilder.watcher.watch(0, value => {
    console.log(value);
});

count.value = 10;
count.value = 20;

UIBuilder.watcher.unwatch(count);   

UIBuilder.router.listenAllRoute((route)=>{
    console.log("Rota acessada: ", route);
})


UIBuilder.event(UIBuilder.body.body).add("click", () => console.log("Body clicked"));

UIBuilder.event(range).add("input", () => label.label(UIBuilder.html.parseHTMLElement(range).value)); 

const counter = UIBuilder.component(({ text, image }, self) => {

    const label = UIBuilder.label({ label: text });
    const button = UIBuilder.button({ label: "Adicionar" });
    const img = UIBuilder.image({ src: image });

    img.style({ width: "200px", height: "400px" });

    label.listenRender(()=> console.log("Label renderizado"));
    button.listenRender(()=> console.log("Button renderizado"));

    let count = 0;    

    self.stateListen(state => label.label(state.text));
    self.stateListen(state => img.src(state.image)); 

    UIBuilder.event(button).add("click", () => {
        count++;
        label.label(String(count)); 
    });

    return UIBuilder.blend(label, button, img);
});

const counter1 = counter({ 
    text: "Click para adicionar ao contador",
    image: "https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"
})

const counter2 = counter({ 
    text: "ROTA DOI",
    image: "https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"
})

counter1.state();

const b = UIBuilder.button({ label: "Rota Image" });
const bB = UIBuilder.button({ label: "Rota Image 2" });

UIBuilder.router.base("/example");

UIBuilder.router.route("/image", counter1);
UIBuilder.router.route("/image2/:age", counter2);

UIBuilder.router.listenRoute("/image", () => {
    console.log("Rota /image acessada");
});

UIBuilder.router.listenRoute("/image2", () => {
    console.log("Rota /image2 acessada");
}); 

UIBuilder.router.listenParam("/image2", ({ age }) => {
    console.log("Parametro age: ", age);
});

UIBuilder.event(b).add("click", () => {
    UIBuilder.router.navigate("/image"); 
});

UIBuilder.event(bB).add("click", () => {
    UIBuilder.router.navigate("/image2/12");
});

UIBuilder.body.render(b);
UIBuilder.body.render(bB);

const bodyStyle = UIBuilder.style({
    backgroundColor : "green",
})

const store = UIBuilder.store.set({
    count: 3,
    username: "rick"
});

UIBuilder.watcher.watch(store, value => {
    console.log(value.count);
});

store.get.count++;

const spn = UIBuilder.label({ label: "HELLO WORLD", className : "jjj" }); 

UIBuilder.body.render(spn);

const Spanim = UIBuilder.html.rendered(spn); 

const newSpanim = UIBuilder.html.parseUIElement(Spanim);

newSpanim.style({ color: "red", fontSize: "30px" });

newSpanim.content("HELLO WORLD 2");

UIBuilder.body.style(bodyStyle);

const tab1 = UIBuilder.group({});

tab1.style({ width: "400px", height: "400px", border : "1px solid black" });

const tab1Label = UIBuilder.label({ label: "Tab 1" });
const tab1Label2 = UIBuilder.label({ label: "Tab 2" });

const btn1 = UIBuilder.button({ label: "Tab 1" });
const btn2 = UIBuilder.button({ label: "Tab 2" });

const switcher1 = UIBuilder.switcher();

switcher1.root(tab1);

switcher1.register({tab1Label, tab1Label2});

UIBuilder.event(btn1).add("click", () => switcher1.switch(tab1Label));
UIBuilder.event(btn2).add("click", () => switcher1.switch(tab1Label2));

UIBuilder.body.render(tab1);
UIBuilder.body.render(btn1);
UIBuilder.body.render(btn2);




// console.log(counter("Click para adicionar ao contador")); 


