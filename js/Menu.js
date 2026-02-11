
    function delayedShow(element) {
      element.hoverTimer = setTimeout(() => {
        element.classList.add('hovering');
      }, 300);
    }

    function clearTimer(element) {
      clearTimeout(element.hoverTimer);
      element.classList.remove('hovering');
    }

    const cart = {};

    function addToCart(itemName) {
      if(cart[itemName]) {
        cart[itemName]++;
      } else {
        cart[itemName] = 1;
      }
      updateCartUI();
    }

    function updateCartUI() {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = '';

      let totalItems = 0;
      for (const [item, qty] of Object.entries(cart)) {
        totalItems += qty;
        const li = document.createElement('li');
        li.textContent = `${item} x${qty}`;
        cartList.appendChild(li);
      }

      document.getElementById('cart-total').textContent = `Total Items: ${totalItems}`;
    }
    function updateCartUI() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
      
        let totalItems = 0;
        for (const [item, qty] of Object.entries(cart)) {
          totalItems += qty;
      
          const li = document.createElement('li');
          li.textContent = `${item} x${qty}`;
          li.title = "Click to remove one";
          li.style.cursor = "pointer";
                li.addEventListener('click', () => {
            if (cart[item] > 1) {
              cart[item]--;
            } else {
              delete cart[item];
            }
            updateCartUI();
          });
      
          cartList.appendChild(li);
        }
      
        document.getElementById('cart-total').textContent = `Total Items: ${totalItems}`;
      }
      