import template from "./MMenuItem.html";
import {Component} from "render-core";

export default new Component({
    name: "MMenuItem",
    template: template,
    props:["label","url"],
    mode: "insert",
    data:{
        label:""
    },
    methods:{
        redirect(){
            appSite.redirect(this.$props.get("url"),{})
        }
    },
    beforeRender(){
        this.label = this.$props.get("label")
    }
})