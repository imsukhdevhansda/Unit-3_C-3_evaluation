// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




 let movies_div = document.getElementById("movies");
 let id;


  async function SearchMovies(){

    try{

        const query = document.getElementById("search").value ;
        const url = `https://www.omdbapi.com/?s=${query}&apikey=9d39f6d9`
    
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.Search)
        const movies= data.Search;

        return movies

    }
    catch (err){
        console.log("err :",err)
    }

    

  }

    function appendMovies(data){
        console.log(data);

        data.forEach(elem => {
            console.log(elem)


            let box = document.createElement("div");

            let img = document.createElement("img");
            img.setAttribute("id","poster")
            img.src= elem.Poster
    
            let title = document.createElement("h3");
            title.innerText= elem.Title;
    
            let book_btn = document.createElement("button");
            book_btn.setAttribute("class","book_now");
            book_btn.innerText= "Book Now"
            
    
            box.append(img, title,book_btn);
    
            // document.getElementById("movies").append(box);
            movies_div.append(box);
            
        });

       


    }


  async function main(){
      let m_data = await SearchMovies();
      if (m_data == undefined){
          return false;
      }


      appendMovies(m_data);

  }

//    Dbouncing 

function dbouncing(fun, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        fun();
    },delay)

}
