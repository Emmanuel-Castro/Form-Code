function getFormData() {
  var getFirstName, getLastName, getRegion, getMail, getPassword;

    getFirstName = document.getElementById("firstName").value;
    getLastName = document.getElementById("lastName").value;
    getRegion = document.getElementById("getRegion").value;
    getMail = document.getElementById("mail").value;
    getPassword = document.getElementById("password").value;


  var dataResult = "First Name: " + getFirstName + "<br>" + "Last Name: " + getLastName + "<br>" +
  "Region: " + getRegion + "<br>" + "Mail: " + getMail + "<br>" + "Password: " + getPassword;

  document.getElementById('resultCont').innerHTML = dataResult;
}
