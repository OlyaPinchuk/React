export default function User(props) {

    let {user, func} = props

    return (
        <div>

            {user.id} - {user.name} - <button onClick = {() => func(user.id)} > delete </button>

        </div>
    )

}