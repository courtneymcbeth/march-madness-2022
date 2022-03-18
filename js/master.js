var links = document.getElementsByClassName("player_link_inside");

const url = window.location.href;
console.log(url);

for (var link of links) {
  const name = link.innerHTML;
  console.log(name);
  const name_lc = name.toLowerCase();
  console.log(name_lc);
  if (url.includes(name_lc)) {
    link.innerHTML = '<b>' + link.innerHTML + '</b>';
    console.log(link.innerHTML);
  }
}