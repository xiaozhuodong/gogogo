function gogog(){
    if(uName()&&UserPwd()&&uPhone()&&againPwd()){
        return true;
    }
    return false;
}
function againPwd(){
    var apassword = document.getElementById("apassword").value;
    var upass = document.getElementById("password").value;
    var aPwd = document.getElementById("aPwd");
    if(apassword!=upass){
        aPwd.style.display = "block";
        aPwd.innerText = "*两次密码不一致";
        return false;
    }
    return true;
}
function uPhone(){
    var phone = document.getElementById("phone").value;
    var uPhone = document.getElementById("uPhone");
    for(var i=0;i<phone.length;++i){
    if(!(phone.charAt(i)>=0&&phone.charAt(i)<=9)){
        uPhone.style.display = "block";
        uPhone.innerText = "*电话号码只能有数字";
        return false;
    }   
}return true;
}
function uName(){
    var user_name = document.getElementById("user_name").value;
    var uName = document.getElementById("uName");
    if(user_name.length<3||user.length>10){
        uName.style.display = "block";
        uName.innerText = "*用户名必须在3至10个字以内";
        return false;
    }
    return true;
}
function UserPwd(){
    var upass = document.getElementById("password").value;
    var uPwd = document.getElementById("uPwd");
    if(upass.length<6||upass.length>15){
        uPwd.style.display = "block";
        uPwd.innerText = "*密码必须在6至15个字以内";
        return false;
    }else{
        var x=0;
        var d=0;
        var s=0;
        for(var i=0;i<upass.length;++i){
            if(!((upass.charAt(i)>0||upass.charAt(i)<9))&&!((upass.charAt(i)<'z')||(upass.charAt>'a'))&&!((upass.charAt(i)<'Z')||(upass.charAt>'A'))){
                uPwd.style.display = "block";
                uPwd.innerText = "*密码中不能有特殊字符";
                return false;
            }else if(upass.charAt(i)>=0&&upass.charAt(i)<=9){
                s++;
            }else if(upass.charAt(i)>='a'&&upass.charAt(i)<='z'){
                x++;
            }else if(upass.charAt(i)>='A'&&upass.charAt(i)<='Z'){
                d++;
            }
        }    
        if(x==0||d==0||s==0){
            uPwd.style.display = "block";
            uPwd.innerText = "*密码必须要大写字母和小写字母和数字的组合";
        }
}
return true;
}


/*function goRegister(){
    var user_name = document.getElementById("user_name").value;
    var phone = document.getElementById("phone").value;
    var upass = document.getElementById("password").value;
    var apassword = document.getElementById("apassword").value;
    var captcha = document.getElementById("captcha").value;

    var uName = document.getElementById("uName");
    var uPhone = document.getElementById("uPhone");
    var uPwd = document.getElementById("uPwd");
    var uCode = document.getElementById("uCode");
    var aPwd = document.getElementById("aPwd");
    
    if(user_name.length<3||user.length>10){
        uName.style.display = "block";
        uName.innerText = "*用户名必须在3至10个字以内";
        return false;
    }

    if(upass.length<6||upass.length>15){
        alert(2);
        uPwd.style.display = "block";
        uPwd.innerText = "*密码必须在6至15个字以内";
        return false;
    }else {
    var x=0;
    var d=0;
    var s=0;
    for(var i=0;i<password.length;++i){
        if((upass.charAt(i)<0||upass.charAt(i)>9)&&(upass.charAt(i)>'z')||(upass.charAt<'z')){
            uPwd.style.display = "block";
            uPwd.innerText = "*密码中不能有特殊字符";
            return false;
        }else if(upass.charAt(i)>=0&&upass.charAt(i)<=9){
            s++;
        }else if(upass.charAt(i)>='a'&&upass.charAt(i)<='z'){
            x++;
        }else if(upass.charAt(i)>='A'&&upass.charAt(i)<='Z'){
            d++;
        }
        if(x==0||d==0||s==0){
            uPwd.style.display = "block";
            uPwd.innerText = "*密码必须要大写字母和小写字母和数字的组合";
        }
    }}
    return true;
    }*/



 function NameFocus(){document.getElementById("uName").style.display = "none";}
 function PhoneFocus(){document.getElementById("uPhone").style.display = "none";}
 function PwdFocus(){document.getElementById("uPwd").style.display = "none";}
 function CodeFocus(){document.getElementById("uCode").style.display = "none";}
 function ApwdFocus(){document.getElementById("aPwd").style.display = "none";}