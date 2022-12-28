# JSChart

![sample chart](step7-add-local-CSV-file/Screenshot%20from%202022-12-28%2009-41-03.png)

This HTML code defines a file input element and a JavaScript script that reads the contents of a file when it is selected by the user.

The script creates a new 'FileReader' object and defines an 'onload' event handler for it. This event handler will be called when the file has been successfully read. Inside the event handler, the 'result' property of the 'FileReader' object is logged to the console.

The script also defines an onchange event handler for the file input element. This event handler will be called when the user selects a file. Inside the event handler, the files property of the file input element is destructured and the first element is assigned to the file variable. The readAsBinaryString method of the 'FileReader' object is then called, passing in the 'file' as an argument. This starts the process of reading the file.

When the file has been successfully read, the 'onload' event handler will be called, logging the contents of the file to the console.
