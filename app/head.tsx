import Script from "next/script"

export default function Head() {
  return (
    <>
      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data for Google Search Logo */}
      <Script id="structured-data" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Muhammed Fadil",
          "url": "https://www.fadiljaleel.com",
          "logo": "https://www.fadiljaleel.com/images/logo-black.png"
        }
        `}
      </Script>
    </>
  )
}
