import {Component} from "render-core/class/component/component";
import template from "../board/map.html";
import axios from "axios";

export default new Component({
    name: "mapper",
    template: template,
    data: {
        message: "no"
    },
    methods:{
        ch(){
            this.message = "ysk"
            // appSite.setFiled("system_theme","test")
        },
        ok(res){
            this.message = res.data.data
        }
    },
    beforeRender(){
        axios.get("http://localhost")
            .then(this.ok)
            .catch(function (e){

            })
    },
    afterRender(){
    }
})