import {Component} from "render-core/class/component/component";
import template from "./MContent.html";

export default new Component({
    name: "MContent",
    template: template,
    methods: {
        test(){
            let kk = this.$commit("getId","hello")
            console.log(kk)
        }
    }
})