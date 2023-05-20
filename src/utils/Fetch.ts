export const getProducts = async (
  base_url: string,
  endpoint: string,
  limit: string | null = null,
  sort: string | null = null
) => {
  const products = await fetch(
    `${base_url}${endpoint}?limit=${limit}&sort=${sort}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  console.log(products);
  return products;
};
