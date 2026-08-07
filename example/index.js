
// UI BUILDER EXAMPLE : 

import { UIBuilder } from "../dist/ui-builder/ui-builder.js";
import { UIHtml } from "../dist/ui-html/ui-html.js";

const button = UIBuilder.button({ text : "hello world"});

const label = UIBuilder.label({ label : "hello world"});

const body = UIBuilder.body();

const range = UIBuilder.custom({ tag : "input", attribute : { type : "range", min : 0, max : 100, value : 50 }});

body.append(button); 
body.append(label);  
body.append(range);   
    
UIBuilder.event(button).add("click", () => document.body.style.background = "red"); 
UIBuilder.event(range).add("input", () => label.label(UIHtml.parseUIElement(range).value)); 




 