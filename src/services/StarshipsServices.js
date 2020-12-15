export class StarshipsServices {

    getAllShips () {
        return fetch ('https://swapi.dev/api/starships/')
            .then(value => value.json())
            .then(value => value.results)

    }


}

