let contacts = $('.contacts'),
  counter = 1,
  counterLocations = 1;
var responseData = [];
var ogResponseData = [];


$(document).ready(function () {
  var swal1 = $("#swal-input1").val(),
    swal2 = $("#swal-input2").val(),
    swal3 = $("#swal-input3").val(),
    swal4 = $("#swal-input4").val(),
    swal5 = $("#swal-input5").val(),
    swal6 = $("#swal-input6").val();
  //create Tabulator on DOM element with id "example-table"
  var table = new Tabulator("#example-table", {
    height: 1000, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout: "fitColumns",
    placeholder: "Search for Sales Order ID",
    tooltips: true, //show tool tips on cells
    addRowPos: "bottom", //when adding a new row, add it to the top of the table
    history: true, //allow undo and redo actions on the table
    movableColumns: true, //allow column order to be changed
    resizableRows: true,
    columns: [
      // {title: "ID", field: "id", editor: true},
      {
        title: "Name",
        field: "contactName"
      },
      {
        title: "Contact Type",
        field: "contactType"
      },
      {
        title: "Email",
        field: "emailAddress"
      },
    ],
    rowClick: function (e, row) {
      const contact = row.getData();

      Swal.fire({
        title: 'Edit Contact',
        html: `<label class='modal-label'>Name</label>` +
          `<input id="swal-input1" class="swal2-input" value="${contact.contactName}">` +
          `<label class='modal-label'>Contact Type</label>` +
          `<input id="swal-input2" class="swal2-input" value="${contact.contactType}">` +
          `<label class='modal-label'>Email Address</label>` +
          `<input id="swal-input3" class="swal2-input" value="${contact.emailAddress}">` +
          `<label class='modal-label'>Cell Phone Number</label>` +
          `<input id="swal-input4" class="swal2-input" value="${contact.cellPhoneNumber}">` +
          `<label class='modal-label'>Office Phone Number</label>` +
          `<input id="swal-input5" class="swal2-input" value="${contact.officePhoneNumber}">` +
          `<label class='modal-label'>Availability</label>` +
          `<input id="swal-input6" class="swal2-input" value="${contact.methodOfAvailability}">`,
        // `<label class='modal-label'>Contact Types</label>`,
        focusConfirm: false,
        showCancelButton: true,
        allowOutsideClick: false,
        preConfirm: () => {
          return [
            // return array of values from edit contact modal
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value,
            document.getElementById('swal-input5').value,
            document.getElementById('swal-input6').value
          ]
        }
      }).then(function (data) {

        if(data.value) {
          console.log(data)
          Swal.fire({
            title: "Success",
            text: "Contact Updated",
            type: "success"
          })
        } else if (data.dismiss === Swal.DismissReason.cancel) {
          'Cancelled',
          'No updates were made',
          'error'
        }

        var newContactName = data.value[0].toUpperCase();

        // assign cell values to updated content
        contact.contactName = newContactName,
          contact.contactType = data.value[1],
          contact.emailAddress = data.value[2],
          contact.cellPhoneNumber = data.value[3],
          contact.officePhoneNumber = data.value[4],
          contact.methodOfAvailability = data.value[5];

        // for POST request to update DB
        var updatedContact = {
          contactName: contact.contactName,
          contactType: contact.contactType,
          emailAddress: contact.emailAddress,
          cellPhoneNumber: contact.cellPhoneNumber,
          officePhoneNumber: contact.officePhoneNumber,
          methodOfAvailability: contact.methodOfAvailability
        }

        table.setData(responseData)
        console.log(updatedContact);
      })


    },
  });


  //Delete row on "Delete Row" button click
  $("#del-row").click(function () {
    table.deleteRow(1);
  });

  //Clear table on "Empty the table" button click
  $("#clear").click(function () {
    table.clearData()
  });

  //Reset table contents on "Reset the table" button click
  $("#reset").click(function () {
    table.setData(tabledata);
  });

  // loop through array
  // find matching contact names and their contact types
  // 


  // button click events
  $('.searchBtn').on("click", function () {

  $.ajax({
    url: 'http://localhost:3003/',
    method: 'GET',
    success: function(data) {
      console.log(data);
    }
  }).then(function(data) {
    // var salesOrderId = $('#orderId').val();
    // var url = `http://localhost:8080/rest/getContactListBasedOnSalesOrderIdUsingPOST/${salesOrderId}`

    // test order id's
    // 180199238
    // 179865344 

    $.ajax({
      // url: 'http://localhost:3002/',
      url: 'http://localhost:3002/',
      method: 'GET',
      success: function (data) {
        // log entire response
        console.log(data);
        // variable for response array
        var response = data.data;
        // forEach loop to cycle through array
        response.forEach(function (item) {
          var contactInfo = item.contactInfo;
          // push the contact object into responseData array
          responseData.push(contactInfo);
          ogResponseData.push(contactInfo);

        })

        // var seen = {};

        // contactData = ogResponseData.filter((item, index) => {
        //   var previous;

        //   if (seen.hasOwnProperty(item.contactName)) {
        //     previous = seen[item.contactName];
        //     previous.contactType.push(item.contactType)
        //     return false
        //   }

        //   if (!Array.isArray(item.contactType)) {
        //     item.contactType = [item.contactType];
        //   }

        //   seen[item.contactName] = item;

        //   return true;
        // });

        // console.log(seen)

        // var j = 1;
        // var contactTypeLengthArr = [];

        // for (var i = 0; i < contactData.length; i++) {
        //   var contactTypeLength = contactData[i].contactType.length;
        //   contactTypeLengthArr.push(contactData[i].contactType.length);
        // }

        // console.log(contactData)

      },
      error: function (err) {
        console.log(err);
      }
    }).done(function () {
      table.setData(responseData)
    }).error(function(err) {
      console.log(err);
    })
    
    
    
    
    
  })

  })

  $('.eng').on("click", function () {
    $("#example_wrapper").hide();
    $('.ubi').css('background', 'white').css('color', 'black')
    $(this).css('background', '#149e51').css('color', 'white')

  })

  $('.ubi').on("click", function () {
    $('#example_wrapper').show();
    $('.eng').css('background', 'white').css('color', 'black')
    $(this).css('background', '#149e51').css('color', 'white')
  })

  $('.resetBtn').on('click', function () {
    $('#orderId').attr('disabled', false).css('cursor', 'pointer').val("");
    $('#example').empty();
  })

});