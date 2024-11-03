const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/",
});
let currentNumber = 0;
let postsNumber = 12;

const createPost = (post) => {
  const postElement = document.importNode(postTemplate.content, true);
  postElement.querySelector("img").src = post.links.images[0];
  postElement.querySelector("h3").textContent = post.name.toUpperCase();
  postElement.querySelector("p").textContent = post.location;
  wonders.appendChild(postElement);
}

async function fetchPosts() {
  const response = await instance.get("/wonders");
  const listOfPosts = response.data.slice(
    `${currentNumber}`,
    `${currentNumber + postsNumber}`
  );
  for (let post of listOfPosts) createPost(post);

  currentNumber += postsNumber;

  if (currentNumber >= response.data.length) {
    more.style.display = "none";
  }
}

more.addEventListener("click", fetchPosts);

fetchPosts();
