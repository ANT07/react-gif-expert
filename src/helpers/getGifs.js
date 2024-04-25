export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ShyzCilYibeW5dOlK2TBFFuWHZ1bIuIF&q=${category}&limit=5`;
    const apiKey = ''

        const rsp = await fetch(url);

        const {data} = await rsp.json();
        
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
}