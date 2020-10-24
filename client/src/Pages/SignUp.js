import React, { Component } from 'react';
import { SignUpHeader } from '../Components/SignUpHeader/SignUpHeader';
import { SignUpBlock } from '../Components/SignUpBlock/SignUpBlock';


export default class SignUp extends Component{

render(){

    return(
<div className="Signup">
    <SignUpHeader></SignUpHeader>
<SignUpBlock></SignUpBlock>



</div>

)
}
}