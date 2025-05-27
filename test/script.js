import { db, storage, collection, addDoc, ref, uploadBytes, getDownloadURL } from './firebase.js';

const form = document.getElementById('carForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(this);
        const carData = {};
        formData.forEach((value, key) => {
            carData[key] = value;
        });

        const errors = [];
        
        if (carData.type === 'sale' && carData.price < 1000) {
            errors.push('Price must be at least 1000 for sale listings');
        }
        
        if (carData.mileage < 0) {
            errors.push('Mileage cannot be negative');
        }
        
        if (carData.year < 1900 || carData.year > 2025) {
            errors.push('Invalid year entered');
        }

        if (errors.length > 0) {
            throw new Error(errors.join('\n'));
        }

        const imageFile = formData.get('image');
        if (!imageFile) {
            throw new Error('Please select an image');
        }

        const storageRef = ref(storage, `cars/${Date.now()}-${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        carData.imageUrl = downloadURL;
        carData.timestamp = new Date().toISOString();
        
        const docRef = await addDoc(collection(db, 'cars'), carData);
        
        alert('Car listing successfully saved to Firebase!');
        this.reset();
        
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }
});
