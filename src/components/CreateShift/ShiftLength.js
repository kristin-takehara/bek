import React, {Component} from 'react';
import PopPop from 'react-poppop';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import SelectMonth from './SelectMonth';
import SelectDay from './SelectDay';
import SelectStart from './SelectStart';
import SelectEnd from './SelectEnd';
import ShiftLength from './ShiftLength';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      shift:'',
      date: new Date()
    }

  }


  toggleShow(e){
    if(e!==undefined){
      this.setState({shift:e.target.innerHTML, show:true})
    }
    if(this.state.show){
      this.setState({show:false}) 
    }
  }

  render() {
    const {show} = this.state;
    const time = ["4HR SHIFT","6HR SHIFT","8HR SHIFT"]
    return (
      <div style={quickShifts}>
        {
          time.map((item,idx) => {
            return (
              <div key={idx} value={item} style={quickShifts}>
              <button  style={addShift} onClick={(e) => this.toggleShow(e)}>{item}</button>
              <PopPop position="centerCenter"
                  value={item}
                  open={show}
                  closeBtn={true}
                  closeOnEsc={true}
                  onClose={() => this.toggleShow()}
                  closeOnOverlay={true}>
                  <Formsy onSubmit={this.props.submit}>
                    <p style={heading}>{this.state.shift}</p>
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
                    name="description"
                    validations="isWords"
                    validationError="This a required field"
                    required
                    />
                    <SelectStart
                    name={this.state.shift}
                    date={this.state.date}
                    required
                    />
                  <button style={select} type="submit">Submit</button>
                  HIT THE X WHEN YOU ARE DONE
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

const addShift={
  backgroundColor:"#66b3ff",
  color:"white",
  border: "transparent",
  fontSize: "30px",
  paddingBottom:"10px",
  paddingRight:"15px",
  paddingLeft:"15px",
  marginTop:"10px"
}
const quickShifts = {
  display:"flex",
  textAlign:"center"
}
const heading={
  fontSize: "40px"
}
const select = {
  width: "400px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  height:"40px",
  marginTop: "10px"
}