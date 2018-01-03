function listMenuScrollItems()
{
    var parent = document.getElementById("listTopicsMenu");

    for(var i=0; i<100; i++)
    {
        parent.innerHTML += "<div style=\"height:90%;width:10%;\">"+
        "<img style=\"height:100px;width:50px;float:left;\" src=\"HTML/ProjFiles/Assets/NextIcon.png\">"+
        "</div>";
    }
}