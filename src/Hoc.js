import React, { Fragment } from 'react'
import {
  ThemeContext,
} from './theme-context'

export function RowCells(props) {
  const { value } = props
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Fragment>
          {Object.keys(value).map(ea => (<td key={ea} style={{backgroundColor: theme.background, color: theme.foreground, border: 'inherit'}} >{value[ea]}</td>))}
        </Fragment>
      )}
    </ThemeContext.Consumer>
  )
}

export function Header(props) {
  const { title, renderHeader } = props
  
  return (
    <ThemeContext.Consumer>
      {theme => (
        <th style={{color: theme.background, backgroundColor: theme.foreground}}>
          {title}
          {renderHeader.call()}
        </th>
      )}
    </ThemeContext.Consumer>
  )
}
