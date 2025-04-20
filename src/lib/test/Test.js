import template from "./Test.html"
import {Component} from "render-core";

export default new Component({
    name:"Test",
    template:template,
    config:{
        boxMode: true
    },
    data:{
        name:"ok"
    },
    beforeRender(){
        this.name = this.$get("name")
    }
})