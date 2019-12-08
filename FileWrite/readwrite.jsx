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


