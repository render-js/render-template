import template from "./MContent.html";
import {Component} from "render-core"

export default new Component({
    name: "MContent",
    template: template,
    config: {
        boxMode: true,
    },
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