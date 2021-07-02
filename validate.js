function validateForm() {
    var d = document.forms["myForm"]["date"].value;
    var m = document.forms["myForm"]["month"].value;
    var y = document.forms["myForm"]["year"].value;

    if(d == null || d == "")
    {
        alert("Please select date.");
    
    }
    if(m == null || m == ""){
        alert("Please select date.");
      
    }
    if(y == null || y == ""){
        alert("Please select date.");
    
    }
    if((m == 4 || m == 6 || m == 9 || m == 11) && d == 31) {
        alert("Selected month contains only 30 days.");
        
    }
    if(m == 2 && d > 29 && (y%4 == 0)) {
        alert("Selected month contains only 29 days.");
   
    }

    if((m == 2) && d > 28) {
        alert("Selected month contains only 28 days.");

    }
    if(y>=2009 && y<=2019)
    {
        alert("Yes its between 2 to 12 years so its valid");
        
    }
    else alert("Not valid because years difference is not between 2 to 12 from current date");
}