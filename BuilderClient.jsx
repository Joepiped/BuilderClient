/*
todo Builder Client read the JSON file
todo xml file list install modules
todo modules inlclide path the module - icon - description
todo Builder Client then lists these modules which upon clicking will launch

todo preferences include path the main CripsBuilder and json file - For the start
todo Crisp Builder will then be packeged in an Applescript and ready to be released
*/

//@target illustrator
//@targetengine main
//@include "FileWrite/readwrite.jsx"

//todo read json
//todo load json into JS Object
//todo begin GIU
//todo cycle through JS Object and load interface.
//todo launch selected script

var myIncludeFile = File("/Volumes/Production/_FreeformEssentials/ApplicationFiles/CrispBuilder/Builder/Modules/Testing.jsx");
var script = "//@include" + myIncludeFile;
eval(script);







