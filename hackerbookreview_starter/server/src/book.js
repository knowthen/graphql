const books = [
  {
    id: 1, 
    title: 'some book title', 
    description: 'some book description', 
    imageUrl: 'img.png', 
    rating: 5
  }
];

export function allBooks() { 
  // TODO: Query books from DB
  return books;
}