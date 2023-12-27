import { styled } from '@mui/material/styles'
import { Fab } from '@mui/material'

export const StyledFab = styled(Fab)(({ theme }) => ({
    color: 'white',
    backgroundImage: 'linear-gradient(to right, #E22A90, #E22A90)',
    '&:hover': {
        backgroundImage: 'linear-gradient(to left, #E22A90, #3C5BA4)'
    }
}))
