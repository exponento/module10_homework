const btn = document.getElementById('btn');
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;
btn.addEventListener('click', () => {alert(`Высота экрана: ${height} px  Ширина экрана: ${width}px`)})