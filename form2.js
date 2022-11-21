function Sum(){
    var a= document.getElementById("gta").value;
    var b=document.getElementById("gtb").value;
    var tong=parseFloat(a)+parseFloat(b);
    //tong la so
    if(!isNaN(tong)){
        document.getElementById("gtc").value=tong;
        document.getElementById("log").innerText="";
    }
    else{//tong khong phai la gia tri
        if(isNaN(a)&&isNaN(b)){//ca a va b deu khong phai la so
            document.getElementById("log").innerText="Vui long nhap lai gia tri so cho a va b";
            //khoi tao lai cho a va b rong
            document.getElementById("gta").value=null;
            document.getElementById("gtb").value=null;
        }
        else
            if(isNaN(a)){//a khong phai so
                document.getElementById("log").innerText="Vui long nhap lai gia tri so cho a";
                //khoi tao lai cho a rong
                document.getElementById("gta").value=null;
            }
            else{//b khong phai la so
                document.getElementById("log").innerText="Vui long nhap lai gia tri so cho b";
                //khoi tao lai cho b rong
                document.getElementById("gtb").value=null;
            }
    }
}
function Minus(){
    var a= document.getElementById("gta").value;
    var b=document.getElementById("gtb").value;
    var hieu=parseFloat(a)-parseFloat(b);
    //tong la so
    if(!isNaN(hieu)){
        document.getElementById("gtc").value=hieu;
        document.getElementById("log").innerText="";
    }
}
function Nhan(){
    var a= document.getElementById("gta").value;
    var b=document.getElementById("gtb").value;
    var tich=parseFloat(a)*parseFloat(b);
    //tong la so
    if(!isNaN(tich)){
        document.getElementById("gtc").value=tich;
        document.getElementById("log").innerText="";
    }
}
function Chia(){
    var a= document.getElementById("gta").value;
    var b=document.getElementById("gtb").value;
    var thuong=parseFloat(a)/parseFloat(b);
    //tong la so
    if(!isNaN(thuong)){
        document.getElementById("gtc").value=thuong;
        document.getElementById("log").innerText="";
    }
}
//thuc hien ham reset
function reset(){
    document.getElementById("gta").value=null;
    document.getElementById("gtb").value=null;
    document.getElementById("gtc").value=null;
}