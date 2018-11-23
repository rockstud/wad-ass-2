function formvalidatefunc()                                    
{ 
    var fname = document.forms["RegForm"]["fName"];
    var lname = document.forms["RegForm"]["lName"];	
    var email = document.forms["RegForm"]["Email"];    
     

    
	
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        name.focus(); 
        return false; 
    } 
   
    if (lname.value == "")                               
    { 
        window.alert("Please enter your last name"); 
        name.focus(); 
        return false; 
    } 
    
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
	//Other way to validate the email address
    /*
	if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } */
	
	if (!validateEmail(email.value))                                  
    { 
        window.alert("Please enter valid email."); 
        email.focus(); 
        return false; 
    }
    if((!fname.value == "") && (!lname.value == "") && (!email.value == ""))
	{		
    return true;
    }
    else
     return formvalidatefunc();		
}


function validateEmail(email) 
{
    var re = /\S+@\S+/;
    return re.test(email);
}
	