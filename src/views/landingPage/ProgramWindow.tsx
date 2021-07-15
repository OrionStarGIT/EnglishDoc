import React from 'react'
import styled from 'styled-components'

const Window = styled.div`
  width: 600px;
  margin: 0em auto 4em;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 1px 20px 0px rgba(66, 66, 66, 0.13);
  box-shadow: 0 2px 42px 0px rgba(30, 112, 167, 0.39);
  background: white;
`

const Content = styled.div`
  min-height: 150px;
  white-space: pre-wrap;
  color: #333 .ace-github .ace_gutter {
    background: #f9f9f9;
  }

  .ace-github .ace_active-line,
  .ace-github .ace_gutter-active-line {
    background: transparent !important;
  }
`

export default props => (
  <Window>
    <Content>{props.children}</Content>
  </Window>
)
