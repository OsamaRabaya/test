document.addEventListener('DOMContentLoaded', function() {
    const carForm = document.getElementById('carForm');
    const carsList = document.getElementById('carsList');

    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
    }

    if (carForm) {
        carForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const carData = {
                name: document.getElementById('carName').value,
                price: document.getElementById('price').value,
                year: document.getElementById('year').value,
                description: document.getElementById('description').value,
                image: document.getElementById('image').files[0]
            };

            // Here you would typically make an API call to save the car
            // For now, we'll just add it to the local storage
            const cars = JSON.parse(localStorage.getItem('cars') || '[]');
            cars.push(carData);
            localStorage.setItem('cars', JSON.stringify(cars));
            
            // Reset form
            carForm.reset();
            
            // Update UI
            displayCars();
            
            alert('تم إضافة السيارة بنجاح!');
        });
    }

    function displayCars() {
        const cars = JSON.parse(localStorage.getItem('cars') || '[]');
        carsList.innerHTML = '';

        cars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.className = 'car-card';
            carElement.innerHTML = `
                <h3>${car.name}</h3>
                <p>السعر: ${car.price} ريال</p>
                <p>سنة الصنع: ${car.year}</p>
                <p>${car.description}</p>
            `;
            carsList.appendChild(carElement);
        });
    }

    // Initial display of cars
    displayCars();
});
