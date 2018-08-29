var select1="",select2="";
var doc1=null,doc2=null;
var vidas=10;
var points=0;

function clear()
{
    select1="";
    select2="";
    doc1=null;
    doc2=null;
}

function restartGame()
{
    myimg1.src="img/SignoPreg.svg";
    myimg2.src="img/SignoPreg.svg";
    myimg3.src="img/SignoPreg.svg";
    myimg4.src="img/SignoPreg.svg";
    myimg5.src="img/SignoPreg.svg";
    myimg6.src="img/SignoPreg.svg";
    myimg7.src="img/SignoPreg.svg";
    myimg8.src="img/SignoPreg.svg";
    myimg9.src="img/SignoPreg.svg";
    myimg10.src="img/SignoPreg.svg";
    myimg11.src="img/SignoPreg.svg";
    myimg12.src="img/SignoPreg.svg";
    myimg13.src="img/SignoPreg.svg";
    myimg14.src="img/SignoPreg.svg";
    myimg15.src="img/SignoPreg.svg";
    myimg16.src="img/SignoPreg.svg";
    vidas=10;
    document.getElementById("vidas").innerText="Vidas: "+vidas;
    points=0;
    clear();
}

function checkOut()
{
    if(select1!=select2)
    {
        doc1.src="img/SignoPreg.svg";
        doc2.src="img/SignoPreg.svg";
        vidas--;
        document.getElementById("vidas").innerText="Vidas: "+vidas;
        checkLife();
    }
    else
    {
        points++;
    }

    checkVictory();
    clear();
}

function checkVictory()
{
    if(points==8)
    alert("Felicidades as ganado");
}

function checkLife()
{
    if(vidas<=0)
    {
        alert("Lamentablemente as perdido");
        restartGame();
    }

}

function voltea(myimg,myid)
{
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
        setTimeout(checkOut,750);
    }
    
}


myimg1=document.getElementById("img1");
myimg1.addEventListener("click",function(){voltea("ch","img1")},false);


myimg2=document.getElementById("img2");
myimg2.addEventListener("click",function(){voltea("gg","img2")},false);


myimg3=document.getElementById("img3");
myimg3.addEventListener("click",function(){voltea("is","img3")},false);


myimg4=document.getElementById("img4");
myimg4.addEventListener("click",function(){voltea("op","img4")},false);


myimg5=document.getElementById("img5");
myimg5.addEventListener("click",function(){voltea("js","img5")},false);


myimg6=document.getElementById("img6");
myimg6.addEventListener("click",function(){voltea("js","img6")},false);


myimg7=document.getElementById("img7");
myimg7.addEventListener("click",function(){voltea("is","img7")},false);


myimg8=document.getElementById("img8");
myimg8.addEventListener("click",function(){voltea("fb","img8")},false);


myimg9=document.getElementById("img9");
myimg9.addEventListener("click",function(){voltea("gg","img9")},false);


myimg10=document.getElementById("img10");
myimg10.addEventListener("click",function(){voltea("ht","img10")},false);


myimg11=document.getElementById("img11");
myimg11.addEventListener("click",function(){voltea("ff","img11")},false);


myimg12=document.getElementById("img12");
myimg12.addEventListener("click",function(){voltea("fb","img12")},false);


myimg13=document.getElementById("img13");
myimg13.addEventListener("click",function(){voltea("ch","img13")},false);


myimg14=document.getElementById("img14");
myimg14.addEventListener("click",function(){voltea("ff","img14")},false);


myimg15=document.getElementById("img15");
myimg15.addEventListener("click",function(){voltea("op","img15")},false);


myimg16=document.getElementById("img16");
myimg16.addEventListener("click",function(){voltea("ht","img16")},false);

