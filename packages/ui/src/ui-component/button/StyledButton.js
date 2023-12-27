import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import MuiToggleButton from '@mui/material/ToggleButton'

export const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundImage: 'linear-gradient(to right, #E22A90, #E22A90)',
    '&:hover': {
        backgroundImage: 'linear-gradient(to left, #E22A90, #3C5BA4)'
    }
}))

export const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    '&.Mui-selected, &.Mui-selected:hover': {
        color: 'white',
        backgroundColor: 'linear-gradient(to left, #E22A90, #3C5BA4)'
    }
}))
