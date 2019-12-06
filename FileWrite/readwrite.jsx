
//@include "includes/json2.js"

//Some function to write and read JSON and Standard Text Files
//todo this file needs to be a module to the rest of the builder scripts
// todo Build helper scrip that formats the text and json string - Adding WO number, LI Numbers, substrates, notes and everything else

//todo These variable will come from the parent script
// var myScript_file_path = (new File($.fileName)).parent;
// var JSONfile = "/includes/jsontesting.json";
// var Textfile = "/includes/texttesting.txt";

// var fileLoc = (myScript_file_path + Textfile)

var job = {
    lineItems: { lineItem: 1, WONumber: 54312 }
};

var jobtext = "lineItem: 1, WONumber: 54312 \n";



function readJSON(myFile) { //reads the current JSON file and parses it
    var file_to_read = File(myFile);
    var my_JSON_object = null;
    var content;
    if (file_to_read !== false) {
        file_to_read.open('r');
        content = file_to_read.read();
        if (content !== "") {
            my_JSON_object = JSON.parse(content);
            // alert("JSON: ")
        } else {
            alert("file is empty")
            my_JSON_object = "";
        }

        file_to_read.close();
    } else {
        alert("File Could Not Be Read"); // if something went wrong
    }
    //   alert(my_JSON_object.mywidth)
    return my_JSON_object;
};

function writeJSONFile(filepath, contents) { //takes an object, stringifies it and write to the current JSON file
    var dataToString = JSON.stringify(contents);
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);// if the file does not exist create one
    }
    write_file.open('w', undefined, undefined);
    write_file.writeln(dataToString);
    write_file.close();
    return dataToString + "Was written to the file";
};

function addToText(filepath, contents) { //reads the current json file, joins a new object and returns 
    var dataFromFile = readJSON(filepath);
    if (dataFromFile == "") {
        return contents
    } else {
        var combimedLists = dataFromFile.lineItems.push(contents.lineItems[0]);
    }
    return dataFromFile;
}

function readJSON(myFile) { //reads the current JSON file and parses it
    var file_to_read = File(myFile);
    var my_JSON_object = null;
    var content;
    if (file_to_read !== false) {
        file_to_read.open('r');
        content = file_to_read.read();
        if (content !== "") {
            my_JSON_object = JSON.parse(content);
            // alert("JSON: ")
        } else {
            alert("file is empty")
            my_JSON_object = "";
        }

        file_to_read.close();
    } else {
        alert("File Could Not Be Read"); // if something went wrong
    }
    //   alert(my_JSON_object.mywidth)
    return my_JSON_object;
};

function writeTextFile(filepath, contents) { //takes an object, and appends to the current text file

    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);// if the file does not exist create one
    }
    write_file.open('a', undefined, undefined);
    write_file.writeln(contents);
    write_file.close();
    return;
};



// writeTextFile(fileLoc, jobtext)


// var contentToWrite = addToText(job);
// writeJSONFile(fileLoc, contentToWrite);

// var objFromJson = readJSON(fileLoc);

// alert (objFromJson.lineItems[5].WONumber);//example reading a Line Item JSON Object


