import React from 'react';



export default function App({item}) {



    return (

        <div>

            {
                item && <div> {item.name} - {item.age} - <button>edit</button> - <button>remove</button> </div>


            }


        </div>

    )

};
