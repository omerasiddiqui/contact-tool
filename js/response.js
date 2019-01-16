let contacts = $('.contacts'), counter = 1, counterLocations = 1;

  var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

var editor;
 
$(document).ready(function() {

  $.ajax({
    url: 'http://localhost:3001/',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data.data);
      $('#example').dataTable({
        "sPaginationType": "full_numbers",
        data: data.data,
        select: 'single',
        columns: [
          { data: "contactInfo.contactName" },
          { data: "contactInfo.contactType" },
          { data: "contactInfo.emailAddress" },
          { data: "contactInfo.cellPhoneNumber" },
          { data: "contactInfo.officePhoneNumber" },
          { data: "contactInfo.methodOfAvailability" }
      ],
      dom: 'Bfrtip',        // element order: NEEDS BUTTON CONTAINER (B) ****
      select: 'single',     // enable single row selection
      responsive: true,     // enable responsiveness
      altEditor: true,      // Enable altEditor ****
      buttons: [{
        text: 'Add',
        name: 'add'        // DO NOT change name
      },
      {
        extend: 'selected', // Bind to Selected row
        text: 'Edit',
        name: 'edit'        // DO NOT change name
      },
      {
        extend: 'selected', // Bind to Selected row
        text: 'Delete',
        name: 'delete'      // DO NOT change name
     }]
      })
    }
  })

  $('.eng').on("click", function() {
    $(".people").hide();
  })

  $('.ubi').on("click", function() {
      $('.people').show();
  })



  });

$('.searchBtn').on("click", function() {
  $.ajax({
    url: 'http://localhost:3001/',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    },
    error: function(err) {
        console.log(err)
    }
  });
})








// function ajaxTest() {
  
//   response.forEach(function(item) {
//   console.log(item)

//   contacts.append(`<div class="location${counterLocations}"></div>`)
//   $(`.location${counterLocations}`).append(`
//   <div class="locationHeaderDiv"> 
//     <button class="location-header"><h2>${item[0].addressInfo.addressLine1} ${item[0].addressInfo.city}, ${item[0].addressInfo.stateProvinceCode}</h2> <img id="chevron" src="assets/images/up-chevron.png" alt="up-chevron" /></button> 
    
//   </div>`)

//  for(var i = 0; i < item.length; i++) {

//   $(`.location${counterLocations}`).append( `   
//             <div class="beefup people" id="person${counter}">
//                 <h2 class="beefup__head">
//                     <ul class="header-ul">
//                     <li>Contact Type</li>
//                         <li class="header-type"></li>
//                         <li>Name</li>
//                         <li class="header-name"></li>
//                         <li>Email</li>
//                         <li class="header-email"></li>
//                     </ul>
//                 </h2>
//                 <div class="beefup__body inputs-group">
//                 <div class="body-left">
//                     <div class="body-item">
//                         <label for="name" class="label">Name</label>
//                         <input type="text" class="inputs input-names" name="name">
//                     </div>
//                     <div class="body-item">
//                         <label for="email" class="label">Email</label>
//                         <input type="text" class="inputs inputs-emails" name="email">
//                     </div>
//                     <div class="body-item">
//                         <label for="cellNum" class="label">Cell</label>
//                         <input type="text" class="inputs inputs-cellNum" name="cellNum">
//                     </div>
//                 </div>
//                 <div class="body-right">
//                     <div class="body-item">
//                         <label for="contactType" class="label">Contact Type</label>
//                         <input type="text" class="inputs inputs-contactType" name="contactType">
//                     </div>
//                     <div class="body-item">
//                         <label for="availability" class="label">Availability</label>
//                         <input type="text" class="inputs inputs-availability" name="availability">
//                     </div>
//                     <div class="body-item">
//                         <label for="officeNum" class="label">Office</label>
//                         <input type="text" class="inputs inputs-officeNum" name="officeNum">
//                     </div>
//                 </div>
//                 <div class="submitDiv">
//                     <button class="update" id="update${counter}">Update</button>
//                     <button class="delete" id="delete${counter}">Delete</button>
//                 </div>
//             </div>
//             </div>
//             </div>`
//             );
//         $(`#person${counter} .header-name`).text(`${item[i].contactInfo.contactName}`)
//         $(`#person${counter} .header-email`).text(`${item[i].contactInfo.emailAddress}`)
//         $(`#person${counter} .header-type`).text(`${item[i].contactInfo.contactType}`)

//         $(`#person${counter} input[name="name"]`).attr("value", `${item[i].contactInfo.contactName}`)
//         $(`#person${counter} input[name="email"]`).attr("value", `${item[i].contactInfo.emailAddress}`)
//         $(`#person${counter} input[name="cellNum"]`).attr("value", `${item[i].contactInfo.cellPhoneNumber}`)
//         $(`#person${counter} input[name="officeNum"]`).attr("value", `${item[i].contactInfo.officePhoneNumber}`)
//         $(`#person${counter} input[name="contactType"]`).attr("value", `${item[i].contactInfo.contactType}`)
//         $(`#person${counter} input[name="availability"]`).attr("value", `${item[i].contactInfo.methodOfAvailability}`)

//         counter++





//  };
//  counterLocations++;
// });
// }


// // $(".searchBtn").on("click", ajaxTest();
// ajaxTest();


// $(document).ready(function() {

//   // active tabs
//   $(".tab-item").on("click", function(e) {

//     for(var i = 0; i < $('.tab-item').length; i++) {
//       $('.tab-item')[i].children[0].classList.remove('active');
//     }

//     $(this)[0].children[0].classList.add('active');
//   })

//   // accordion for locations
//   $('.locationHeaderDiv').on('click', function(e) {
//     var locationDiv = e.currentTarget.parentElement.children;

//     // rotate arrow up and down on expand or collapse
//     $(this)[0].children[0].children[1].classList.toggle('rotate');


//     // hide location contacts on click
//     $.each(locationDiv, function(index, value) {
//       if(index !== 0) {
//         ($(this)).toggleClass('hide');
        
//       }

//     })

//   })

//   $('.eng').on('click', function() {
//     $('.contacts').addClass('hide');
//   })

  
//   $('.ubi').on('click', function() {
//     $('.contacts').removeClass('hide');
//   })




// })