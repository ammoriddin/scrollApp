function foo(){
    const body = document.body,
        sun = document.querySelector("#sun"),
        moon = document.querySelector("#moon"),
        logoImgDark = document.querySelector(".logo-img-dark"),
        logoImg = document.querySelector(".logo-img");
        console.log(body.classList);
        if(body.classList == 'light'){
            sun.classList.remove('hight');
            sun.classList.add('show');
            moon.classList.remove("show");
            moon.classList.add("hight");
            body.classList.remove('light');
            body.classList.add('dark');
            logoImgDark.classList.remove("show");
            logoImgDark.classList.add("hight");
            logoImg.classList.add('show');
            logoImg.classList.remove('hight');
        }else{
            sun.classList.remove('show');
            sun.classList.add('hight');
            moon.classList.remove("hight");
            moon.classList.add("show");
            body.classList.remove('dark');
            body.classList.add('light')
            logoImgDark.classList.remove("hight");
            logoImgDark.classList.add("show");
            logoImg.classList.add('hight');
            logoImg.classList.remove('show');
        }
}

function menuClick() {
    const open = document.querySelector("#open"),
          close = document.querySelector("#close"),
          menu = document.querySelector("#menu");
          
    if(open.classList == "hight"){
        open.classList.remove("hight");
        open.classList.add("show");
        close.classList.remove("show");
        close.classList.add("hight");
        menu.classList.remove("active")
    } else{
        open.classList.remove("show");
        open.classList.add("hight");
        close.classList.remove("hight");
        close.classList.add("show");
        menu.classList.add("active")
    }
}

const menuText = document .querySelector("#menu-a")

function menuTextClick() {
    const open = document.querySelector("#open"),
          close = document.querySelector("#close"),
          menu = document.querySelector("#menu");
        
          if(open.classList == 'hight'){
            open.classList.remove("hight");
            open.classList.add("show");
            close.classList.add("hight");
            close.classList.remove("show");
            menu.classList.remove("active")
          }
}