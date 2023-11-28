import {Component} from "render-core/class/component/component";
import template from "./Test.html"

export default new Component({
    name:"Test",
    template:template,
    props:["method","data"],
    data:{
        name:"ok"
    },
    beforeRender(){
        this.name = this.$get("name")
    }
})