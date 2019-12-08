//@target illustrator
//@targetengine main
//@include "FileWrite/readwrite.jsx"
//@include "Includes/helpers.jsx"
//@include "Includes/BCGUI.jsx"
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;


//done global vars

//done read json
//done load json into JS Object
//done convert object to array and feed to GUI
//done begin GIU
//done cycle through JS Object and load interface.
//done launch selected script

scriptpaths = mainPaths();

var ScriptInfoObect = readJSON(scriptpaths[3]);
var scriptArrayInfo = ScriptObjectToArray(ScriptInfoObect);

var openwin = BCMainWindow(null, scriptArrayInfo, "Client");

function main(myScriptIndex){

// alert (scriptpaths[2] + scriptArrayInfo[myScriptIndex][3]);
var myIncludeFile = File(scriptpaths[2] + scriptArrayInfo[myScriptIndex][3]);
var script = "//@include" + myIncludeFile;
eval(script);

}


function ScriptObjectToArray(myObject) {
    var myLength = myObject.Modules.length;
    var scriptInfo = [];

    for (var i = 0; i < myLength; i++) {
        var myName = myObject.Modules[i].Name;
        var myDesciption = myObject.Modules[i].Description;
        var myVersion = myObject.Modules[i].Version;
        var myURL = myObject.Modules[i].ScriptURL;
        var myIconURL = myObject.Modules[i].iconURL;
        var singleScriptInfo = [myName, myDesciption, myVersion, myURL, myIconURL];
        scriptInfo[i] = singleScriptInfo;
    }

    return scriptInfo;

}

function mainPaths() {
    var myScriptPath = String((new File($.fileName)).parent);
    var myParentPath = RemoveLastDirectoryPartOf(myScriptPath);
    var myModulesPath = (myParentPath = myParentPath + "/Modules");
    var myJSONDataFile = (myScriptPath + "/Includes/moduleData.json");

    var myPaths = [myScriptPath, myParentPath, myModulesPath, myJSONDataFile]
    return myPaths;
}





