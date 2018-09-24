function validateForm() {
    var x = document.forms["signup"]["firstName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        $('#SignUpSubmit').modal('show');
    }

}
