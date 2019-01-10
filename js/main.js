var plus = $(".plus"), minus = $(".minus"), cardsContainer = $(".cards-container"), contacts = $(".contacts"), submit = $("#submit"), deleteBtn = $("#delete"), ubi = $(".ubi"), eng = $(".eng"), addContact = $(".addContact");
var counter = 1;
var counter2 = 1;

$(document).ready(function() {

    var $beefup = $('.beefup').beefup();

   $(".searchBtn").on("click", function() {

    for(var i = 0; i < response.length; i++) {
        contacts.append(`<div id="location${counter2}"></div>`)
        counter2++;
    }

    for(var i = 0; i < response.length; i++) {
        
        contacts.append( `   
            <div class="beefup people" id="person${counter}">
                <h2 class="beefup__head">
                    <ul class="header-ul">
                    <li>Contact Type</li>
                        <li class="header-type"></li>
                        <li>Name</li>
                        <li class="header-name"></li>
                        <li>Email</li>
                        <li class="header-email"></li>
                    </ul>
                </h2>
                <div class="beefup__body inputs-group">
                <div class="body-left">
                    <div class="body-item">
                        <label for="name" class="label">Name</label>
                        <input type="text" class="inputs input-names" name="name">
                    </div>
                    <div class="body-item">
                        <label for="email" class="label">Email</label>
                        <input type="text" class="inputs inputs-emails" name="email">
                    </div>
                    <div class="body-item">
                        <label for="cellNum" class="label">Cell</label>
                        <input type="text" class="inputs inputs-cellNum" name="cellNum">
                    </div>
                </div>
                <div class="body-right">
                    <div class="body-item">
                        <label for="contactType" class="label">Contact Type</label>
                        <input type="text" class="inputs inputs-contactType" name="contactType">
                    </div>
                    <div class="body-item">
                        <label for="availability" class="label">Availability</label>
                        <input type="text" class="inputs inputs-availability" name="availability">
                    </div>
                    <div class="body-item">
                        <label for="officeNum" class="label">Office</label>
                        <input type="text" class="inputs inputs-officeNum" name="officeNum">
                    </div>
                </div>
                <div class="submitDiv">
                    <button class="update" id="update${counter}">Update</button>
                    <button class="delete" id="delete${counter}">Delete</button>
                </div>
            </div>
            </div>
            </div>`
            );
        $(`#person${counter} .header-name`).text(`${response[i].contactInfo.contactName}`)
        $(`#person${counter} .header-email`).text(`${response[i].contactInfo.emailAddress}`)
        $(`#person${counter} .header-type`).text(`${response[i].contactInfo.contactType}`)

        $(`#person${counter} input[name="name"]`).attr("value", `${response[i].contactInfo.contactName}`)
        $(`#person${counter} input[name="email"]`).attr("value", `${response[i].contactInfo.emailAddress}`)
        $(`#person${counter} input[name="cellNum"]`).attr("value", `${response[i].contactInfo.cellPhoneNumber}`)
        $(`#person${counter} input[name="officeNum"]`).attr("value", `${response[i].contactInfo.officePhoneNumber}`)
        $(`#person${counter} input[name="contactType"]`).attr("value", `${response[i].contactInfo.contactType}`)
        $(`#person${counter} input[name="availability"]`).attr("value", `${response[i].contactInfo.methodOfAvailability}`)

        counter++
    }

        // active tab action
        $('.beefup').beefup({
            onInit: function ($this) {
                // Do something after initially setup
                console.log('init')
            },
            onOpen: function ($this) {
                // Do something after accordion opens the content
    
                ($this[0].children[1]).style.background = 'rgba(128,128,128,0.45)';
                ($this[0].children[0]).style.marginBottom = "0";
    
                for(var i = 0; i < 6; i++) {
                    ($this[0].children[0].children[0].children[i]).style.background = '#149e51';
                    ($this[0].children[0].children[0].children[i]).style.color = 'white';
                }
            },
            onClose: function ($this) {
                // Do something after accordion closes the content
    
                ($this[0].children[0]).style.marginBottom = "20px";
    
                for(var i = 0; i < 6; i++) {
                    ($this[0].children[0].children[0].children[i]).style.background = "transparent";
                    ($this[0].children[0].children[0].children[i]).style.color = "#000";
                }
            },
            selfClose: true,
            scroll: true,
            scrollOffset: -10, 
            openSingle: true
        });
   })



})


// add new row
cardsContainer.on("click", "button.plus", function() {
    cardsContainer.append( `
            <div class="card-body card${counter} animated wow fadeInDown">
                <div class="locationDiv">
                    <p id="location${counter}" class="locationNumber">#${counter}</p>
                </div>
                <div class="inputs">
                    <div class="contactTypeDiv">
                        <label for="contactType">Contact Type: </label>
                        <select name="contactType" id="contactType${counter}">
                            <option value="">select</option>
                            <option value="test1">test1</option>
                            <option value="test2">test2</option>
                            <option value="test3">test3</option>
                        </select>
                    </div>
                    <div class="contactCuidDiv">
                        <label for="contactCuid">Contact CUID: </label>
                        <input type="text" class="contactCuid" name="contactCuid" id="contactCuid${counter}">
                    </div>
                </div>
                <div class="buttons">
                    <button class="plus"><img src="assets/images/plus.png" alt="plus"></button>
                    <button class="minus"><img src="assets/images/minus.png" alt="minus"></button>
                </div>
            </div>`);
    counter++;
})

// delete row
cardsContainer.on("click", "button.minus", function() {
    $(this).parent().parent().addClass('animated fadeOutLeft').fadeOut();
})

// delete button
deleteBtn.on("click", function() {
    
})

eng.on("click", function() {
    $(".people").hide();
})

ubi.on("click", function() {
    $('.people').show();
})