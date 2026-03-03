
  # Portfolio website

  This is a code bundle for Portfolio website. The original project is available at https://www.figma.com/design/Mwo4tvgl5822aBmgrGCwG6/Portfolio-website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ### Contact form

  The contact page now submits data to an API endpoint (`/api/contact`) which
  sends you an email using SMTP credentials. To make it work during development
  you must set the following environment variables (e.g. in a `.env` file or via
  your host's dashboard when deployed):

  ```
  SMTP_HOST=smtp.example.com
  SMTP_PORT=587
  SMTP_USER=your-smtp-user
  SMTP_PASS=your-smtp-password
  SMTP_FROM="Portfolio <your-smtp-user>"   # optional
  CONTACT_TO=you@yourdomain.tld              # where messages should be sent
  ```

  The handler lives in `src/api/contact.ts`. It uses `nodemailer`, which was
  added to the dependencies; install it with `npm install` after pulling the
  latest changes.

  On static GitHub Pages there is no server side support, so you'll need to
  deploy the site somewhere that can run serverless functions (Vercel, Netlify,
  etc.) or adapt the form to a third‑party service.
  