export default function Movies({data}){

   return (

       <div>
           <div>
           {data.Search.map( (m) => <div>{m.Title} --- {m.Year} <img width="300" height="150" src={m.Poster}></img> </div>)}   
           <div></div>    
           <div></div>
           </div>
           <div> </div>

       </div>

   )

}


export async function getServerSideProps(context){

   const res = await fetch(`http://www.omdbapi.com/?apikey=437f5aba&s=bagdad`)
   // Exercícios
   // 1. realizar outras pesquisas, por título e ano, por exemplo
   // const res = await fetch(`http://www.omdbapi.com/?apikey=437f5aba&s=2000`) <-- ano 2000
 
   const data = await res.json()
 
   return {
 
       props: {   
 
           data
 
       }
 
   }
 
 }







