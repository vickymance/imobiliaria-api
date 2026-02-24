export function createProperty({
  id,
  city,
  neighborhood,
  street,
  size,
  bedrooms,
  type,
  garage,
  price,
  images
}) {
  return {
    id,
    city,
    neighborhood,
    street,
    size,
    bedrooms,
    type, // casa ou apartamento
    garage, // true ou false
    price,
    images: images || []
  };
}