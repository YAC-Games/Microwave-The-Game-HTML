gdjs.TitleCode = {};
gdjs.TitleCode.GDNewObject3Objects1= [];
gdjs.TitleCode.GDNewObject3Objects2= [];
gdjs.TitleCode.GDNewObjectObjects1= [];
gdjs.TitleCode.GDNewObjectObjects2= [];
gdjs.TitleCode.GDNewObject2Objects1= [];
gdjs.TitleCode.GDNewObject2Objects2= [];
gdjs.TitleCode.GDPlayButtonObjects1= [];
gdjs.TitleCode.GDPlayButtonObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.TitleCode.GDPlayButtonObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleCode.GDPlayButtonObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


{
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDNewObject3Objects1.length = 0;
gdjs.TitleCode.GDNewObject3Objects2.length = 0;
gdjs.TitleCode.GDNewObjectObjects1.length = 0;
gdjs.TitleCode.GDNewObjectObjects2.length = 0;
gdjs.TitleCode.GDNewObject2Objects1.length = 0;
gdjs.TitleCode.GDNewObject2Objects2.length = 0;
gdjs.TitleCode.GDPlayButtonObjects1.length = 0;
gdjs.TitleCode.GDPlayButtonObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
