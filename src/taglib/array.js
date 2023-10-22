import {Component} from "render-core/class/component/component";
import template from "../board/array.html";
import axios from "axios";

export default new Component({
    name: "array",
    template: template,
    data: {
        show: "liuzhang",
        haha: "mutian",
        k: "k"
    },
    computed:{
        hah(){
            return this.show+"no";
        }
    },
    watcher:{
        haha(one,two){
            console.log(one);
        }
    },
    methods:{
        test(){
            this.haha = "kk";
        }
    }
})