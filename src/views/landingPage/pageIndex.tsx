import React, { Component } from 'react'
import styled from 'styled-components'
import ProgramWindow from './ProgramWindow'

const center = {
  'display': 'flex',
  'flex-direction': 'column',
}
const header = {
  'display': 'flex',
  'justify-content': 'space-between',
  'background-color': 'rgb(0,115,230,0.8)',
  'color': '#fff',
  'border-radius': '0 0 10% 10%',
  'padding': '50px'
}
const footer = {
  'display': 'flex',
}
const footerSection = {
  'width': '33%',
  'box-sizing': 'content-box',
  'padding': '30px 30px',
  'text-algin':'left',
}
const footerH3 = {
  'color': '#2097e4',
  'margin-bottom': '0.5em', 
  'font-weight': '500'
}
const h2 = {
  'margin-top': '1.5rem',
  'font-size': '3.5em',
  'margin-bottom': '0.25em',
  'font-weight': 'bold',
  'letter-spacing': '1.5px',
  'line-height': '1.05em',
  'display': 'inline-block',
}
const h3 = {
  'font-size': '1.5em',
  'margin-top': '0',
  'margin-bottom': '1.5em',
  'font-weight': '300',
}

class IndexPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={center}>
        <div style={header}>
          <section style={{ width: '50%' }}>
            <h2 style={h2}>RobotOS Platform</h2>
            <h3 style={h3}>
              RobotOS is an open development platform developed by Orion Star. The platform provides a complete set of robot business solutions, including software/hardware environment, open source templates, Orionstar's AI technology, etc.
            </h3>
          </section>

          <section style={{ width: '45%' }}>
            <ProgramWindow>
              <img style={{ width: '90%', height: 'auto' }}
                src={require('./assets/use/logo.png')}></img>
            </ProgramWindow>
          </section>
        </div>
        <div style={footer}>
        <div style={footerSection}>
          <h3 style={footerH3}>OPEN</h3>
          <p>
            60+  capability component support<br />
            200+ APIs are free and open to use
          </p>
        </div>
        <div style={footerSection}>
          <h3 style={footerH3}>EASY</h3>
          <p>
            With sample code, you can quickly understand OrionStar robot app development and easily reuse the code in your own app.
          </p>
        </div>
        <div style={footerSection}>
          <h3 style={footerH3}>FAST</h3>
          <p>
            It only takes a few days to complete the robot application development from 0 to 1.
          </p>
        </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
