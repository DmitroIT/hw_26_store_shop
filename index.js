const navigation = document.querySelector('.navigation');
const buyButton = document.querySelectorAll('button');
const categoryContent = document.querySelector('.categories-list span');
const formConteiner = document.querySelector('.form')
const table = document.querySelector('table')

navigation.addEventListener('click', (e) => {

  //console.log(e.currentTarget)
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

function closeNavigation() {
  navigation.style.display = 'none';
}

buyButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    closeNavigation();
    formConteiner.style.display = 'block';
  });
});
//-------------------------------------
const fullNameInput = document.querySelector('#fullname');
const locationInput = document.querySelector('#location');
const stockInput = document.querySelector('#stocks');
const payOptionsInput = document.querySelector('input[name="payment_options"]:checked');
const quantityInput = document.querySelector('#quantity');
const comentInput = document.querySelector('#coment');

// отправка формы
document.querySelector('#signup').addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm()
});

const validateForm = () => {
  const fullName = (fullNameInput.value).replace(/[^\p{L}\s]/gu, "").replace(/\d+/g, "").replace(/\s+/g, " ").trim();
  const quantity = +(quantityInput.value);

  const location = locationInput.value;
  const stock = stockInput.value;
  const payOptions = payOptionsInput.value;

  const coment = comentInput.value
  const orderInfo = document.querySelector('#orderInfo');
  const fullOrderInfo =
    `
    <caption>информация по заказу</caption>
    <tr>
      <th>ФИО:</th>
      <td>${fullName}</td>
    </tr>
    <tr>
      <th>населеный пункт:</th>
      <td>${location}</td>
    </tr>
    <tr>
      <th>склад:</th>
      <td>${stock}</td>
    </tr>
    <tr>
      <th>вариант оплаты:</th>
      <td>${payOptions}</td>
    </tr>
    <tr>
      <th>количество товара:</th>
      <td>${quantity}</td>
    </tr>
    <tr>
      <th>коментарий к заказу:</th>
      <td>${coment}</td>
    </tr>
  `;
  orderInfo.innerHTML = fullOrderInfo;
  //------------------------------
    if (fullName === '') {
      alert('Введите ФИО');
      return false;
    }

    if (quantity <= 0 || isNaN(quantity)) {
      alert('Введите количество товара');
      return false;
    }
    table.style.display = 'block';
    formConteiner.style.display = 'none';
    return true;
  }
  

