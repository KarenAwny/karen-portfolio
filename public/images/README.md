# Portfolio Images Directory

Place your actual images in this folder (`public/images/`) and update the image paths in `src/data/portfolioData.js`:

1. **Profile Photo**:
   - Save your photo as `public/images/profile-photo.jpg` (or `.png` / `.webp`)
   - In `src/data/portfolioData.js`, set `personalInfo.profilePhoto` to `"/images/profile-photo.jpg"`

2. **Waypoint Project Screenshots**:
   - Save your screenshots as:
     - `public/images/waypoint-1.png`
     - `public/images/waypoint-2.png`
   - In `src/data/portfolioData.js`, update the `screenshots` array in the Waypoint project entry with `src: "/images/waypoint-1.png"` and `src: "/images/waypoint-2.png"`.

