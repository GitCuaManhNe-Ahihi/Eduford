const btn_menu = document.querySelector('.menu-btn')
const btn_close = document.querySelector('.close-btn')
const menu_res = document.querySelector('.menu-responsive')
const overlay =  document.querySelector('.overlay_responsive')

btn_menu.addEventListener('click',()=>
{
    menu_res.classList.toggle('active')
    overlay.classList.toggle('active')
    btn_menu.classList.toggle('active')
})
btn_close.addEventListener('click',()=>
{
    menu_res.classList.remove('active')
    overlay.classList.remove('active')
    btn_menu.classList.remove('active')
})
overlay.addEventListener('click',()=>
{
    menu_res.classList.remove('active')
    overlay.classList.remove('active')
    btn_menu.classList.remove('active')
})