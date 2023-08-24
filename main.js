//console.log('boo');

// // Necessary Deliverables

// //     A production-ready web application hosted live on the web.
// //     A public GitHub repository where the codebase is maintained.
const searchContainer = document.querySelector('#results');


const searchBtn = document.querySelector('#button1');
searchBtn.addEventListener('click', function(){ //when recipe search button is clicked
    // console.log('clicked');
    const searchInput = document.querySelector('#search'); // selects input in search bar
    console.log(searchInput.value);
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients/?apiKey=ba4056c7579449189e9fce1193d8fefa&ingredients=${searchInput.value}`)
    .then(function(res){ // display results 
        console.log(res.data);


        for(const result of res.data){
            console.log(result.title); // take info from res.data and print wanted info
            searchContainer.innerHTML += `<div id="ouput">
            <h2 data-id="${result.id}">${result.title}</h2>  
            <img src="${result.image}" data-id="${result.id}">
            
            
            </div>` // 'display titles and images of results on page + add's data-id to h2/img
        };



        searchContainer.addEventListener( 'click', ev => {
            const idSearch = (ev.target.dataset.id);
            // console.log( 'clicked!', ev.target.id); // id is empty string
            console.log( 'id:', ev.target.dataset.id); // 
            axios.get(`https://api.spoonacular.com/recipes/${idSearch}/information/?apiKey=ba4056c7579449189e9fce1193d8fefa&`)
            .then(function(res){
                console.log(res.data);
                console.log(res.data.instructions);

            //const idResult = res.data.id; 
            const instructionsDiv = document.querySelector('.instructions');
            instructionsDiv.innerHTML = res.data.instructions;


        //     res.data.instructions.innerHTML += `<div id="ouput">
        //     <h2>${idResult.title}</h2>  
        //     <img src="${idResult.image}">
        //     <p>${idResult.instructions}</p>
        //     </div>` // 'display titles and images of results on page
        // // };
        
        
            }); // then id
          
        
            
        
          }); // searchContainer id








    }); //.then
// }); //clickhandler








// searchContainer.addEventListener( 'click', ev => {
//     console.log( 'clicked!', ev.target.id); // id is empty string
//    // const idSearch = document.querySelector('#results');
//     console.log( 'id:', ev.target.dataset.id); // id is undefined
//      axios.get(`https://api.spoonacular.com/recipes/${idSearch}/information/?apiKey=ba4056c7579449189e9fce1193d8fefa&`)
//      .then(function(res){
//        console.log(res.data);

// res.data.results.forEach(element => {
//     console.log(result.id);
//     searchContainer.innerHTML += `<div id="ouputID">
//     <h2 data-id="${result.id}">${result.title}</h2>
//     </div>`
    
    
// });        


//         }); // then


    

//   });


  

// click on img/h2 to display details on new page.appendChild <div>


const randomBtn = document.querySelector('#button2');
randomBtn.addEventListener('click', function(){
    axios.get('https://api.spoonacular.com/recipes/random/?apiKey=ba4056c7579449189e9fce1193d8fefa')
    .then(function(res){
        console.log(res.data);

        const randomResult = res.data.recipes;
            console.log(randomResult.title); // take info from res.data and print wante info
            searchContainer.innerHTML += `<div id="ouput">
            <h2>${randomResult.title}</h2>  
            <img src="${randomResult.image}">
            </div>` // 'display titles and images of results on page
        // };
            



    });//.then


}); // clickhandler

//todo: need to implement not having to reload page to start again/clear button

//[Math.floor(Math.random()*res.data.recipes.length)]
 


// https://api.spoonacular.com/recipes/716429/information?apiKey=ba4056c7579449189e9fce1193d8fefa&includeNutrition=true

//         Technical Requirements

//     Structure your application as a SPA (Single-Page Application) with JavaScript updating the page content, based on app data either hardcoded in the JS code as variables, or loaded from an API or custom backend (more on this below)

//     Make at least two AJAX HTTP requests to an API, e.g. "text-based search for items" and "details on a single item by ID", and show a UI for the data returned (you can not use TMDB, Flickr or an API you have already used for a homework task)

//     Listen for events and add interactivity based on user input

//     // If possible, think of a way to let your app's users customise the data returned from the API; a good starting point is bookmarking/favouriting/liking items from the API - you store the liked/bookmarked IDs within your own app's data and show a UI for those items to your users

//     //Use CSS to make your page look good!

//     Deployment/Hosting:
//         The Git repo for your app should be hosted on your own personal GitHub account on the public GitHub (i.e. not the GA Enterprise Organisation used for classwork & homework repos during the course), so it can be viewed by anyone
//         Your live app must be hosted on one of the following:
//             GitHub Pages - this is the easiest option as it just involves enabling the Pages URL for your the repo you will already have hosted with GitHub
//             Netlify
//             Vercel


/// Trying to show/render recipe BS



                   // console.log(idSearch); // take info from res.data and print wanted info
                    // searchContainer.innerHTML += `<div id="ouput">
                    // <h2>${dataset.title}</h2>  
                    // <img src="${dataset.image}">
                    // </div>` // 'display titles and images of results on page + add's data-id to h2/img
                });
        
                // const idResult = res.data.id;
                // console.log(idResult.title);
                // searchContainer.innerHTML += `<div id="ouput">
                //     <h2>${idResult.title}</h2>  
                //     <img src="${idResult.image}">
                //     <p>${idResult.usedIngredients}</p>
                //     <p>${idResult.missedIngredients}</p>
                //     </div>`