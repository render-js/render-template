import index from './src/index'
import {RenderJS} from "render-core";
import router from "./runtime/router";
import {init_status} from "render-status";

function main(){
    //配置会话环境
    init_status({
        type: "session",
        fields:{
            theme: "default"
        }
    })

    let app = new RenderJS();

    app.addTag(index)

    app.addRouter(router)

    app.run()
}

window.onload = main;