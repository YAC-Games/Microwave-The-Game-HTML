gdjs.LevelCode = {};
gdjs.LevelCode.forEachCount0_3 = 0;

gdjs.LevelCode.forEachCount1_3 = 0;

gdjs.LevelCode.forEachIndex3 = 0;

gdjs.LevelCode.forEachObjects3 = [];

gdjs.LevelCode.forEachTotalCount3 = 0;

gdjs.LevelCode.GDPlayerObjects1= [];
gdjs.LevelCode.GDPlayerObjects2= [];
gdjs.LevelCode.GDPlayerObjects3= [];
gdjs.LevelCode.GDPlatformObjects1= [];
gdjs.LevelCode.GDPlatformObjects2= [];
gdjs.LevelCode.GDPlatformObjects3= [];
gdjs.LevelCode.GDJumpthruObjects1= [];
gdjs.LevelCode.GDJumpthruObjects2= [];
gdjs.LevelCode.GDJumpthruObjects3= [];
gdjs.LevelCode.GDTiledGrassPlatformObjects1= [];
gdjs.LevelCode.GDTiledGrassPlatformObjects2= [];
gdjs.LevelCode.GDTiledGrassPlatformObjects3= [];
gdjs.LevelCode.GDTiledCastlePlatformObjects1= [];
gdjs.LevelCode.GDTiledCastlePlatformObjects2= [];
gdjs.LevelCode.GDTiledCastlePlatformObjects3= [];
gdjs.LevelCode.GDMovingPlatformObjects1= [];
gdjs.LevelCode.GDMovingPlatformObjects2= [];
gdjs.LevelCode.GDMovingPlatformObjects3= [];
gdjs.LevelCode.GDGoLeftObjects1= [];
gdjs.LevelCode.GDGoLeftObjects2= [];
gdjs.LevelCode.GDGoLeftObjects3= [];
gdjs.LevelCode.GDGoRightObjects1= [];
gdjs.LevelCode.GDGoRightObjects2= [];
gdjs.LevelCode.GDGoRightObjects3= [];
gdjs.LevelCode.GDLadderObjects1= [];
gdjs.LevelCode.GDLadderObjects2= [];
gdjs.LevelCode.GDLadderObjects3= [];
gdjs.LevelCode.GDPlayerHitBoxObjects1= [];
gdjs.LevelCode.GDPlayerHitBoxObjects2= [];
gdjs.LevelCode.GDPlayerHitBoxObjects3= [];
gdjs.LevelCode.GDSlimeWalkObjects1= [];
gdjs.LevelCode.GDSlimeWalkObjects2= [];
gdjs.LevelCode.GDSlimeWalkObjects3= [];
gdjs.LevelCode.GDFlyObjects1= [];
gdjs.LevelCode.GDFlyObjects2= [];
gdjs.LevelCode.GDFlyObjects3= [];
gdjs.LevelCode.GDScoreObjects1= [];
gdjs.LevelCode.GDScoreObjects2= [];
gdjs.LevelCode.GDScoreObjects3= [];
gdjs.LevelCode.GDCoinObjects1= [];
gdjs.LevelCode.GDCoinObjects2= [];
gdjs.LevelCode.GDCoinObjects3= [];
gdjs.LevelCode.GDLeftButtonObjects1= [];
gdjs.LevelCode.GDLeftButtonObjects2= [];
gdjs.LevelCode.GDLeftButtonObjects3= [];
gdjs.LevelCode.GDRightButtonObjects1= [];
gdjs.LevelCode.GDRightButtonObjects2= [];
gdjs.LevelCode.GDRightButtonObjects3= [];
gdjs.LevelCode.GDJumpButtonObjects1= [];
gdjs.LevelCode.GDJumpButtonObjects2= [];
gdjs.LevelCode.GDJumpButtonObjects3= [];
gdjs.LevelCode.GDArrowButtonsBgObjects1= [];
gdjs.LevelCode.GDArrowButtonsBgObjects2= [];
gdjs.LevelCode.GDArrowButtonsBgObjects3= [];
gdjs.LevelCode.GDTiledForestBackgroundObjects1= [];
gdjs.LevelCode.GDTiledForestBackgroundObjects2= [];
gdjs.LevelCode.GDTiledForestBackgroundObjects3= [];
gdjs.LevelCode.GDCheckpointObjects1= [];
gdjs.LevelCode.GDCheckpointObjects2= [];
gdjs.LevelCode.GDCheckpointObjects3= [];
gdjs.LevelCode.GDTopButtonObjects1= [];
gdjs.LevelCode.GDTopButtonObjects2= [];
gdjs.LevelCode.GDTopButtonObjects3= [];
gdjs.LevelCode.GDBottomButtonObjects1= [];
gdjs.LevelCode.GDBottomButtonObjects2= [];
gdjs.LevelCode.GDBottomButtonObjects3= [];
gdjs.LevelCode.GDFadeInObjects1= [];
gdjs.LevelCode.GDFadeInObjects2= [];
gdjs.LevelCode.GDFadeInObjects3= [];
gdjs.LevelCode.GDRoundJoystickObjects1= [];
gdjs.LevelCode.GDRoundJoystickObjects2= [];
gdjs.LevelCode.GDRoundJoystickObjects3= [];
gdjs.LevelCode.GDCheckpoint2Objects1= [];
gdjs.LevelCode.GDCheckpoint2Objects2= [];
gdjs.LevelCode.GDCheckpoint2Objects3= [];

gdjs.LevelCode.conditionTrue_0 = {val:false};
gdjs.LevelCode.condition0IsTrue_0 = {val:false};
gdjs.LevelCode.condition1IsTrue_0 = {val:false};
gdjs.LevelCode.condition2IsTrue_0 = {val:false};
gdjs.LevelCode.conditionTrue_1 = {val:false};
gdjs.LevelCode.condition0IsTrue_1 = {val:false};
gdjs.LevelCode.condition1IsTrue_1 = {val:false};
gdjs.LevelCode.condition2IsTrue_1 = {val:false};


gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11875324);
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


};gdjs.LevelCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LevelCode.GDPlayerHitBoxObjects1, gdjs.LevelCode.GDPlayerHitBoxObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects2[k] = gdjs.LevelCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.LevelCode.GDPlayerHitBoxObjects1 */

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.LevelCode.GDGoLeftObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.LevelCode.GDMovingPlatformObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.LevelCode.GDGoRightObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.LevelCode.GDMovingPlatformObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs.LevelCode.GDGoLeftObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects2ObjectsGDgdjs_46LevelCode_46GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs.LevelCode.GDSlimeWalkObjects2, "Fly": gdjs.LevelCode.GDFlyObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoRightObjects2Objects = Hashtable.newFrom({"GoRight": gdjs.LevelCode.GDGoRightObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects2ObjectsGDgdjs_46LevelCode_46GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs.LevelCode.GDSlimeWalkObjects2, "Fly": gdjs.LevelCode.GDFlyObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.LevelCode.GDPlayerHitBoxObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46LevelCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.LevelCode.GDSlimeWalkObjects1, "Fly": gdjs.LevelCode.GDFlyObjects1});
gdjs.LevelCode.eventsList2 = function(runtimeScene) {

};gdjs.LevelCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.LevelCode.GDFlyObjects2 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects2 */

gdjs.LevelCode.forEachTotalCount3 = 0;
gdjs.LevelCode.forEachObjects3.length = 0;
gdjs.LevelCode.forEachCount0_3 = gdjs.LevelCode.GDSlimeWalkObjects2.length;
gdjs.LevelCode.forEachTotalCount3 += gdjs.LevelCode.forEachCount0_3;
gdjs.LevelCode.forEachObjects3.push.apply(gdjs.LevelCode.forEachObjects3,gdjs.LevelCode.GDSlimeWalkObjects2);
gdjs.LevelCode.forEachCount1_3 = gdjs.LevelCode.GDFlyObjects2.length;
gdjs.LevelCode.forEachTotalCount3 += gdjs.LevelCode.forEachCount1_3;
gdjs.LevelCode.forEachObjects3.push.apply(gdjs.LevelCode.forEachObjects3,gdjs.LevelCode.GDFlyObjects2);
for(gdjs.LevelCode.forEachIndex3 = 0;gdjs.LevelCode.forEachIndex3 < gdjs.LevelCode.forEachTotalCount3;++gdjs.LevelCode.forEachIndex3) {
gdjs.LevelCode.GDFlyObjects3.length = 0;

gdjs.LevelCode.GDSlimeWalkObjects3.length = 0;


if (gdjs.LevelCode.forEachIndex3 < gdjs.LevelCode.forEachCount0_3) {
    gdjs.LevelCode.GDSlimeWalkObjects3.push(gdjs.LevelCode.forEachObjects3[gdjs.LevelCode.forEachIndex3]);
}
else if (gdjs.LevelCode.forEachIndex3 < gdjs.LevelCode.forEachCount0_3+gdjs.LevelCode.forEachCount1_3) {
    gdjs.LevelCode.GDFlyObjects3.push(gdjs.LevelCode.forEachObjects3[gdjs.LevelCode.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


};gdjs.LevelCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LevelCode.GDPlayerHitBoxObjects1, gdjs.LevelCode.GDPlayerHitBoxObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects2[k] = gdjs.LevelCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.LevelCode.GDFlyObjects1, gdjs.LevelCode.GDFlyObjects2);

/* Reuse gdjs.LevelCode.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs.LevelCode.GDSlimeWalkObjects1, gdjs.LevelCode.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.LevelCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.LevelCode.GDPlayerHitBoxObjects1 */

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs.LevelCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.LevelCode.GDFlyObjects1, gdjs.LevelCode.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.LevelCode.GDGoLeftObjects2);
gdjs.copyArray(gdjs.LevelCode.GDSlimeWalkObjects1, gdjs.LevelCode.GDSlimeWalkObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoLeftObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects2ObjectsGDgdjs_46LevelCode_46GDFlyObjects2Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDFlyObjects2 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].returnVariable(gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].returnVariable(gdjs.LevelCode.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDFlyObjects1, gdjs.LevelCode.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.LevelCode.GDGoRightObjects2);
gdjs.copyArray(gdjs.LevelCode.GDSlimeWalkObjects1, gdjs.LevelCode.GDSlimeWalkObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoRightObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects2ObjectsGDgdjs_46LevelCode_46GDFlyObjects2Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDFlyObjects2 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].returnVariable(gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].returnVariable(gdjs.LevelCode.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDFlyObjects1, gdjs.LevelCode.GDFlyObjects2);

gdjs.copyArray(gdjs.LevelCode.GDSlimeWalkObjects1, gdjs.LevelCode.GDSlimeWalkObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDSlimeWalkObjects2[k] = gdjs.LevelCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDFlyObjects2[i].getVariableNumber(gdjs.LevelCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDFlyObjects2[k] = gdjs.LevelCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDFlyObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDFlyObjects2 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDFlyObjects1, gdjs.LevelCode.GDFlyObjects2);

gdjs.copyArray(gdjs.LevelCode.GDSlimeWalkObjects1, gdjs.LevelCode.GDSlimeWalkObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.LevelCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDSlimeWalkObjects2[k] = gdjs.LevelCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDFlyObjects2[i].getVariableNumber(gdjs.LevelCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDFlyObjects2[k] = gdjs.LevelCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDFlyObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDFlyObjects2 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.LevelCode.GDFlyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects1 */

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46LevelCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.LevelCode.GDPlayerHitBoxObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.LevelCode.GDCoinObjects1});
gdjs.LevelCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LevelCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs.LevelCode.GDLeftButtonObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs.LevelCode.GDRightButtonObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTopButtonObjects2Objects = Hashtable.newFrom({"TopButton": gdjs.LevelCode.GDTopButtonObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDBottomButtonObjects2Objects = Hashtable.newFrom({"BottomButton": gdjs.LevelCode.GDBottomButtonObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.LevelCode.GDJumpButtonObjects1});
gdjs.LevelCode.eventsList7 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDLeftButtonObjects1, gdjs.LevelCode.GDLeftButtonObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDLeftButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDRightButtonObjects1, gdjs.LevelCode.GDRightButtonObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDRightButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDTopButtonObjects1, gdjs.LevelCode.GDTopButtonObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTopButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(gdjs.LevelCode.GDBottomButtonObjects1, gdjs.LevelCode.GDBottomButtonObjects2);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDBottomButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

/* Reuse gdjs.LevelCode.GDJumpButtonObjects1 */

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.LevelCode.eventsList8 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.LevelCode.GDArrowButtonsBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.LevelCode.GDBottomButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LevelCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.LevelCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.LevelCode.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.LevelCode.GDTopButtonObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDLeftButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.LevelCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDRightButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.LevelCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDJumpButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.LevelCode.GDArrowButtonsBgObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDArrowButtonsBgObjects2[i].hide();
}
for(var i = 0, len = gdjs.LevelCode.GDTopButtonObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDTopButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.LevelCode.GDBottomButtonObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDBottomButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.LevelCode.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.LevelCode.GDBottomButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LevelCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.LevelCode.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.LevelCode.GDRightButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.LevelCode.GDTopButtonObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDLeftButtonObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDLeftButtonObjects1[k] = gdjs.LevelCode.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDLeftButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDRightButtonObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDRightButtonObjects1[k] = gdjs.LevelCode.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDRightButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDJumpButtonObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDJumpButtonObjects1[k] = gdjs.LevelCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDJumpButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDArrowButtonsBgObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDArrowButtonsBgObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDArrowButtonsBgObjects1[k] = gdjs.LevelCode.GDArrowButtonsBgObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDArrowButtonsBgObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDTopButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDTopButtonObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDTopButtonObjects1[k] = gdjs.LevelCode.GDTopButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDTopButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDBottomButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDBottomButtonObjects1[i].isVisible() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDBottomButtonObjects1[k] = gdjs.LevelCode.GDBottomButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDBottomButtonObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects2Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.LevelCode.GDPlayerHitBoxObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCheckpointObjects2Objects = Hashtable.newFrom({"Checkpoint": gdjs.LevelCode.GDCheckpointObjects2});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDFadeInObjects2Objects = Hashtable.newFrom({"FadeIn": gdjs.LevelCode.GDFadeInObjects2});
gdjs.LevelCode.eventsList9 = function(runtimeScene) {

{



}


{


{
gdjs.LevelCode.GDFadeInObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDFadeInObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.LevelCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFadeInObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.LevelCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFadeInObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.LevelCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDFadeInObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


};gdjs.LevelCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.LevelCode.GDCheckpointObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCheckpointObjects2Objects, false, runtimeScene, false);
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition1IsTrue_0;
gdjs.LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11894908);
}
}}
if (gdjs.LevelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDCheckpointObjects2 */
{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs.LevelCode.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.LevelCode.GDCheckpointObjects2[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs.LevelCode.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.LevelCode.GDCheckpointObjects2[0].getPointY("")));
}}

}


{



}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) - (gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getHeight()));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "life lost sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.LevelCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects2);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects2[i].getY() > 1000 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects2[k] = gdjs.LevelCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCheckpoint2Objects1Objects = Hashtable.newFrom({"Checkpoint2": gdjs.LevelCode.GDCheckpoint2Objects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelCode.GDPlayerObjects1});
gdjs.LevelCode.eventsList11 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerHitBoxObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setCenterPositionInScene((( gdjs.LevelCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDPlayerHitBoxObjects1[0].getCenterXInScene()),(( gdjs.LevelCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDPlayerHitBoxObjects1[0].getCenterYInScene()));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}
{ //Subevents
gdjs.LevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerHitBoxObjects1[k] = gdjs.LevelCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.LevelCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.LevelCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.LevelCode.GDGoRightObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LevelCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.LevelCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.LevelCode.GDMovingPlatformObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoLeftObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.LevelCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.LevelCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.LevelCode.GDMovingPlatformObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoRightObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.LevelCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.LevelCode.GDFlyObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.LevelCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.LevelCode.GDSlimeWalkObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDSlimeWalkObjects1[k] = gdjs.LevelCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDFlyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDFlyObjects1[k] = gdjs.LevelCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDFlyObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.LevelCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.LevelCode.GDSlimeWalkObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDSlimeWalkObjects1[k] = gdjs.LevelCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDFlyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDFlyObjects1[k] = gdjs.LevelCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDFlyObjects1.length = k;}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDSlimeWalkObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.LevelCode.condition1IsTrue_0.val = true;
        gdjs.LevelCode.GDSlimeWalkObjects1[k] = gdjs.LevelCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.LevelCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDFlyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.LevelCode.condition1IsTrue_0.val = true;
        gdjs.LevelCode.GDFlyObjects1[k] = gdjs.LevelCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDFlyObjects1.length = k;}}
if (gdjs.LevelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDFlyObjects1 */
/* Reuse gdjs.LevelCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDSlimeWalkObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.LevelCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDFlyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.LevelCode.GDPlayerHitBoxObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerHitBoxObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.LevelCode.condition1IsTrue_0.val = true;
        gdjs.LevelCode.GDCoinObjects1[k] = gdjs.LevelCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDCoinObjects1.length = k;}}
if (gdjs.LevelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeInQuad", 700, true);
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects1[i].getBehavior("Tween").addObjectPositionYTween("MoveUp", (gdjs.LevelCode.GDCoinObjects1[i].getPointY("")) - 50, "easeOutQuad", 700, false);
}
}}

}


{


gdjs.LevelCode.eventsList6(runtimeScene);
}


{


gdjs.LevelCode.eventsList8(runtimeScene);
}


{


gdjs.LevelCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint2"), gdjs.LevelCode.GDCheckpoint2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCheckpoint2Objects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDPlayerObjects1.length = 0;
gdjs.LevelCode.GDPlayerObjects2.length = 0;
gdjs.LevelCode.GDPlayerObjects3.length = 0;
gdjs.LevelCode.GDPlatformObjects1.length = 0;
gdjs.LevelCode.GDPlatformObjects2.length = 0;
gdjs.LevelCode.GDPlatformObjects3.length = 0;
gdjs.LevelCode.GDJumpthruObjects1.length = 0;
gdjs.LevelCode.GDJumpthruObjects2.length = 0;
gdjs.LevelCode.GDJumpthruObjects3.length = 0;
gdjs.LevelCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.LevelCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.LevelCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.LevelCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.LevelCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.LevelCode.GDTiledCastlePlatformObjects3.length = 0;
gdjs.LevelCode.GDMovingPlatformObjects1.length = 0;
gdjs.LevelCode.GDMovingPlatformObjects2.length = 0;
gdjs.LevelCode.GDMovingPlatformObjects3.length = 0;
gdjs.LevelCode.GDGoLeftObjects1.length = 0;
gdjs.LevelCode.GDGoLeftObjects2.length = 0;
gdjs.LevelCode.GDGoLeftObjects3.length = 0;
gdjs.LevelCode.GDGoRightObjects1.length = 0;
gdjs.LevelCode.GDGoRightObjects2.length = 0;
gdjs.LevelCode.GDGoRightObjects3.length = 0;
gdjs.LevelCode.GDLadderObjects1.length = 0;
gdjs.LevelCode.GDLadderObjects2.length = 0;
gdjs.LevelCode.GDLadderObjects3.length = 0;
gdjs.LevelCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.LevelCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.LevelCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.LevelCode.GDSlimeWalkObjects1.length = 0;
gdjs.LevelCode.GDSlimeWalkObjects2.length = 0;
gdjs.LevelCode.GDSlimeWalkObjects3.length = 0;
gdjs.LevelCode.GDFlyObjects1.length = 0;
gdjs.LevelCode.GDFlyObjects2.length = 0;
gdjs.LevelCode.GDFlyObjects3.length = 0;
gdjs.LevelCode.GDScoreObjects1.length = 0;
gdjs.LevelCode.GDScoreObjects2.length = 0;
gdjs.LevelCode.GDScoreObjects3.length = 0;
gdjs.LevelCode.GDCoinObjects1.length = 0;
gdjs.LevelCode.GDCoinObjects2.length = 0;
gdjs.LevelCode.GDCoinObjects3.length = 0;
gdjs.LevelCode.GDLeftButtonObjects1.length = 0;
gdjs.LevelCode.GDLeftButtonObjects2.length = 0;
gdjs.LevelCode.GDLeftButtonObjects3.length = 0;
gdjs.LevelCode.GDRightButtonObjects1.length = 0;
gdjs.LevelCode.GDRightButtonObjects2.length = 0;
gdjs.LevelCode.GDRightButtonObjects3.length = 0;
gdjs.LevelCode.GDJumpButtonObjects1.length = 0;
gdjs.LevelCode.GDJumpButtonObjects2.length = 0;
gdjs.LevelCode.GDJumpButtonObjects3.length = 0;
gdjs.LevelCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.LevelCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.LevelCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.LevelCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.LevelCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.LevelCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.LevelCode.GDCheckpointObjects1.length = 0;
gdjs.LevelCode.GDCheckpointObjects2.length = 0;
gdjs.LevelCode.GDCheckpointObjects3.length = 0;
gdjs.LevelCode.GDTopButtonObjects1.length = 0;
gdjs.LevelCode.GDTopButtonObjects2.length = 0;
gdjs.LevelCode.GDTopButtonObjects3.length = 0;
gdjs.LevelCode.GDBottomButtonObjects1.length = 0;
gdjs.LevelCode.GDBottomButtonObjects2.length = 0;
gdjs.LevelCode.GDBottomButtonObjects3.length = 0;
gdjs.LevelCode.GDFadeInObjects1.length = 0;
gdjs.LevelCode.GDFadeInObjects2.length = 0;
gdjs.LevelCode.GDFadeInObjects3.length = 0;
gdjs.LevelCode.GDRoundJoystickObjects1.length = 0;
gdjs.LevelCode.GDRoundJoystickObjects2.length = 0;
gdjs.LevelCode.GDRoundJoystickObjects3.length = 0;
gdjs.LevelCode.GDCheckpoint2Objects1.length = 0;
gdjs.LevelCode.GDCheckpoint2Objects2.length = 0;
gdjs.LevelCode.GDCheckpoint2Objects3.length = 0;

gdjs.LevelCode.eventsList11(runtimeScene);

return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
