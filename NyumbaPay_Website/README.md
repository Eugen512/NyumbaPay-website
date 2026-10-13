# NyumbaPay — Future Website

Responsive, static launch website for the NyumbaPay Android application. The design uses an original CSS/SVG sci-fi aesthetic, with responsive navigation, platform information, landlord and caretaker guides, communication guidance, FAQs, a dedicated Contact Us section with the clickable email address nyumbapay1@gmail.com, and direct APK download links.

## Official Android download

`https://github.com/Eugen512/NyumbaPay-Downloads/releases/latest/download/NyumbaPay.apk`

All main download calls-to-action point to this exact official release URL. The Contact Us section and footer link to `mailto:nyumbapay1@gmail.com` so visitors can open their email app and contact the team.

## Publish using GitHub + Render

1. Extract this ZIP.
2. Create a GitHub repository such as `Eugen512/nyumbapay-download-site`.
3. Upload the contents of this folder to the repository root. Ensure `index.html` is at the root, not inside another folder.
4. In Render, choose **New + → Static Site** and connect the repository.
5. Leave **Build Command** blank. Set **Publish Directory** to `.`.
6. Deploy. Render will provide the public website URL.

The site does not require a backend, API keys, environment variables, or a build step. Google Fonts are optional; fallback fonts are included.

## Content accuracy note

The copy explains tenant setup, role-based caretaker access, notices, and maintenance workflows at a high level. It avoids claiming that the app provides a separate live instant-chat service. Before publishing, verify each described workflow against the current app build.
