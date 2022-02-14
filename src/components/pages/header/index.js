import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../reducers/GlobalState';
import Popup from '../../popup';

const StyledHeader = styled.header`
    background: transparent;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    min-height: 2rem;
    box-sizing: border-box;
    padding: 1.5rem;
    width: 95%;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    &.location{
        width: 30%;
        color: #E5E5E5;
    }
    &.search{
        background: #ECE8E8;
        border-radius: 50px;
        box-sizing: border-box;
        padding: .5rem;
    }
`
const StyledInput = styled.input`
    background: #ECE8E8;    
    margin-right: .3rem;
    &:focus{
        text-decoration:none;
        outline:none;
    }
`
const StyledSpan = styled.span`
    position: relative;
    top: -.7rem;
    left: .8rem;
    cursor: pointer;
`
function Header(){
    const {weather, setWeather} = useContext(GlobalContext);
    const [city, setCity] = useState('');
    const [fail, setFail] = useState('');
    console.log(city);

    const handleSubmit = () =>{
            const fetchData = async () => {
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&lang=pl&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if(res.ok){
                    setFail('false');
                    return res.json()
                }else{
                    throw new Error('Błędna nazwa miasta');
                }})
            .then(result => {
            setWeather(result)
            }).catch( (error) => {
                setFail('true');
                console.log(fail);
                console.log(error);
            })
            }
            fetchData();
    }
    return(
        <StyledHeader>
            <StyledDiv className="location">
                <FontAwesomeIcon icon={faLocationArrow}/>
                <h1>{weather?.name}</h1>
            </StyledDiv>
            <StyledDiv className="search">
                <StyledInput 
                type="text" 
                placeholder="Miejscowość..."
                onChange={evt => setCity(evt.target.value)}
                ></StyledInput>
                <button onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} size='lg'/>
                </button>
            </StyledDiv>
                <Popup fail={fail}>
                    <StyledSpan onClick={() => setFail('false')}>
                        <FontAwesomeIcon icon={faTimes} />
                    </StyledSpan>
                 </Popup>
        </StyledHeader>
    )
}
export default Header;