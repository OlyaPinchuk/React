export class PlanetsServices {

    getAllPlanets () {
        return fetch ('https://swapi.dev/api/planets/')
            .then(value => value.json())
            .then(value => value.results)
    }


}