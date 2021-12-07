const btn = document.getElementById('btn');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
btn.addEventListener('click', magic);
function magic (){
    if (icon1.style.display == 'contents'){
        icon1.style.display = 'none';
        icon2.style.display = 'contents';
    } else {
        icon1.style.display = 'contents';
        icon2.style.display = 'none';
    }
};
