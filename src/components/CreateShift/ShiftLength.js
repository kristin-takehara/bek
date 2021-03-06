import React, {Component} from 'react';
import PopPop from 'react-poppop';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
//import SelectMonth from './SelectMonth';
//import SelectDay from './SelectDay';
import SelectStart from './SelectStart';
//import SelectEnd from './SelectEnd';
//import ShiftLength from './ShiftLength';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      shift:'',
      date: new Date(),
      canSubmit: false
    }

  }

  toggleShow(e){
    if(e){
    let val = e.target.innerHTML.slice(0,-8);
      this.setState({shift:'_'+val, show:true})
    }
    if(this.state.show){
      this.setState({show:false})
    }
  }

  render() {
    const {show} = this.state;
    const time = ["4","6","8"]
    //const errorMessage = this.props.getErrorMessage();
    return (
      <div id="shift-hour-button-container">
        {
          time.map((item,idx) => {
            return (
              <div key={idx} value={item}>
              <button  id="create-shift-button" onClick={(e) => this.toggleShow(e)}>{item}HR SHIFT</button>
              <PopPop position="centerCenter"
                  value={item}
                  open={show}
                  closeBtn={true}
                  closeOnEsc={true}
                  onClose={() => this.toggleShow()}
                  contentStyle={{overflow: "hidden"}}
                  closeOnOverlay={true}>
                  <Formsy onSubmit={this.props.submit}>
                    <p style={heading}>{this.state.shift}HR SHIFT</p>
                    <MyInput
                    name="title"
                    validations="isWords"
                    validationError="Please enter a title"
                    required
                    />
                    <MyInput
                    name="summary"
                    validations="isWords"
                    validationError="Please enter a title"
                    required
                    />
                    <MyInput
                    name="role"
                    validations="isWords"
                    validationError="This a required field"
                    required
                    />
                    <SelectStart
                    name={this.state.shift}
                    date={this.state.date}
                    validationError="This a required field"
                    required
                    />
                  <button style={select} type="submit">Submit</button>
                  <br></br>
                  <h3 style={close}>{!this.props.canSubmit ? "PLEASE COMPLETE ALL FIELDS": "CLICK ON 'X' WHEN YOU ARE DONE"}</h3>
                </Formsy>
              </PopPop>
              </div>
            );
          })
        }
      </div>
    )
  }
}

const heading={
  fontSize: "30px"
}

const select = {
  width: "400px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  height:"40px",
  fontSize: "25px",
  color: "white"
}

const close ={
  textAlign: "center"
}