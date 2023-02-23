import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="Bar, NBA, Nigerian Bar Association" name="keywords" />
        <meta
          content="Nigerian Bar association - Section on Legal Practice"
          name="description"
        />

        <link href="img/favicon.ico" rel="icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Script
          strategy="beforeInteractive"
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          crossOrigin="anonymous"
        />
        <Script
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        />
        <Script
          strategy="beforeInteractive"
          src="/assets/scripts/wow/wow.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="/assets/scripts/easing/easing.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="/assets/scripts/waypoints/waypoints.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="/assets/scripts/counterup/counterup.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="/assets/scripts/owlcarousel/owl.carousel.min.js"
        />

        <Script strategy="beforeInteractive" src="/assets/scripts/main.js" />
        <Main />
        <NextScript />

        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </body>
    </Html>
  );
}
