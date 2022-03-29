
// cart
let cart = []

// getting the products
class Products{
  async getProducts(){
    try {
      let result = await fetch('productList.json');
      
      let data = await result.json();
      let products = data;
      products = products.map(item => {
        const {id,name,price,description,details,image} = item;
        console.log(image, name);
        return {id, name, price, description, details, image};
      })
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}
// display products
let productsContainer = document.querySelector('.products_container');
class UI {
  displayProducts(products) {
    let result = '';
    products.forEach(product => {
      
      result += `
      <div class="swiper-slide">
								<div class="product-single">
									<div class="product-image">
										<figure>
											<img src="./assets/images/cream${product.id}.jpg" alt="" />
										</figure>
									</div>
									
									<div class="product-information">
										<h3>${product.name} <a href="#">Cosmetic</a></h3>
										<div class="product_price">
                    &#8358; ${product.price.toLocaleString()}
										</div>
									</div>
								</div>
							</div>
      `
    });
    productsContainer.innerHTML = result;
  }
}

// local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", ()=>{
  const ui = new UI();
  const products = new Products();

  // get all products
  products.getProducts().then(products => ui.displayProducts(products));
})