import {AbstractPlugin} from "render-refer";

export class MyPlugin extends AbstractPlugin{

    plugin(render,hooks){

        render.injectElement("hello",function (){
            alert("Hello, world!");
        })
    }
}