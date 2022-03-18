var links = document.getElementsByClassName("player_link_inside");

const url = window.location.href;

for (var link of links) {
  const name = link.innerHTML;
  const name_lc = name.toLowerCase();
  if (url.includes(name_lc)) {
    link.innerHTML = '<b>' + link.innerHTML + '</b>';
  }
}