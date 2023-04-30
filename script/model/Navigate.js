class  Navigate{
  constructor(){

  }

  btnMenu(btn_menu){
    btn_menu.forEach(el=>el.classList.toggle('disable'))
  }
}

const btn_menu = document.querySelectorAll('.btn-menu img')
btn_menu.forEach(img=>{
  img.addEventListener('click', ()=>new Navigate().btnMenu(btn_menu))
})