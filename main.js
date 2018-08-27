var select1="",select2="";
var doc1=null,doc2=null;


function clear()
{
    select1="";
    select2="";
    doc1=null;
    doc2=null;
}

function checkit()
{
  console.log("Funciona el timer");
    if(select1!=select2)
    {
        doc1.src="img/SignoPreg.svg";
        doc2.src="img/SignoPreg.svg";
        
    }

    clear();
}


function voltea(myimg,myid)
{
    console.log(myimg);
    if(document.getElementById(myid).src.indexOf("SignoPreg")==-1)
        return;
    
    if(select1=="" || select2=="")
        document.getElementById(myid).src=("img/"+myimg+".svg");
    if(select1=="") 
    {
        select1=myimg;
        doc1=document.getElementById(myid);
    }
    else if (select2=="")
    {
        select2=myimg; 
        doc2=document.getElementById(myid);
    }
    
}


myimg1=document.getElementById("img1");
myimg1.addEventListener("click",function(){voltea("ch","img1")},false);
myimg1.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg2=document.getElementById("img2");
myimg2.addEventListener("click",function(){voltea("gg","img2")},false);
myimg2.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg3=document.getElementById("img3");
myimg3.addEventListener("click",function(){voltea("is","img3")},false);
myimg3.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg4=document.getElementById("img4");
myimg4.addEventListener("click",function(){voltea("op","img4")},false);
myimg4.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg5=document.getElementById("img5");
myimg5.addEventListener("click",function(){voltea("js","img5")},false);
myimg5.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg6=document.getElementById("img6");
myimg6.addEventListener("click",function(){voltea("js","img6")},false);
myimg6.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg7=document.getElementById("img7");
myimg7.addEventListener("click",function(){voltea("is","img7")},false);
myimg7.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg8=document.getElementById("img8");
myimg8.addEventListener("click",function(){voltea("fb","img8")},false);
myimg8.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg9=document.getElementById("img9");
myimg9.addEventListener("click",function(){voltea("gg","img9")},false);
myimg9.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg10=document.getElementById("img10");
myimg10.addEventListener("click",function(){voltea("ht","img10")},false);
myimg10.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg11=document.getElementById("img11");
myimg11.addEventListener("click",function(){voltea("ff","img11")},false);
myimg11.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg12=document.getElementById("img12");
myimg12.addEventListener("click",function(){voltea("fb","img12")},false);
myimg12.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg13=document.getElementById("img13");
myimg13.addEventListener("click",function(){voltea("ch","img13")},false);
myimg13.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg14=document.getElementById("img14");
myimg14.addEventListener("click",function(){voltea("ff","img14")},false);
myimg14.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg15=document.getElementById("img15");
myimg15.addEventListener("click",function(){voltea("op","img15")},false);
myimg15.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);

myimg16=document.getElementById("img16");
myimg16.addEventListener("click",function(){voltea("ht","img16")},false);
myimg16.addEventListener("click",function(){if(select1!="" && select2!="" )setTimeout(checkit,750)},false);
