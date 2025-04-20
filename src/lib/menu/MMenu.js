import template from "./MMenu.html";
import {Component} from "render-core";

export default new Component({
    name: "MMenu",
    template: template,
    config: {
        boxMode: true
    },
    boxStyle: "display:flex;display-direction:column;"
})