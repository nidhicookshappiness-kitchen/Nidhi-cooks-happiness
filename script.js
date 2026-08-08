const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '22px 7vw';
    nav.style.background = '#fffaf0';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.borderBottom = '1px solid #e6d8c2';
  }
});