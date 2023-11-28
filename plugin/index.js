import menu from "../src/lib/menu/MMenu";
import menuItem from "../src/lib/menu/MMenuItem";
import MContent from "../src/lib/input/MContent";
import test from "../src/lib/test/Test";

export default function (app){
    app.addTag(menu);
    app.addTag(menuItem);
    app.addTag(MContent);
    app.addTag(test);
}