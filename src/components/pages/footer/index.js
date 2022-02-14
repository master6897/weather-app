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
`
function Footer(){
    return(
        <StyledFooter>
            <a href="https://www.linkedin.com/in/marcin-puc/" target={'blank'}><StyledIcon icon={faLinkedin} /> </a>
            <a href="https://github.com/master6897" target={'blank'}><StyledIcon icon={faGithub} /> </a>
        </StyledFooter>
    )
}

export default Footer;