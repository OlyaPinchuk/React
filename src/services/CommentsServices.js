export class CommentsServices {

    getAllComments () {

        return fetch ('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())

    }






}