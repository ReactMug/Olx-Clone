import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className='header'>

            <div className='header__in'>
                <img
                    className='header__img'
                    src='https://www.realxerp.com/images/api_integration/OLX.png'
                    alt=''
                />
                <input
                    className='header__input'
                    placeholder='Find Cars,Mobile Phone and more...'
                />
                <div className='header__searchIcon'>
                    <SearchIcon
                    />
                </div>
            </div>
            <div className='header__text'>
                <h2>
                    Login
                </h2>
                <button>
                    Sell
                </button>
            </div>
        </div>
    )
}
export default Header


