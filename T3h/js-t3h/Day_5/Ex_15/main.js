function output(num)
{
    document.form.text.value=document.form.text.value+num; 
}
function equal()
{
    var exp=document.form.text.value;
    document.form.text.value=eval(exp);
    
}function clean()
{
    document.form.text.value = "";
}
function dell()
{
    var exp= document.form.text.value;
    document.form.text.value = exp.substring(0, (exp.length -1));
}