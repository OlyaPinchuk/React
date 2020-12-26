export class UserServices {

    url = 'https://jsonplaceholder.typicode.com/users'

    getAllUsers() {

        return fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json() )

    }

    getUserById(id) {
            return fetch (`${this.url}/${id}`)
                .then(value => value.json())
        }


    getReply() {
        return fetch('https://api.chucknorris.io/jokes/random')
            .then(value => value.json())

    }


}