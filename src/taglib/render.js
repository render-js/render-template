import template from "../board/render.html"
import {Component} from "render-core/class/component/component";

export default new Component({
    name: "render",
    template: template,
    data:{
        name:"kk",
        age:12,
        test: [1,2,3,4,5,6],
        hello:[
            {
                name: "liuzhang",
                age: 23,
                sex: "male"
            }
        ]
    },
    methods:{
        toStart(){
            location.href ="/start.html";
        },
        toInstall(){
            location.href = "/install.html";
        }
    },
    beforeUpdate(){
        console.log("hello world")
    },
    computed:{
        mu(){
            return "mutian"
        }
    }
})