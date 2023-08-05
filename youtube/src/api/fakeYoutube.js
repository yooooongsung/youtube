import axios from 'axios';

export default class FakeYouTube {
    constructor() {

    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
        
    }
    async #searchByKeyword() {
        return axios
        .get(`/videos/search.json`)
        .then(res => res.data.items)
        .then(items => items.map(items => ({...items, id: items.id.videoId})));
    }

    async #mostPopular() {
        return axios
        .get(`/videos/popular.json`)
        .then(res => res.data.items);
    }

}