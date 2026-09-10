# مايا و الحسن — Wedding Invitation Project

## What's in this project

```
index.html                     → the Arabic (RTL) invitation site
reservations.html              → password-protected guest/RSVP list
apps-script-rsvp-webhook.gs    → free Google Apps Script (pasted into Google, not GitHub)
assets/
  ├── couple-1.jpg
  ├── couple-2.jpg
  ├── couple-3.jpg
  ├── background-music.mp3     → YOU ADD THIS — see note below
  ├── envelope-closed.jpg      → included (your uploaded photo)
  └── envelope-intro.mp4       → OPTIONAL — see note below
```

## What changed in this round

- Names updated everywhere: **مايا** (bride) and **الحسن** (groom).
- Removed the "our story" timeline section (محطات على الطريق).
- Removed the Afamia resort banner and its image entirely.
- Removed the "حفل الاستقبال" (reception) card — only "حفل الزفاف" remains,
  now showing **8:00 PM** at **مطعم كرم الدار**, with an embedded Google Map
  (using the plus code C6G8+4JG) and a "get directions" link under it.
- Countdown ("يومنا الموعود") now counts down to **Thursday, October 8, 2026,
  8:00 PM**.
- Added the welcome message from your screenshot ("أهلاً بكم في فرحتنا...")
  right under the couple's names.
- Added a **closed envelope intro screen**: the site opens hidden behind an
  animated envelope; tapping the wax-seal "stamp" in the middle opens the flap
  and reveals the invitation underneath.
- Added **background music** support: tapping the envelope stamp is also the
  moment the music starts (browsers block autoplay with sound until a real
  tap/click happens, so this doubles as that permission moment). A small
  music note button in the bottom-left corner lets guests mute/unmute anytime.
- Kept the photo gallery and all RSVP/reservation functionality exactly as before.

## About the music — you need to add your own file

I can't legally embed a specific song for you — copyrighted music can't be
included, and I don't have a licensed track to attach. The site is fully wired
to play music the moment the envelope opens; it's just waiting for a file.

1. Pick an instrumental/wedding-appropriate track from a royalty-free source,
   e.g. Pixabay Music, YouTube Audio Library, or Free Music Archive
   (all have free-to-use wedding/romantic instrumental tracks).
2. Export/download it as an MP3.
3. Rename the file exactly to `background-music.mp3`.
4. Put it inside the `assets` folder before uploading to GitHub.

If the file isn't there, the site still works fine — the music simply won't
play, and the mute/unmute button will just have nothing to toggle.

## About the intro media — you need to add your own file

The envelope intro plays a full-screen **video** (falling back to a still photo
if no video is found), so it needs real media from you. I can't embed a
specific video or photo for you — copyrighted media can't be reused without a
license — but the code is fully wired to display one the moment it exists.

**For a video (optional, closer to what you saw):**
1. Find or film a short (5–10 second), royalty-free vertical video of a closed
   wedding envelope — a slow zoom or static shot both work well. Sources like
   Pexels Video or Pixabay Video have free options; searching "wedding
   envelope" or "invitation flatlay" is a good start.
2. Export it as **MP4**, rename it exactly to `envelope-intro.mp4`.
3. Put it in the `assets` folder.

**Photo:** already included — I used the wax-seal envelope photo you uploaded,
saved as `envelope-closed.jpg`. No action needed unless you want to swap it
for a different one (same filename, same folder).

If neither file exists, the intro still works — it just shows a plain
sage-green screen with the "tap to open" hint, so nothing breaks.

How the interaction works: the whole screen is tappable — tapping anywhere
zooms/fades the media out, revealing the site underneath, and starts the
background music at the same moment.


## Existing setup still applies

- Formspree is already connected (`mnpqnyja`) for RSVP email notifications.
- The Google Apps Script + Google Sheet + CSV pipeline for
  `reservations.html`'s live data still works exactly as documented before —
  see the earlier setup steps if you haven't finished wiring the
  `APPS_SCRIPT_URL` and `SHEET_CSV_URL` placeholders yet.
- Reservations page password: change `RESERVATIONS_PASSWORD` in
  `reservations.html` from the default before sharing your site.

## Upload checklist

- [ ] Add `background-music.mp3` to the `assets` folder (optional but requested).
- [ ] Upload `index.html`, `reservations.html`, and the `assets` folder to your
      GitHub repo root, overwriting the old versions.
- [ ] Confirm GitHub Pages is still active (Settings → Pages).
- [ ] Test on both desktop and mobile in an incognito window.
