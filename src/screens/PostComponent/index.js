import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getPostComponentData } from '../../actions'

export class PostComponent extends React.Component {
  state = {
    text: ''
  }
  handleOnchange = event => {
    let text = event.target.value;
    this.setState({text:text})
  }
  render() {
    return(
      <div>
    <form  noValidate autoComplete="off">
      <TextField
        autoFocus
        onChange={this.handleOnchange.bind(this)}
        id="standard-basic"
        label="Post Component Input"
      />
      <Button
        onClick={() => this.props.getPostComponentData(this.state.text)}
        color="primary"
        variant="contained">Post Component</Button>
  
    </form>
  
      </div >
    )
  
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  getPostComponentData : (data) => dispatch(getPostComponentData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)
