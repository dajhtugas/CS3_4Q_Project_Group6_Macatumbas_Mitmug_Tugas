var fname;
var lname;
var email;
var pword;
var cnum;
var reason;
var sex;

function submitting() {
    //getting value
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    pword = document.getElementById("pword").value;
    cnum = document.getElementById("cnum").value;
    reason = document.getElementById("reason").value;
    sex = document.querySelector('input[name="opt"]:checked').value;

    //storing in localStorage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("pword", pword);
    localStorage.setItem("cnum", cnum);
    localStorage.setItem("reason", reason);
    localStorage.setItem("opt", sex);

    //open the second page
    window.location.href = "secondpage.html";
}

document.addEventListener('DOMContentLoaded', (event) => {
    let firstnamedata = localStorage.getItem("fname");
    let lastnamedata = localStorage.getItem("lname");
    let emaildata = localStorage.getItem("email");
    let cnumdata = localStorage.getItem("cnum");
    let reasondata = localStorage.getItem("reason");

    if (firstnamedata) document.getElementById("whatfname").innerText = firstnamedata;
    if (lastnamedata) document.getElementById("whatlname").innerText = lastnamedata;
    if (emaildata) document.getElementById("whatemail").innerText = emaildata;
    if (cnumdata) document.getElementById("whatcnum").innerText = cnumdata;
    if (reasondata) document.getElementById("tellmewhy").innerText = reasondata;
});
