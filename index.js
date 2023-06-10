const navigation = document.querySelector('.navigation');
const buyButton = document.querySelectorAll('button');
const categoryContent = document.querySelector('.categories-list span');

navigation.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'SPAN') return;
  closeAllSubmenu(e.target.nextElementSibling);
  e.target.nextElementSibling.classList.toggle('sub-menu-active');
});

closeAllSubmenu = (current) => {
  let parents = [];
  if (current) {
    let currentParent = current.parentNode;
    while (currentParent) {
      if (currentParent.classList.contains('navigation')) break;
      if (currentParent.nodeName === 'UL') parents.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }
  const subMenu = document.querySelectorAll('.navigation ul')
  Array.from(subMenu).forEach(item => {
    if (item != current && !parents.includes(item)) item.classList.remove('sub-menu-active');
  })
}

buyButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Товар куплен');
    closeAllSubmenu();
  });
});








