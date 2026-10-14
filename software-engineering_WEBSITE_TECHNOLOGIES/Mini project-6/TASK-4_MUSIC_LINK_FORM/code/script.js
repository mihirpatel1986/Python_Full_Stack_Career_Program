const form = document.getElementById("musicLinksForm");
const previewCards = document.getElementById("previewCards");
const message = document.getElementById("message");

const platforms = [
  {
    id: "spotify",
    name: "Spotify",
    className: "spotify",
    icon: "fa-brands fa-spotify",
    hosts: ["open.spotify.com"],
  },
  {
    id: "youtube",
    name: "YouTube Music",
    className: "youtube",
    icon: "fa-brands fa-youtube",
    hosts: ["music.youtube.com"],
  },
  {
    id: "apple",
    name: "Apple Music",
    className: "apple",
    icon: "fa-brands fa-apple",
    hosts: ["music.apple.com"],
  },
];

function extractUsername(url) {
  const parts = url.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return "Music Profile";
  }

  // Spotify profile: /user/username
  if (url.hostname === "open.spotify.com") {
    const userIndex = parts.indexOf("user");
    if (userIndex !== -1 && parts[userIndex + 1]) {
      return parts[userIndex + 1];
    }
  }

  // YouTube handles: /@username
  const handle = parts.find((part) => part.startsWith("@"));
  if (handle) {
    return handle;
  }

  // Apple Music profiles and other supported profile URLs
  return decodeURIComponent(parts[parts.length - 1]);
}

function createCard(platform, url) {
  const card = document.createElement("div");
  card.className = `music-card ${platform.className}`;

  const icon = document.createElement("i");
  icon.className = `${platform.icon} platform-icon`;
  icon.setAttribute("aria-hidden", "true");

  const info = document.createElement("div");
  info.className = "card-info";

  const title = document.createElement("h3");
  title.textContent = platform.name;

  const username = document.createElement("p");
  username.textContent = extractUsername(url);

  const visit = document.createElement("a");
  visit.className = "visit-btn";
  visit.textContent = "Visit";
  visit.href = url.href;
  visit.target = "_blank";
  visit.rel = "noopener noreferrer";
  visit.setAttribute("aria-label", `Visit ${platform.name} profile`);

  info.append(title, username);
  card.append(icon, info, visit);

  return card;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  previewCards.replaceChildren();
  message.textContent = "";

  let count = 0;
  const errors = [];

  platforms.forEach((platform) => {
    const input = document.getElementById(platform.id);
    const value = input.value.trim();

    if (!value) return;

    try {
      const url = new URL(value);

      const valid =
        url.protocol === "https:" &&
        platform.hosts.includes(url.hostname) &&
        !url.username &&
        !url.password;

      if (!valid) {
        errors.push(`Enter a valid ${platform.name} URL.`);
        return;
      }

      previewCards.appendChild(createCard(platform, url));
      count++;
    } catch {
      errors.push(`Check the ${platform.name} URL.`);
    }
  });

  if (count === 0 && errors.length === 0) {
    message.textContent = "Please enter at least one music profile URL.";
  } else if (errors.length > 0) {
    message.textContent = errors.join(" ");
  } else {
    message.style.color = "#16863d";
    message.textContent = `${count} preview card(s) created successfully!`;
  }

  if (errors.length > 0 && count > 0) {
    message.style.color = "#b42318";
  }
});
