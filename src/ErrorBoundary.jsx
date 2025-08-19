import React from 'react'

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = { error: null, info: null }
  }
  componentDidCatch(error, info){
    console.error('ErrorBoundary caught', error, info)
    this.setState({ error, info })
  }
  render(){
    if(this.state.error){
      return (
        <div style={{position:'fixed',inset:0,background:'var(--bg)',color:'var(--danger)',padding:20,overflow:'auto',zIndex:99999}}>
          <h2 style={{color:'var(--danger)'}}>Runtime error</h2>
          <pre style={{whiteSpace:'pre-wrap',color:'var(--text)',background:'rgba(0,0,0,0.4)',padding:12,borderRadius:6}}>{String(this.state.error && this.state.error.stack) + '\n' + (this.state.info && this.state.info.componentStack)}</pre>
          <div style={{marginTop:12}}>
            <button onClick={()=> location.reload()} style={{padding:'8px 12px',borderRadius:6,background:'var(--panel)',color:'var(--text)',border:'1px solid rgba(0,0,0,0.15)'}}>Reload</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
