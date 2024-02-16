fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card border border-success border-2 mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 700px;">
                    <div class="row g-0">
                    <div class="col-4">
                        <img src="${db.image}" class="card-img-top mt-3 mb-3" alt="${db.title}">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        
                            <h4 class="card-title text-center">${db.title}</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Precio:</strong> ${db.price}</li>
                            <li class="list-group-item"><strong>Categoría:</strong> ${db.category}</li>
                            <li class="list-group-item"><strong>Descripción:</strong> ${db.description}</li>
                        </ul>
                    </div>
                    </div>
                    </div>`
        }
        document.getElementById("lista").innerHTML = card
    })