import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return(
        <header className='flex h-24 bg-black text-zinc-100 items-center w-full '>
            <div className="flex-initial w-24 bg-red-600">
                <FontAwesomeIcon icon={faLocationArrow}  className="text-zinc-100"/>
                <h1>Katowice</h1>
            </div>
        </header>
    )
}

export default Header;