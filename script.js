// Gestion du thème
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").textContent = "☀️";
  }
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const body = document.body;
  const isDark = body.classList.toggle("dark");
  document.getElementById("theme-toggle").textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Menu contextuel
const contextMenu = document.getElementById("context-menu");
const openMenuBtn = document.getElementById("open-context-menu");
const closeMenuBtn = document.getElementById("close-menu");

openMenuBtn.addEventListener("click", () => {
  contextMenu.classList.toggle("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  contextMenu.classList.add("hidden");
});

// Publication
const publishBtn = document.getElementById("publish-btn");
const postText = document.getElementById("post-text");
const moodSelect = document.getElementById("mood-select");
const bgColorInput = document.getElementById("background-color");
const postTypeSelect = document.getElementById("post-type-select");
const postsContainer = document.getElementById("posts");

publishBtn.addEventListener("click", () => {
  const text = postText.value.trim();
  const mood = moodSelect.value;
  const bgColor = bgColorInput.value;
  const type = postTypeSelect.value;

  if (text === "") {
    alert("Veuillez entrer un texte avant de publier.");
    return;
  }

  const newPost = document.createElement("div");
  newPost.classList.add("post");
  newPost.style.backgroundColor = bgColor;

  let typeIcon = "";
  let typeStyle = "";

  switch (type) {
    case "information":
      typeIcon = "ℹ️";
      typeStyle = "background:#e0f7fa; border-left:5px solid #00acc1;";
      break;
    case "suggestion":
      typeIcon = "💡";
      typeStyle = "background:#e8f5e9; border-left:5px solid #43a047;";
      break;
    case "ressenti":
      typeIcon = "😊";
      typeStyle = "background:#fce4ec; border-left:5px solid #d81b60;";
      break;
    case "proposition":
      typeIcon = "📢";
      typeStyle = "background:#fff3e0; border-left:5px solid #fb8c00;";
      break;
    case "ce-que-je-pense":
      typeIcon = "📝";
      typeStyle = "background:#eeeeee; border-left:5px solid #888888;";
      break;
    default:
      typeStyle = "";
      break;
  }

  newPost.innerHTML = `
    <div class="post-header">
      <img src="https://randomuser.me/api/portraits/men/31.jpg" class="profile-pic">
      <div>
        <div class="post-author">Vous</div>
        <div class="post-time">Maintenant</div>
      </div>
    </div>
    <div style="${typeStyle} padding: 10px; border-radius: 6px; margin-top: 10px;">
      ${typeIcon} ${text}
    </div>
    <div class="post-footer">🙂 Humeur : ${mood}</div>
  `;

  postsContainer.prepend(newPost);
  postText.value = "";
  contextMenu.classList.add("hidden");
});
