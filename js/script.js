let cartCount = 0;
let cartItems = [];

function addToCart(productName) {
  cartCount++;
  cartItems.push(productName);
  document.getElementById('cart-count').textContent = cartCount;
  updateCartView();
  showModal(`${productName} has been added to your cart.`);
}

function updateCartView() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '1em';
    removeBtn.style.background = '#dc3545';
    removeBtn.style.color = '#fff';
    removeBtn.style.border = 'none';
    removeBtn.style.padding = '0.3em 0.6em';
    removeBtn.style.borderRadius = '4px';
    removeBtn.style.cursor = 'pointer';

    removeBtn.onclick = () => {
      cartItems.splice(index, 1);
      cartCount--;
      document.getElementById('cart-count').textContent = cartCount;
      updateCartView();
    };

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}


function toggleCart() {
  const panel = document.getElementById('cart-panel');
  panel.classList.toggle('hidden');
}

function showModal(message) {
  const modal = document.getElementById('popup-modal');
  const msg = document.getElementById('popup-message');
  msg.textContent = message;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('popup-modal');
  modal.classList.add('hidden');
}
