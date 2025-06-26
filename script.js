const input = document.getElementById('image-url');
const addBtn = document.getElementById('add-image');
const deleteBtn = document.getElementById('delete-image');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Agregar imagen
addBtn.addEventListener('click', () => {
  const url = input.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;

    // Selección de imagen
    img.addEventListener('click', () => {
      if (selectedImage) selectedImage.classList.remove('selected');
      img.classList.add('selected');
      selectedImage = img;
    });

    gallery.appendChild(img);
    input.value = ''; // limpiar campo
  }
});

// Eliminar imagen seleccionada
deleteBtn.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// También permitir agregar presionando "Enter"
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});
