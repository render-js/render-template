import template from "../board/render.html"
import {Component} from "render-core/class/component";
import {redirect} from "render-security/utility/redirect";

export default new Component({
    name: "render",
    template: template,
    methods:{
        toStart(){
            redirect("/started.html")
        },
        toInstall(){
            redirect(("/install.html"))
        }
    }
})