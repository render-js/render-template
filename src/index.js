import one from "./taglib/render";
import array from "./taglib/array";
import map from "./taglib/map";

export default function (app){
    app.addTag(one);
    app.addTag(array);
    app.addTag(map);
}
