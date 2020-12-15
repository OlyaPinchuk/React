export class UserServices {

        url = "https://jsonplaceholder.typicode.com/users"

        getAllUsers() {

            return fetch(this.url)
                .then(value => value.json())

        }

        getUserById (id) {

            return fetch (`${this.url}/${id}`)
                .then(value => value.json())
        }

        getChosenUserPosts (id) {

            return fetch ('https://jsonplaceholder.typicode.com/posts')
                   .then(value => value.json())
                   .then(value => {
                        return value.filter(currentValue => {
                                return currentValue.userId === id
                        })
                   })

        }

}