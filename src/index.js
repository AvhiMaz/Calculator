function myFunction() {
    let num1 = document.getElementById("numOne").value;
    let Opera = document.getElementById("Op").value;
    let num2 = document.getElementById("numTwo").value;


    let ans;
    //swich case statement
    switch (Opera) {
        case '+':
            ans = parseInt(num1) + parseInt(num2);
            document.getElementById('demo').innerHTML = ans;
            break;

        case '-':
            ans = num1 - num2;
            document.getElementById('demo').innerHTML = ans;
            break;

        case '*':
            ans = num1 * num2;
            document.getElementById('demo').innerHTML = ans;
            break;

        case '/':
            ans = num1 / num2;
            document.getElementById('demo').innerHTML = ans;
            break;

        default:
            break;
    }
}