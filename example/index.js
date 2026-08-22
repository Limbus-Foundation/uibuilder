
// UI BUILDER EXAMPLE : 

import { UIBuilder } from "../dist/ui-builder/ui-builder.js";

const button = UIBuilder.button({ text : "hello world"});

const label = UIBuilder.label({ label : "hello world"});

const body = UIBuilder.body();

const range = UIBuilder.custom({ tag : "input", attribute : { type : "range", min : 0, max : 100, value : 50 }});

body.append(button); 
body.append(label);  
body.append(range);   
    
UIBuilder.event(button).add("click", () => document.body.style.background = "red"); 
UIBuilder.event(range).add("input", () => label.label(UIBuilder.html().parseUIElement(range).value)); 

const counter = UIBuilder.component((text,image) => {

    const label = UIBuilder.label({ label: text });
    const button = UIBuilder.button({ text: "Adicionar" });
    const img = UIBuilder.image({ src: image });

    let count = 0;

    UIBuilder.event(button).add("click", () => {
        count++;
        label.label(String(count));
    });

    return UIBuilder.blend(label, button,img); 
});

body.append(counter("Click para adicionar ao contador","https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"));
body.append(counter("Click para adicionar ao contador","https://tsunamiaquarios.com.br/wp-content/uploads/2023/07/ocelaris1-e36334f608a5460cd716588010205094-1024-1024.jpg"));

// console.log(counter("Click para adicionar ao contador")); 