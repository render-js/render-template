import {RenderJS as RenderJs} from "../render-core/dist";
import MContent from "./src/lib/input/MContent";
import {MyPlugin} from "render-router";

RenderJs.registerElement('onload',function(){
    let app = new RenderJs();
    app.routeMode = true;

    app.use_plugin(new MyPlugin({
        mode: "history",
        table: [
            {
                path: "/",
                component: MContent
            }
        ]
    }))

    app.run();
})