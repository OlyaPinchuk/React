export class PeopleServices {

    getAllPeople () {
        return fetch ('https://swapi.dev/api/people/')
            .then(value => value.json())
            .then(value => value.results)

    }


}

