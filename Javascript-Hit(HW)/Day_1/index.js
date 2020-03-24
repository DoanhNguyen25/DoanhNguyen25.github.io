// function xử lý giải phương trình bậc hai
function quadratic()
{
    var a=document.getElementById('numberA').value;
    var b=document.getElementById('numberB').value;
    var c=document.getElementById('numberC').value;
    var result=document.getElementById('result');
    if(isNaN(a) || isNaN(b) || isNaN(c))
    {
        result.innerText="ERROR";
    }
    else
    {
        var delta=b*b - 4*a*c;
        if(a !== 0 )
        {
            if(delta < 0)
            {
                result.style.color='red';
                result.innerText="Phương trình vô nghiệm.";
            }
            else if(delta > 0)
            {
                var x1=(-b+Math.sqrt(delta))/(2*a);
                var x2=(-b-Math.sqrt(delta))/(2*a);
                result.innerText="nghiệm x1="+ x1 + " | " + "nghiệm x2=" + x2;
            }
            else
            {
                result.innerText= "Phương trình có nghiệm kép: x =" + (-b/(2*a));
            }
        }
        else
        {
            result.innerText="Phương trình có nghiệm x ="+(-c/b);
        }
    }
}
function reset()
{
    // reset for Bài 1
    var a=document.getElementById('numberA');
    var b=document.getElementById('numberB');
    var c=document.getElementById('numberC');
    var result=document.getElementById('result');
    a.value=" ";
    b.value=" ";
    c.value=" ";
    result.innerText=" ";



    // reset for Bài 2
    var month=document.getElementById('Month');
    var year = document.getElementById('Year');
    var result2=document.getElementById('result2');
    month.value="1";
    year.value=" ";
    result2.innerText=" ";



    // reset for Bài 3
    var a=document.getElementById('prime');
    var result=document.getElementById('result3');
    a.value=" ";
    result.innerText=" ";

}

// function xử lý in ra ngày trong tháng
function date()
{
    var month=document.getElementById('Month').value;
    var year = document.getElementById('Year').value;
    var result=document.getElementById('result2');
    if(year===null)
    {
        result.innerText="Mời bạn nhập đầy đủ thông tin";
    }
   
    switch(month)
    {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            {
                result.innerText="Tháng "+month+" năm "+year+" có 31 ngày.";
                break;
            }
        case '4':
        case '6':
        case '9':
        case '11':
            {
                result.innerText="Tháng "+month+" năm"+year+" có 30 ngày.";
                break;
            }
        case '2':
        {
            if(year % 4==0 || year % 400==0 || year % 100==0)
            {
                result.innerText="Tháng 2 có 29 ngày.";
                break;
            }
            else
            {
                result.innerText="Tháng 2 có 28 ngày.";
                break;
            }
            break;
        }
        default:
            {
                result.innerText="ERROR";
                break;
            }
        
    }
}

// function xử lý in ra các số nguyên tố trong đoạn [1,n];
function check(x)
{
    if(x<2)
    return -1;
    if(x===2)
    {
        return 1;
    }
    else
    {
        var count=0;
        for(var i=2;i<=Math.sqrt(x);i++)
        {
            if(x%i==0)
            {
                count++;
            }
        }
        if(count == 0)
        {
            return 1;
        }
        else
        {
            return -1;
        }
        

    }
}
function displayPrime()
{
    var arr=[];
    var a=document.getElementById('prime').value;
    var result=document.getElementById('result3');
    var dem=0;
    for(var i=1;i<=a;i++)
    {
        if(check(i)==1)
        {
            dem++;
            arr.push(i);
        }

    }
    if(dem!=0)
    {
        result.innerText=arr;
    }
    else
    {
        result.innerText="Không phải số nguyên tố!";
    }
    
}