import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/characters';
const apiKey = 'f8115ab0021c8124fcfc3d79197cbeed';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + '?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}