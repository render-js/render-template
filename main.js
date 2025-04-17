import {RenderJS} from "render-core";
import {RenderCSS} from "render-ccs";
import {MyPlugin} from "./plugin/myPlugin";

RenderJS.registerElement("onload",function (){

    let app = new RenderJS();

    app.setConfig("deepReact",false);

    app.use(new MyPlugin());

    app.use(new RenderCSS());

    app.run();
})