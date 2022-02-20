import React, {useContext, useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../reducers/GlobalState';

const StyledHeader = styled.header`
    background: transparent;
    display: flex;
    justify-content: space-between;
    min-height: 2rem;
    box-sizing: border-box;
    padding: 1.5rem;
    width: 95%;
    @media screen and (min-width: 481px){
        width:100%;
        margin-bottom: 1rem;
        justify-content: flex-start;
        & h1{
            font-size: 2rem;
        }
    }
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    &.location{
        width: 20%;
        color: #E5E5E5;
        @media screen and (min-width: 481px){
            margin-right: 2rem;
            justify-content: space-evenly;
        }
    }
    &.search{
        background: #ECE8E8;
        border-radius: 50px;
        box-sizing: border-box;
        padding: .5rem;
        animation: ${props => (props.fail === 'true'? css`${shakeAnimation} 1s ease-in-out`: null)};
        ${props => props.fail === 'true' ? 'border: 1px solid red;': null};
    }
`

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate(-1px, 0);
  }
  
  20%, 80% {
    transform: translate(2px, 0);
  }

  30%, 50%, 70% {
    transform: translate(-4px, 0);
  }

  40%, 60% {
    transform: translate(4px, 0);
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
    @media screen and (min-width: 1025px){
        left: .5rem;
    }
`
function Header(){
    const {weather, setWeather} = useContext(GlobalContext);
    const [city, setCity] = useState('');
    const [fail, setFail] = useState('');
    console.log(city);

    useEffect(()=>{
    }, [fail,setFail])
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
            <StyledDiv className="search" fail={fail}>
                <StyledInput 
                type="text" 
                placeholder="Miejscowość..."
                onChange={evt => setCity(evt.target.value)}
                ></StyledInput>
                <button onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} size='lg'/>
                </button>
            </StyledDiv>
        </StyledHeader>
    )
}
export default Header;