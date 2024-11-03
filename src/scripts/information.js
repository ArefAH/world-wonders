const post = JSON.parse(localStorage.getItem("post"));
wonderName.textContent = post.name;
summary.textContent = post.summary;
hero.style.backgroundImage = `url(${post.links.images[0]})`;
wiki.href = post.links.wiki;
britannica.href = post.links.britannica;
maps.href = post.links.google_maps;
trip.href = post.links.trip_advisor;

