import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Post } from './Posts'

export function App() {  
  return ( 
    <div>
      <Post
        author="Luís Lucilandio"
        description="Analista e Desenvolvedor de Software"
      />
      <Post
        autor="Autor Desconhecido"
        description="Não segue as normas da ABNT"
      />
    </div>
  )
}

export default App
