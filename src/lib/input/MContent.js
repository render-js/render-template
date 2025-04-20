import template from "./MContent.html";
import {Component} from "render-core"

export default new Component({
    name: "MContent",
    template: template,
    config: {
        boxMode: true,
    },
    data:{
        name:"liuzhang",
        test:{
            name:'liuzhang',
            sex: "male",
            age: 23,
            hd: [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
            ]
        }
    },
    methods: {
        show(){
            this.$plugins("officialExtTest").test();
        }
    }
})