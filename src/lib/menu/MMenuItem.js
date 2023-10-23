import {Component} from "render-core/class/component/component";
import template from "./MenuItem.html";

export default new Component({
    name: "MenuItem",
    template: template,
    props:["label"],
    mode: "insert",
    data:{
        label:""
    },
    beforeRender(){
        this.label = this.$props.get("label")
    }
})