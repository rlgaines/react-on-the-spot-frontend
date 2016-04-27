//this is where the actions for this component will take place, such as calling to the API to get the info we need.
import axios from 'axios';

export const POST_QUESTIONS = 'POST_QUESTIONS';

//Game id needs to be provided by the user token
var gameID = localStorage.getItem('game_id');


// this function checks that the browser supports the HTML5 File API
function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
}

//This function posts an array of questions to the db
function post(data) {
//example code of post
    const request = axios.post("http://localhost:5000/file", {
        data: data,
        game_id: gameID
    });

    return {
        type: POST_QUESTIONS,
        payload: request
    };


}

// This function reads and processes the selected file
export function uploadCSV(evt) {
    //console.log(evt);
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
    } else {
        var data = null;
        var file = evt.file['0'];
        console.log(file);
        var reader = new FileReader();
        reader.readAsText(file);

        reader.onload = function(event) {
            var csvData = event.target.result;
            //Array of arrays
            data = $.csv.toArrays(csvData);
            if (data && data.length > 0) {

            post(data);

            } else {
                alert('No data to import!');
            }
        };
        reader.onerror = function() {
            alert('Unable to read ' + file.fileName);
        };
    }
}

