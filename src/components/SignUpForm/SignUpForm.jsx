import React, { useState } from 'react'
import './style.scss'
import letter from '../../assets/images/FormIcons/letter2.png'
import lock from '../../assets/images/FormIcons/lock2.png'
import user from '../../assets/images/FormIcons/user2.png'
function SignUpForm({toggleSignUp,setToggleSignUp}) {
  const [eyeToggle,SetEyeToggle]=useState(false)
  return (
    <div className={toggleSignUp? "signUpForm show":"signUpForm"}>
        <span className="closeForm" onClick={()=>setToggleSignUp(false)}>&times;</span>
          <div className="ribbon">
          
          <span>Welcome to Fashion
            <div className="ribbonSwiper">&nbsp;</div>
          </span>
        </div>
      
      <div className="FormText">
      <h1 className="mb-24">Qeydiyyatdan keçmək</h1>

    <form autoComplete="off">
        <div className="NameInpContainer">
          <input className="nameInput" type="text" name=""  placeholder="User's Name" id="Name"/>
          <img src={user} alt=""/>
        </div>
        <div className="LetterInpContainer">
          <input className="LetterInput" type="email" name="" placeholder="Email" id="email"/>
          <img src={letter} alt=""/>
        </div>
        <div className="PasswordInpContainer">
          <input className="PasswordInput" type={eyeToggle?"text":"password"} placeholder="Password" name="" id="Password"/>
          <img src={lock} alt=""/>
          <span className="Eye" onClick={()=>SetEyeToggle(!eyeToggle)}><i className={eyeToggle?"fas fa-eye ":"fas fa-eye fa-eye-slash"}></i></span>
        </div>
        <label htmlFor="AgreeTerms" className="checkboxLabel mb-20">
          <input type="checkbox" name="" className="checkbox" id="AgreeTerms"/>
          Oxuyub razıyam &nbsp;<a className="FormLinks" href="https://gwbcenter.imgix.net/Publications/Articles/2020/04/scales-of-justice.jpg?fit=crop&crop=faces&w=1200&h=650">Şərtlər və qaydalarla</a>
        </label>
        <button className="btn-Account">Hesab yarat
            <div className="ribbonSwiper">&nbsp;</div>
        </button>
        <span className="AlreadyHave">Artıq bir hesabınız var mı ? <a className="FormLinks" href="#df"> Daxil olun</a></span>
    </form>
  </div>
   </div>
  )
}

export default SignUpForm