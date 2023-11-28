import {Component} from "render-core/class/component/component";
import template from "./MContent.html";

export default new Component({
    name: "MContent",
    template: template,
    data:{
        name:"liuzhang"
    },
    methods: {
        test(data){
            return "hello";
        },
        show(){
            hello()
        }
    }
})