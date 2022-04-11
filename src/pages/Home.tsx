import { css, jsx } from '@emotion/react'

const testCss = css({
  border: '1px solid #eaeaea',
  color: '#049e5a'
})

const Home = () => {
  return (
    <div 
      css={testCss}
    >
      <h1>홈</h1>
      <p>내 이름은 탐정. 코난이죠.</p>
    </div>
  );
};

export default Home
