console.log("index is connected")
function loadCtagories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
  .then(data=>displaycategories(data.categories))
  
}
function displaycategories(categories) {
  const categoryContainer = document.getElementById("category-container")
  for (let cat of categories) {
    console.log(cat)
    const categoryDiv = document.createElement("div")
    categoryDiv.innerHTML = `<button class="btn btn-sm hover: bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`;
    
    categoryContainer.append(categoryDiv);
  }
}
loadCtagories()