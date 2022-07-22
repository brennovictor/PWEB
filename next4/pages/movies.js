export default function Movies({data}){

   return (
    <div>
      <div>
        <form method="GET">
          <input name="search"></input>
          <input type="submit"></input>
        </form>
	<br/>
	<br/>
        {data.Search.map((m) => (<div> {m.Title} - {m.Year} <br/> <img src={m.Poster}/> <br/> <br/> </div>))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context){
   const res = await fetch(`http://www.omdbapi.com/?&apikey=437f5aba&s=${context.query.search}`);   
   const data = await res.json();
 
   return {
 
       props: {   
           data,
       }, 
   };
 }



