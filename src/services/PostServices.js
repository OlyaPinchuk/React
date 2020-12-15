export class PostServices {


    getAllPosts () {
        return fetch ('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())

    }














}