export default function Layout({ title = "", description = "", children }) {
  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang="en" class="light h-full scroll-smooth antialiased">
        <head>
          <title>{title} &raquo; Jeasx - JSX with Ease</title>
          <meta charset="utf-8" />
          <meta name="referrer" content="same-origin" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href={`/index.css?${process.env.BUILD_TIME}`}
          />
        </head>
        <body>
          <div class="container mx-auto px-4">{children}</div>
        </body>
      </html>
    </>
  );
}
