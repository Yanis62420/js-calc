'use strict'

const ButtonPlus = document.createElement('button');
ButtonPlus.textContent = "+";
ButtonPlus.id = "operators";

const ButtonLess = document.createElement('button');
ButtonLess.textContent = "-";
ButtonLess.id = "operators";

const ButtonMultiply = document.createElement('button');
ButtonMultiply.textContent = "*";
ButtonMultiply.id = "operators" ;

const ButtonDivide = document.createElement('button');
ButtonDivide.textContent = "/";
ButtonDivide.id = "operators" ; 

const Button0 = document.createElement('button');
Button0.textContent = "0";
Button0.id = "numbers" ;

const Button1 = document.createElement('button');
Button1.textContent = "1";
Button1.id = "numbers";

const Button2 = document.createElement('button');
Button2.textContent = "2";
Button2.id = "numbers";

const Button3 = document.createElement('button');
Button3.textContent = "3";
Button3.id = "numbers";

const Button4 = document.createElement('button');
Button4.textContent = "4";
Button4.id = "numbers";

const Button5 = document.createElement('button');
Button5.textContent = "5";
Button5.id = "numbers";

const Button6 = document.createElement('button');
Button6.textContent = "6";
Button6.id = "numbers";

const Button7 = document.createElement('button');
Button7.textContent = "7";
Button7.id = "numbers";

const Button8 = document.createElement('button');
Button8.textContent = "8";
Button8.id = "numbers";

const Button9 = document.createElement('button');
Button9.textContent = "1";
Button9.id = "numbers";
const Div = document.createElement('div');
// ?? Création du bouton 
var numbers = [ Div.innerHTML ]; 
var operations = [ '' ];

 
var clickOnCalculatorButton = function (button)
    {
        if(button.tagName.toLowerCase == 'button') 
        {
            if(!isNaN(button.innerHTML))
            {
                if(nextOperation='')
                    numbers[numbers.length -1] += button.innerHTML;
            }
            else if(button.innerHTML == '±')
            {
                for(var i=0; i < numbers.length; i++)
                    numbers[i] = - numbers[i];
            }
            else if(button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '×' || button.innerHTML == '÷' || button.innerHTML == '%')
            {
                operations(button.innerHTML)
            }
            else if(button.innerHTML == 'CE')
            {
                numbers = [];
                operations = [];
            }
            else if(button.innerHTML == '←')
            {
                if(numbers.length >= operations.length)
                    numbers.pop();
                else
                    operations.length;
            }
            else if(button.innerHTML == '=')
            {
                for(var i=0; i < operations.length; i++) // operator precedence is not respected
                {
                    if(operations[i] == '+')
                        numbers[0] += numbers[i+1].pop();
                    else if(operations[i] == '-')
                        numbers[0] -= numbers[i+1].pop();
                    else if(operations[i] == '×')
                        numbers[0] *= numbers[i+1].pop();
                    else if(operations[i] == '÷')
                        numbers[0] /= numbers[i+1].pop();
                    else if(operations[i] == '%')
                        numbers[0] %= numbers[i+1].pop();
                }
            }
            else
            {
                alert('Action inconnue');
            }
             
            for(var i=0; i < numbers.length; i++)
                screen.innerHTML += numbers[i] + operations[i];
        }
    };
 