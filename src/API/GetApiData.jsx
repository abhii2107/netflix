export const getMoviesData = async()=>{
    try {
       const response = await fetch("https://www.omdbapi.com/?s=guardians&apikey=526134df");
       const data = await response.json();
       return data;
    } catch (error) {
        console.log(error);
    }
}