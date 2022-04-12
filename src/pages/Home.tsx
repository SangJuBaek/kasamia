import { css } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { Grid, Tooltip, Button, TextField } from '@mui/material'
import { TooltipProps } from '@mui/material/Tooltip'

const testCss = css({
  border: '1px solid #eaeaea',
  color: '#049e5a'
})

const StyledTest = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;

const Home = () => {
  return (
    <div 
      css={testCss}
    >
      <h1
        css={css`
          color: #f00;
        `}
      >
        <div className="test">홈</div>
        <StyledTest title="I am navy">
          <Button variant="contained" color="primary">
            Styled tooltip
          </Button>
        </StyledTest>
        <Grid
          container
          spacing={1}
        >
          <Grid item xs={8}>
            <TextField label="Outlined" variant="filled" sx={{
              '& .MuiFilledInput-root': { backgroundColor: '#fff' }
            }}/>
          </Grid>
          <Grid item xs={4}>
            <TextField label="Outlined" variant="outlined" sx={{
              '& .MuiFilledInput-root': { backgroundColor: '#fff' }
            }}/>
          </Grid>
          <div>
            <TextField label="Outlined" variant="outlined" />
            <TextField label="Outlined" variant="filled" />
          </div>
          <div>
            <TextField label="Outlined" variant="outlined" />
            <TextField label="Outlined" variant="filled" />
          </div>
        </Grid>
      </h1>
      
    </div>
  )
}

export default Home
