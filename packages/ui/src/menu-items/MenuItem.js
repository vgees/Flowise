// MenuItem.js

import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'

const StyledMenuItem = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(1),
    borderRadius: '8px',
    transition: 'background 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(45deg, #3C5BA4, #E22A90)'
    }
}))

const StyledIcon = styled('div')({
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #3C5BA4, #E22A90)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px'
})

const StyledTitle = styled('span')({
    fontWeight: 'bold'
})

const MenuItem = ({ title, url, icon: Icon }) => {
    console.log('Title:', title)
    return (
        <StyledMenuItem>
            <NavLink to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
                <StyledIcon>
                    {Icon && <Icon size={36} />} {/* Assuming Icon is a component that accepts a size prop */}
                </StyledIcon>
                <StyledTitle>{title}</StyledTitle>
            </NavLink>
        </StyledMenuItem>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired
}

export default MenuItem
