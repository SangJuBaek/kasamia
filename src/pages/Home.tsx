import { css } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { Tooltip, Button } from '@mui/material'
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
      </h1>
      <StyledTest title="I am navy">
        <Button variant="contained" color="primary">
          Styled tooltip
        </Button>
      </StyledTest>
    </div>
  )
}

export default Home
