document.getElementById("value").innerHTML=0;
let string = "";
let buttons = document.querySelector(".container");
buttons.addEventListener("keypress", (e) => {
if((e.key.codePointAt(0)>=48 && e.key.codePointAt(0)<=57) || e.key.codePointAt(0)==46 || e.key=="+" || e.key=="-" || e.key=="*" || e.key=="/" || e.key=="%" || e.key=="Delete" ||e.key=="Enter" ||e.key=="=")    {
    
    if (e.key == "=") {
        var show=eval(string)
        document.getElementById("value").innerHTML = show;
        string="";
        console.log(show);
    } 
    
    else if(e.key=="Enter"){
        var show=eval(string)
        document.getElementById("value").innerHTML = show;
        console.log(show);
    }

    else if (e.key == "+") {
        if (string != "") {
            if (string.charAt(string.length - 1) != "+") string = string + "+";
            document.getElementById("value").innerHTML = string;
        }
    } 
    else if (e.key == "-") {
        if (string.charAt(string.length - 1) != "-")
            if (string != "") {
                string = string + "-";
                document.getElementById("value").innerHTML = string;
            }
    } 
    else if (e.key == "/") {
        if (string.charAt(string.length - 1) != "/" && string!==""){
            string = string + "/";
            document.getElementById("value").innerHTML = string;
        }
    }

    else if (e.key == "*") {
        if (string != "") {
            if (string.charAt(string.length - 1) != "*") string = string + "*";
            document.getElementById("value").innerHTML = string;
        }
    }
    else if (e.key == "%") {
        if (string != "") {
            string = parseInt(eval(string)) / 100;
            console.log("asd");
            console.log(typeof string);
            document.getElementById("value").innerHTML = string;
        }
    }

    else if(e.key=="."){
        if(string!=""){
            if (string.charAt(string.length - 1) != "."){
                string=string+"."
                document.getElementById("value").innerHTML=string;
            }
        }
    }

    else if (e.key == "Delete") {
        string = "";
        document.getElementById("value").innerHTML = string;
    } 

    else {
        if(string=="0"){
            string = string.toString().slice(0, -1);
            string = string + e.key;
            document.getElementById("value").innerHTML = string;
        }
        else{
            string = string + e.key;
            document.getElementById("value").innerHTML = string;

        }
    }

    if(document.getElementById("value").innerHTML=="Infinity"){
        var icon=document.getElementById("infinity").innerHTML;
        document.getElementById("value").innerHTML=icon;
    }
}

});

buttons.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        string = string.toString().slice(0, -1);
        document.getElementById("value").innerHTML = string;
    }

    if (e.key == "Escape") {
        string = "0";
        document.getElementById("value").innerHTML = string;
    }

    if(string==""){
        string = "0";
        document.getElementById("value").innerHTML = string;
    }

});

function change() {
  string = parseInt(string) * -1;
  document.getElementById("value").innerHTML = string;
}

function del() {
  string = string.toString().slice(0, -1);
}





let container=document.querySelectorAll('.button');
Array.from(container).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            var show=eval(string)
            document.getElementById("value").innerHTML = show;
            string="";
        }   

        else if(e.target.innerHTML=="+"){
            if(string!=""){
                if(string.charAt(string.length-1)!="+")
                string=string+"+"
                document.getElementById("value").innerHTML=string;    
            }
        }
        
        else if(e.target.innerHTML=="-"){
            if(string.charAt(string.length-1)!="-"){
                if(string!=""){
                    string=string+"-"
                    document.getElementById("value").innerHTML=string;   
                }
            }
        }
    
        else if(e.target.innerHTML=="/"){
            if(string.charAt(string.length-1)!="/"){
                if(string!=""){
                    string=string+"/"
                    document.getElementById("value").innerHTML=string;
                }
            }
        }
        
        else if(e.target.innerHTML=="AC"){
            string="0";
            document.getElementById("value").innerHTML=string;
        }

        else if(e.target.innerHTML=="C"){
            string=string.toString().slice(0,-1);
            document.getElementById("value").innerHTML=string;
        }

        else if(e.target.innerHTML=="X"){
            if(string!=""){
                if(string.charAt(string.length-1)!="*")
                string=string+"*";
                document.getElementById("value").innerHTML=string;
            }
        }
        
        else if(e.target.innerHTML=="%"){
            if(string!=""){
                string=parseInt(eval(string))/100;
                document.getElementById("value").innerHTML=string;
            }
        }


        else if(e.target.innerHTML=="."){
            if(string!=""){
                if (string.charAt(string.length - 1) != "."){
                    string=string+"."
                    document.getElementById("value").innerHTML=string;
                }
            }
        }


        else if(e.target.innerHTML=="+/-"){

        }
        
        
        
        else{
            if(string=="0"){
                string = string.toString().slice(0, -1);
                string = string + e.target.innerHTML;
                document.getElementById("value").innerHTML = string;
            }
            else{
                string = string + e.target.innerHTML;
                document.getElementById("value").innerHTML = string;
            }
        }

        if(document.getElementById("value").innerHTML=="Infinity"){
            var icon=document.getElementById("infinity").innerHTML;
            document.getElementById("value").innerHTML=icon;
        }
    })
})












