
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d5ef2b433msh3bfd7ce7cb864e6p1160cejsn59c82af30703',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    return await response.json();
}

//fetchData(API).then((response) => console.log(response));

(async ()=>{

    try {
        const videos = await fetchData(API)
        let view = `
            ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}"  class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `).join('') }
        `;
   
        content.innerHTML = view

    } 
    catch (error) {
        console.log(error)
    }

})()