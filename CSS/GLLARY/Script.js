let images =document.querySelectorAll('.gallary img')

let popup = document.querySelector(".popup")

let popupimg = document.querySelector(".popup img")

for(img of images)
{
    img.onclick=function()
    {
        popup.style.display='block';
        popupimg.src =this.getAttribute('src')
    }

}

document.querySelector('.popup span').onclick=function()
{
    popup.style.display='none';
}