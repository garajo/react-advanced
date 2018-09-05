import React from 'react'

import {
  ThemeContext,
  themes,
} from './theme-context'

import {
  FAHeader,
} from './RenderProp'

export class ThemedTable extends React.Component {
  constructor(props) {
    super(props)
    
    const [initialkey] = Object.keys(themes)
    this.state = {
      themekey: initialkey,
      theme: themes[initialkey],
      themes,
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true
    })
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)
  }


  toggleTheme = (event) => {
    
    this.setState(state => {
      
      const keys = Object.keys(state.themes)
      const nextIdx = keys.indexOf(state.themekey) + 1
      const nextthemeIndex = nextIdx >= keys.length ? 0 : nextIdx
      return ({
        theme: themes[keys[nextthemeIndex]],
        themekey: keys[nextthemeIndex],
        
      })
    })
  }

  render() {
    const {
      Header,
      headings,
      RowCells,
      values,
    } = this.props

    const {
      themekey,
      theme,
      hasError,
    } = this.state

    if (hasError) {
      return (
        <div>
          <h4>Error purposely triggered</h4>
          { !Header && <p style={{color: '#f00'}}>'Did you forget to include a Header component?'</p>}
          { !RowCells && <p style={{color: '#f00'}}>'Did you forget to include a RowCells component?'</p>}
          <label for="fallback">fallback rendering content:</label>
          <pre name="fallback">{JSON.stringify(values, null, 2)}</pre>
        </div>
      )
    }

    return (
      <div>
        <ThemeContext.Provider value={theme}>
        <table>
          <thead>
            <tr>
              { headings.map(ea => (<Header key={ea} title={ea} renderHeader={() => FAHeader(ea === 'value' ? 'rocket' : 'bus')} />)) }
            </tr>
          </thead>
          <tbody>
            {values.map((ea, index) => {
              return (
                <tr 
                  key={ea.id}
                >
                  <RowCells value={ea} />
                </tr>)
            })}
          </tbody>
        </table>
        </ThemeContext.Provider>
        <button onClick={this.toggleTheme} >theme: {themekey}</button>
      </div>
    )
  }
}