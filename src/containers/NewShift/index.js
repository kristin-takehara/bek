import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loadUsers } from '../../actions/users';
import { QRCode } from 'react-qr-svg';
import Formsy from 'formsy-react';
import MyInput from '../../components/CreateShift/MyInput';
import SelectMonth from '../../components/CreateShift/SelectMonth';
import SelectDay from '../../components/CreateShift/SelectDay';
import PopPop from 'react-poppop';
import Popup from '../../components/CreateShift/Popup';
import ShiftLength from '../../components/CreateShift/ShiftLength';



class NewShift extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }
 
  disableButton() {
    this.setState({ canSubmit: false });
  }
 
  enableButton() {
    this.setState({ canSubmit: true });
  }
 
  submit(model) {
    // if(model.quickshift){
    //   console.log(model.quickshift)
    // }

 
    console.log(model);
  }




       // <QRCode
       //              bgColor="#FFFFFF"
       //              fgColor="#000000"
       //              level="Q"
       //              style={{ width: 256 }}
       //              value="www.google.com"
       //          />



  render(){

    return (
        <div>
        <Popup submit={this.submit.bind(this)}/>
        <ShiftLength submit={this.submit.bind(this)}/>
        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedNewShift = connect(
  mapStateToProps,
  {loadUsers}
)(NewShift)

export default ConnectedNewShift;