const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

async function searchSongs(term) {
  const response = await fetch(`${apiUrl}/suggest/${term}`);
  const data = await response.json();

  showData(data);
}

// show song and artist in dom

function showData(data) {
  let output = "";

  result.innerHTML = `
  <ul class="songs">
    ${output}
  </ul>
  `;

  result.innerHTML = `
    <ul class="songs">
      ${data.data
        .map(
          (song) =>
            `<li>
             <span>
               <strong>
                 ${song.artist.name}
               </strong> - ${song.title}
             </span>
             <button class="btn" data-artist="${song.artist.name}">Get Lyrics</button>
           </li>`
        )
        .join("")}
    </ul>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Pleaser type in a search terom");
  } else {
    searchSongs(searchTerm);
  }
});
