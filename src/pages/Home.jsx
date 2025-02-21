import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/ban.jpg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/veg recepi.jpeg" class="card-img-top" alt="..." height={400}/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">Vegetarian recipes are a delicious and nutritious way to enjoy plant-based meals, full of fresh ingredients and vibrant flavors.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/non veg recepi.png" class="card-img-top" alt="..." height={400}/ >
      <div class="card-body">
        <h5 class="card-title">Non-Veg Recipes</h5>
        <p class="card-text">Non-vegetarian recipes feature dishes made with meat, poultry, fish, or seafood, offering a wide range of flavors through various spices and cooking techniques.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/Tiffin recepi.jpg" class="card-img-top" alt="..." height={400}/ >
      <div class="card-body">
        <h5 class="card-title">Tiffin Recipes</h5>
        <p class="card-text">Tiffin recipes are quick, portable meals commonly enjoyed for breakfast or lunch, often packed in lunchboxes.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/dessert1.jpg" class="card-img-top" alt="..." height={400}/>
      <div class="card-body">
        <h5 class="card-title">Dessert Recipes</h5>
        <p class="card-text">Dessert recipes are sweet dishes made from ingredients like sugar, chocolate, and fruits, typically served after meals. </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
