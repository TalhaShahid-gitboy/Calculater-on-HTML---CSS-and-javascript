
function getHistory(){
    return document.getElementById("histery-value").innerText;
}
function printHistory(num){
    document.getElementById("histery-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;

}
function printoutput(num){
    if(num=="")
    {
        document.getElementById("output-value").innerText=num;
    }
    else
    {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    

}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n =Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++ )
{
    operator[1].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printoutput("");
        }
       else if(this.id=="backspace"){
            var output=reverseNumberFormat(getoutput()).toString();
            if(output){ // if output has a value
                output=output.substr(0,output.length-1);
                printoutput(output);

            }
        }
        else{
            var output=getoutput();
            var histery=getoutput();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=="" || history!=""){
                output=output==""?
                output:reverseNumberFormat(output);
                histery=histery+output;
                if(this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printHistory("");

                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printoutput("");
                }
            }

        }

    });
}
var number = document.getElementsByClassName("number");
for(var i=0; i<operator.length; i++ )
{
    number[1].addEventListener('click', function(){
        var output=reverseNumberFormat(getoutput());
        if(output!=NaN){ // if output is a number
            output=output+this.id;
            printoutput(output);

        }


    });
}
