const btn_menu = document.querySelectorAll('.menu_mobile')
btn_menu.forEach(img=>{
  img.addEventListener('click', ()=>new Navigate().btnMenu())
})



function Navigate(){
  this.btnMenu = function(){
    btn_menu.forEach(el=>el.classList.toggle('disable'))
  }
}
