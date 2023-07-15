import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.js" integrity="sha512-9dFFU5pcR8K4bvw4ng6mLMW5IjslYbA57amHEMtHn3TT9RkKivsDabKffqjUUJ4pCaojAyH05T1OESld199Gcw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      </body>
    </Html>
  )
}
export default Document;
