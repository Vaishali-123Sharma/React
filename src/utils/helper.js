export function filterData(searchText, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.description?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
