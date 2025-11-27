export const validateProduct = (product, fileRequired = true) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor a cero";
  }

  if (!product.description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!product.category.trim()) {
    errors.category = "La categoria es obligatoria";
  }

  if (fileRequired && !product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};
