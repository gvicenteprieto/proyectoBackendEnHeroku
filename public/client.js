
window.onload = () => {
    const socket = io();
  
    socket.on('messages', data => {
      loadMessages(data)
    });
  
    function loadMessages(data) {
      const html = data.map((elem, index) => {
        return (`<div class="msgsChat">
                  <span class="email"><b>${elem.email}</b></span>
                  <span class="dateMsg" >${elem.date}</span>
                </div>
                <div><span class="msg">${elem.text}</div>
                <hr>`)
      }).join(" ");
      document.getElementById('messages').innerHTML = html;
    }
  
    document.getElementById('chatForm').addEventListener('submit', (e) => {
      e.preventDefault()
      addMsg()
    })
    function addMsg() {
      console.log("nuevoMensaje")
      const newMsg = {
        email: document.getElementById('email').value,
        text: document.getElementById('text').value
      }
      socket.emit('message-new', newMsg)
    }
  
  
    socket.on('products', data => {
      loadProducts(data)
    })
  
    function loadProducts(data) {
      const html = data.map((elem, index) => {
        return (`<div >
                  <img src="${elem.url}" alt="">
                  <span class="name">${elem.name}</span>
                  <span class="price">${elem.price}</span>
                </div>`)
      }).join(" ");
      document.getElementById('products').innerHTML = html;
    }
  
    document.getElementById('productForm').addEventListener('submit', (e) => {
      e.preventDefault()
      addProduct()
    })
    function addProduct() {
      console.log("nuevoProducto")
      const newProduct = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        url: document.getElementById('url').value
      }
      socket.emit('product-new', newProduct)
    }
  }