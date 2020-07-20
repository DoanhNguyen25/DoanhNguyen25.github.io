var issue=
{
    id:1,
    title:'Task 1',
    description:'Task 1',
    type:'task',
    priority:'high',
    allowFor:[
        'back-end',
        'font-end',
        'function-test',
        'performance-test'
    ],
    createdBy:'Doanh',
    assignee:'doanh',
    estimate:'20/03/2020',
    state:'Hit'
}
//function to show object issue
function showIssue()
{
    var infor=document.getElementById('obj');
    infor.innerHTML=JSON.stringify(issue,null,3);
}
///get modal element
var modal=document.getElementById('modalForm');
///get close modal element
var closeBtn=document.getElementsByClassName('btn-close')[0];
//get button open modal
var modalbtn=document.getElementById('modalBtn');
//get save modal element
var saveBtn=document.getElementsByClassName('btn-save')[0];
///event close button
closeBtn.addEventListener('click',closeModal);
// ///function to close modal
function closeModal()
{
    modal.style.display='none';
}
//event click button
modalbtn.addEventListener('click',openModal)
///function to open modal
function openModal()
{
    modal.style.display='block';
    document.form1.title.value=issue.title;
    document.form1.description.value=issue.description;
    document.form1.type.value=issue.type;
    document.form1.priority.value=issue.priority;
    document.form2.createdby.value=issue.createdBy;
    document.form2.assignee.value=issue.assignee;
    document.form2.estimate.value=issue.estimate;
    for(var i=0 ;i < issue.allowFor.length-1;i++)
    {
        document.getElementById(issue.allowFor[i]).checked = true;
    }
}

///event click save 
saveBtn.addEventListener('click',saveModal);
///funciont to save information
function saveModal()
{
    issue.title=document.form1.title.value;
    issue.description=document.form1.description.value;
    issue.type=document.form1.type.value;
    issue.priority=document.form1.priority.value;
    issue.createdBy=document.form2.createdby.value;
    issue.assignee=document.form2.assignee.value;
    issue.estimate=document.form2.estimate.value;
    issue.allowFor=getAllowFor();
    showIssue();
    closeModal();
}
///function to get allowfor value
function getAllowFor()
{
    var a=[];
    var item=document.getElementsByName('allowFor');
    for( var x of item)
    {
        if(x.checked)
        {
            a.push(x.value);
        }
    }
    return a;
}
//event click outside to close modal
window.addEventListener('click',outsideClick)
//function to close modal
function outsideClick(x)
{
    if(x.target == modal)
    {
        modal.style.display='none';
    }
}
