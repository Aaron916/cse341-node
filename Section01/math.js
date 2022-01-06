exports.compute = function(var1, sign, var2)
{
    let result = 0;
    var2 = parseInt(var2, 10);
    var1 = parseInt(var1, 10);

    if (sign == "+") {
        return var1 + var2;
    }
    else if (sign == "-") {
        return var1 - var2;
    } 
    else if (sign == "*") {
        return var1 * var2;
    } 
    else if (sign == "/") {
        if (var2 != 0)
        {return var1 / var2;}
        else
        {return 0}
    } 
    else {
        console.log("Invalid sign");
        return 0;
    }
    
    return result;
}