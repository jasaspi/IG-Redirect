const instagramRedirectUrl = "https://www.picuki.com/profile";

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    if (url.hostname !== "www.instagram.com") return; // check if IG

    const username = url.pathname.split('/')[1]; // extract username from URL

    const redirectUrl = `${instagramRedirectUrl}/${username}`;

    return { redirectUrl: redirectUrl };
  },
  {
    urls: [
      "*://www.instagram.com/*",
      "*://instagram.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame"
    ],
  },
  ["blocking"]
);
