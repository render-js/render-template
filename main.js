import {extend_window, RenderJS} from "render-core";
import MContent from "./src/lib/input/MContent";
import MMenu from "./src/lib/menu/MMenu";
import MMenuItem from "./src/lib/menu/MMenuItem";
import {RenderOfficialRouterPlugin} from "render-router";

extend_window("onload",function(){
    let app = new RenderJS();

    app.add_tag(MContent);
    app.add_tag(MMenu);
    app.add_tag(MMenuItem);

    app.use_plugin(new RenderOfficialRouterPlugin({
        mode: "history",
        table: [
            {
                path: "/",
                component: MContent
            },
            {
                path: "/test",
                component: MMenu
            },
            {
                path: "/home",
                component: MContent
            }
        ]
    }))

    app.listen();
})