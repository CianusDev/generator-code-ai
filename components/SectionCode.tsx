import React from 'react'

type SectionCodeProps={
    code?:string;
} 
const SectionCode = (props:SectionCodeProps) => {
  return (
    <section className='w-full justify-center mx-auto items-center flex-col h-auto'>
        <div dangerouslySetInnerHTML={{__html:`<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <title>Generated Code</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
          <script src="https://kit.fontawesome.com/cec2176ae5.js" crossorigin="anonymous"></script>
          </head>

          <body className="container">
            <main class="flex flex-col container p-4">
            ${props.code}
            </main>
            
          </body>

          </html>`}}/>
          <iframe className='hidden' srcDoc={`
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
          <script src="https://kit.fontawesome.com/cec2176ae5.js" crossorigin="anonymous"></script>
         `} ></iframe>
    </section>
  )
}

export default SectionCode