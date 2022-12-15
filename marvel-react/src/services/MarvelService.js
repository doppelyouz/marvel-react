

class MarvelService {
    getResource = async(url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?
        limit=9&offset=210&apikey=3155f460401f054fd01b5a3f652a0025`)
    }
}

export default MarvelService;