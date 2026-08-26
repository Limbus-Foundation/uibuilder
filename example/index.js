
// UI BUILDER EXAMPLE : 

import { UIBuilder } from "../dist/ui-builder/ui-builder.js";

const button = UIBuilder.button({ label : "hello world"});

const label = UIBuilder.label({ label : "hello world"});

const range = UIBuilder.custom({ tag : "input", attribute : { type : "range", min : 0, max : 100, value : 50 }});

UIBuilder.body.render(button); 
UIBuilder.body.render(label);  
UIBuilder.body.render(range);   
    
UIBuilder.event(button).add("click", () => document.body.style.background = "red"); 
UIBuilder.event(range).add("input", () => label.label(UIBuilder.html.parseHTMLElement(range).value)); 

const counter = UIBuilder.component((text,image) => {

    const label = UIBuilder.label({ label: text });
    const button = UIBuilder.button({ label: "Adicionar" });
    const img = UIBuilder.image({ src: image });

    let count = 0;

    UIBuilder.event(button).add("click", () => {
        count++;
        label.label(String(count));
    });

    return UIBuilder.blend(label, button,img); 
});

UIBuilder.body.render(counter("Click para adicionar ao contador","https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"));
UIBuilder.body.render(counter("Click para adicionar ao contador","https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"));

const bodyStyle = UIBuilder.style({
    backgroundColor : "green",
})

UIBuilder.body.style(bodyStyle);


// console.log(counter("Click para adicionar ao contador")); 