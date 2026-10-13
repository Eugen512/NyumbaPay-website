NyumbaPay Future Website
========================

Files are intentionally supplied flat at the root of this ZIP so they can be uploaded directly into the root of a GitHub repository.

Files:
- index.html
- styles.css
- script.js
- nyumbapay-mark.svg
- robots.txt

All APK download anchors use the requested explicit release URL:
https://github.com/Eugen512/NyumbaPay-Downloads/releases/download/v1.0.0/NyumbaPay.apk

The download anchors use the direct GitHub release asset URL and do not open a new tab. GitHub serves the APK as a download. The actual destination URL cannot be completely hidden from a browser, but it is not printed as page text.

Deploy on Render:
1. Upload these files directly to the repository root. Do not upload the enclosing ZIP as a single file.
2. Create a Render Static Site connected to that GitHub repository.
3. Leave Build Command blank.
4. Set Publish Directory to `.`
5. Deploy.

No backend or environment variables are needed. Some fonts load from Google Fonts; system fallback fonts are included.
