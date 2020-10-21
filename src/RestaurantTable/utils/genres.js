// Function that I used to create the genre list below.
// It is not used in the program.
// =====================================
// const getGenres = dataFromTheApi => {
//   const uniqueGenres = []
//   const genres = []
//   dataFromTheApi.forEach(restaurant => genres.push(restaurant.genre.split(',')))

//   genres.flat().forEach(genre => {
//     if (!uniqueGenres.includes(genre)) {
//       return uniqueGenres.push(genre)
//     }
//     return
//   })
//   return uniqueGenres
// }
// =====================================

export default [
  'All',
  'American',
  'Asian',
  'Bakery',
  'Belgian',
  'Bistro',
  'British',
  'Cafe',
  'Coffee',
  'Contemporary',
  'Continental',
  'Eclectic',
  'European',
  'French',
  'Fusion',
  'Grill',
  'Hawaiian',
  'International',
  'Irish',
  'Italian',
  'Japanese',
  'Kosher',
  'Oysters',
  'Pacific Rim',
  'Pasta',
  'Polynesian',
  'Sandwiches',
  'Seafood',
  'Steak',
  'Sushi',
  'Tea',
  'Traditional',
  'Vegetarian',
  'Vietnamese',
]
