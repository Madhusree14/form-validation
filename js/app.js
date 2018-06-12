function addDetails() {
    console.log('Submit button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        if (validateFullName()) {
            if(validateDesignation()){
                if(validateEmp()){
                    if(validateEmail()){
                        if(validateMobile()){
                            if(validateAlterMobile()){
                                postData();
                            }
                            else{
                                alert("Enter alternate mobile number");
                            }
                        }
                        else{
                            alert("Enter mobile number");
                        }
                    }
                    else{
                        alert("Enter email id");                    }
                }
                else{
                    alert("Enter employee id");                }
            }
            else {
                // Display error message for Designation
                alert("Enter designation");            }
        }
        else {
            // Display error message for full Name
            alert("Enter full name");        }
    } else {
        // Display error message for first Name
        alert("Enter first name");    }

}



function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
    }
    return true;
}

function validateDesignation() {
    const designation = $('#designation').val();
    if (designation === '' ) {
        return false;
    }
    return true;
}

function validateEmp() {
    const employeeid = $('#empid').val();
    if (employeeid === '' ) {
        return false;
    }
    return true;
}

function validateEmail(){
    const mail=$("#FormGroupInput").val();
    var reg= /@virtusa.com\s*$/;
    if(reg.test(mail))
    {
        return true;
    }
    else{
        return false;
    }

}


function validateMobile(){
    const mob=$("#example-tel-input").val();
var exp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
if(exp.test(mob))
{
    return true;
}else{
    return false;
}
}

function validateAlterMobile(){
    const mob1=$("#example-tel-input").val();
    var exp1=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(exp1.test(mob1))
    {
        return true;
    }else{
        return false;
    }
}

function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        designation: $('#designation').val(),
        employeeid: $('#empid').val(),
        bloodgroup: $('#FormBloodGroup').val(),
        reasonforissue: $('#inlineFormIssue').val(),
        employeedate: $('#example-date-input').val(),
        email: $("#FormGroupInput").val(),
        mobile: $("#example-tel-input").val(),
        alternatemobile: $("#example-tel-input").val()
    };
    $.ajax({
        type: "POST",
        url: 'https://application-21f88.firebaseio.com/.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});