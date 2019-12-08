//Opens the Main Window
function BCMainWindow(thisScriptPath, myScriptArrayInfo, myName) {
    var bcGUI = new Window("dialog", myName, undefined, { borderless: true });
    bcGUI.margins = 3;
    bcGUI.spacing = 10;

    //General Panel
    var headerPan = bcGUI.add("panel");
    headerPan.alignChildren = "right";
    headerPan.preferredSize = [400, 200];
    headerPan.orientation = "row";

    var iconGrp = headerPan.add("group");

    var mainListBox = headerPan.add("listbox");
    mainListBox.preferredSize = [375, 175];
    for (var i = 0; i < myScriptArrayInfo.length; i++) {

        try {

            mainListBox.add("item", myScriptArrayInfo[i][0]);
        } catch (_) {
            mainListBox.add("item", "Could Not Load Script Data");
        }
        try {
            mainListBox.items[i].image = File(scriptpaths[2] + myScriptArrayInfo[i][4])
        } catch (_) {
            alert("Could Not Load Image Data");
        }

    }

    var detailsPan = bcGUI.add("panel");
    detailsPan.preferredSize = [375, 175];
    var NameText = detailsPan.add('statictext {preferredSize: [350, 10], properties: {multiline: true}}');
    var VersionText = detailsPan.add('statictext {preferredSize: [350, 10], properties: {multiline: true}}');
    var DescText = detailsPan.add('statictext {preferredSize: [350, 100], properties: {multiline: true}}');


    var buttonPan = bcGUI.add("panel");
    buttonPan.alignChildren = "right";
    buttonPan.preferredSize = [400, 25];
    var buttonGrp = buttonPan.add("group");
    var cancelButon = buttonGrp.add("button", undefined, "Cancel");
    var okButton = buttonGrp.add("button", undefined, "OK");
    okButton.enabled = false;

    mainListBox.onChange = function () {
        NameText.text = myScriptArrayInfo[mainListBox.selection.index][0];
        VersionText.text = ("Version Numer: " + myScriptArrayInfo[mainListBox.selection.index][2]);
        DescText.text = myScriptArrayInfo[mainListBox.selection.index][1];
        okButton.enabled = true;
    }

    if (bcGUI.show() == 1) {

        //Send stuff back to the script


        main(mainListBox.selection.index);//Calls the main function back in the script
    }
    //Exit the script
    return;


 


}






