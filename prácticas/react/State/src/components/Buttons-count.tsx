import { useState } from "react";

export function ButtonsCountComponent ()
{
    const [ count, setCount ] = useState( 0 );

    return (
        <>
            <h1>
                Count { count }
            </h1>

            <button onClick={ () => setCount( count + 1 ) } >
                +1
            </button>

            <button onClick={ () => setCount( count - 1 ) } >
                -1
            </button>
        </>
    );
}