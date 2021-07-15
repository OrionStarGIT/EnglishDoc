import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  border-top: 3px solid #2097e4;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1.25em 2em;
  z-index: 99;
  height: auto;

  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 0.5em;
  }

  a {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
  }

  .active {
    color: #2097e4;
    font-weight: 600;
  }
`

export default () => (
  <div style={{ height: '68px' }}>
    <Header>
        <ul>
          <li>
            <Link
              to="/docs/root/get-started/"
            >
              Documentation
            </Link>
          </li>
        </ul>
     
    </Header>
  </div>
)
