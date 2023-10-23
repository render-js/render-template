import menu from "./lib/menu/MMenu";
import menuItem from "./lib/menu/MMenuItem";
import MContent from "./lib/input/MContent";

export default function (app){
    app.addTag(menu);
    app.addTag(menuItem);
    app.addTag(MContent);
}
