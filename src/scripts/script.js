const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/",
});

async function fetchPosts() {
  const response = await instance.get("/wonders");
  const listOfPosts = response.data;

  for (let post of listOfPosts) {
    const postElement = document.importNode(postTemplate.content, true);
    console.log(postElement);
    postElement.querySelector("img").src = post.links.images[1];
    postElement.querySelector("h2").textContent = post.name.toUpperCase();
    postList.appendChild(postElement);
  }
}

fetchPosts();
