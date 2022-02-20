import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2rem;
    cursor: pointer;
    &.LinkedIn{
        transition: 0.3s ease;
        &:hover{
            color: #0e76a8;
        }
    }
    &.Github{
        transition: 0.3s ease;
        &:hover{
            color: #171515;
        }
    }
`
function Footer(){
    return(
        <StyledFooter>
            <a href="https://www.linkedin.com/in/marcin-puc/" target={'blank'}><StyledIcon icon={faLinkedin} className='LinkedIn'/> </a>
            <a href="https://github.com/master6897" target={'blank'}><StyledIcon icon={faGithub} className='Github'/> </a>
        </StyledFooter>
    )
}

export default Footer;