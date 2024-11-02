const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/",
});
let currentNumber = 0;
let postsNumber = 10;

async function fetchPosts() {
  const response = await instance.get("/wonders");
  const listOfPosts = response.data.slice(
    `${currentNumber}`,
    `${currentNumber + postsNumber}`
  );
  for (let post of listOfPosts) {
    const postElement = document.importNode(postTemplate.content, true);
    console.log(postElement);
    postElement.querySelector("img").src = post.links.images[1];
    postElement.querySelector("h2").textContent = post.name.toUpperCase();
    wonders.appendChild(postElement);
  }
  currentNumber += postsNumber;

  if (currentNumber >= response.data.length) {
    more.style.display = "none";
  }
}

more.addEventListener("click", fetchPosts);

fetchPosts();
