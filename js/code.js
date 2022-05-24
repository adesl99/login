function validate()
{
var username=document.getElementById("username").value;
var passowrd = document.getElementById("password").value;
if(username=="admin" && passowrd =="user")
{
alert("login is succesful");

return false;

}
else{
    alert("login failed");
}


}