var links = document.getElementsByClassName("player_link_inside");

const url = window.location.href.split('/');
console.log(url);

for (var link of links) {
  const name = link.innerHTML;
  console.log(name);
  const name_lc = name.toLowerCase();
  console.log(name_lc);
  if (url[url.length - 2].includes(name_lc)) {
    link.style.color = "#005eb8";
    console.log(link.style);
  }
}