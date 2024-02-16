fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5" style="width: 18rem;">
                        <img src="${db.image}" class="card-img-top" alt="${db.title}">
                        <div class="card-body">
                            <h3 class="card-title">${db.title}</h3>
                            <h5 class="card-title">${db.price}</h5>
                            <h6 class="card-title">${db.category}</h6>
                            <p class="card-text">${db.description}</p>
                        </div>
                     </div>`
        }
        document.getElementById("lista").innerHTML = card
    })