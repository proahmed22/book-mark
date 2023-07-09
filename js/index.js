var bookMark = document.getElementById("SName");
var websiteUrl = document.getElementById("SUrl");
var btn = document.querySelector(".user-inputs button");
var urlIndex = [];


if (localStorage.getItem("urlIndex") !=null) {
    urlIndex = JSON.parse (localStorage.getItem("urlIndex") )
    display()
}


function create() {
    website = {
    mark: bookMark.value,
    url: websiteUrl.value,
    };
    urlIndex.push(website);
    localStorage.setItem("urlIndex", JSON.stringify(urlIndex))
    display();
    clearForm()
}


function display() {
    var data = ``;
    for (var i = 0; i < urlIndex.length; i++) {
    data += `
        <div id="bookmark" class="row p-3">
                <div class="col-4">
                    <h4 class="fw-bolder">${urlIndex[i].mark}</h4>
                </div>
                <div class="col-6 ">
                    <a href="${urlIndex[i].url}" target="_blank"><button class="btn btn-primary">Visit</button></a>
                    <button class="btn btn-danger" onclick="remove(${i})">Delete</button>
                </div>
            </div>
        `;
    }
    document.getElementById("container").innerHTML = data;
}

function clearForm() {
    document .getElementById("SName").value = ""
    document .getElementById("SUrl").value = ""     
    }

function remove(index) {
    urlIndex.splice(index, 1);
    localStorage.setItem("urlIndex", JSON.stringify(urlIndex))

    display()
}

