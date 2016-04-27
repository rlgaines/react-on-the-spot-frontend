//this is where the actions for this component will take place, such as calling to the API to get the info we need.
import axios from 'axios';
//Game id needs to be provided by the user token
var gameID = 2;//hardcoded for now

// this function checks that the browser supports the HTML5 File API
function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
}


//This function creates an array of category objects to be posted to the db
function findCategories (data) {

    var categories = [];

    data.forEach(function (el) {
        if(!categories.includes(el[4]))
          categories.push(el[4]);
    });

    return categories.map(function(name) {
        return {
            name: name,
            game_id: gameID
        };
    });
}

//This function posts an array of questions to the db
function post(data, gameID) {
//example code of post
    const axios.post("http://localhost:5000/categories", categories, gameID)


    function(res, status){

        var insertedCategories = res;//Should look like [{},{},{},{},{},{}]

        var questions = [];

        for (var i = 1; i < data.length; i++) {

            var catID = null;

            for (var j = 0; j < insertedCategories.length; j++) {
                if (insertedCategories[j].name === data[i][4])
                    catID = insertedCategories.id;

            }

            questions.push({
                question: data[i][1],
                answer: data[i][2],
                points: data[i][0],
                daily_double: data[i][3],
                played: false,
                game_id: gameID,
                category_id: catID
            });
        }
//now only doing one post.
        // $.post("http://localhost:5000/questions", questions, function(data, status){
        //     console.log(data);
        //     console.log(status);
        // });
    });
}

// This function reads and processes the selected file
export function uploadCSV(evt) {
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
    } else {
        var data = null;
        var file = evt.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(event) {
            var csvData = event.target.result;
            //Array of arrays
            data = $.csv.toArrays(csvData);
            if (data && data.length > 0) {
            alert('Imported -' + data.length + '- rows successfully!');
            var categories = findCategories(data);
            post(data,categories);


            } else {
                alert('No data to import!');
            }
        };
        reader.onerror = function() {
            alert('Unable to read ' + file.fileName);
        };
    }
}


// uploadCSV function
/**/

