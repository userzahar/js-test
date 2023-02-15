async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function main() {
  const postsData = await getData();
  const currentPage = 1;
  let rows = 10;
  function displayList() {}
  function displayPagination() {}
  function displayPaginationBtn() {}
}
