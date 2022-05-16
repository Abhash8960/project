import { useState } from "react";
import "./Signup.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
    fullname: "",
    phone: "",
  };
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  // java script form validation start

  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");
  const fullname = document.getElementById("fullname");
  const phone = document.getElementById("phone");

  const sendData = (sRate, count) => {
    if (sRate === count) {
      toast.success("Register Successfully");
    }
    navigate("/chart");
  };

  const successMsg = () => {
    let formCon = document.getElementsByClassName("signup__formcontrol");
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
      if (formCon[i].className === "signup__formcontrol success") {
        var sRate = 0 + i;
        sendData(sRate, count);
      } else {
        return false;
      }
    }
  };

  const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
  };

  const setErrorMsg = (input, errormsg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "signup__formcontrol error";
    small.innerText = errormsg;
  };

  const setSuccessMsg = (input) => {
    const formControl = input.parentElement;
    formControl.className = "signup__formcontrol success";
  };

  const validate = () => {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const fullnameVal = fullname.value.trim();
    const phoneVal = phone.value.trim();

    //validate email
    if (emailVal === "") {
      setErrorMsg(fullname, "email cannot be blank");
    } else if (!isEmail(emailVal)) {
      setErrorMsg(email, "not a valid email");
    } else {
      setSuccessMsg(email);
    }

    //validate password
    if (passwordVal === "") {
      setErrorMsg(password, "password cannot be blank");
    } else if (passwordVal.length <= 5) {
      setErrorMsg(password, "password must be 6 charactor");
    } else {
      setSuccessMsg(password);
    }

    //validate confirm password
    if (cpasswordVal === "") {
      setErrorMsg(cpassword, " confirm password cannot be blank");
    } else if (passwordVal !== cpasswordVal) {
      setErrorMsg(cpassword, "password and confirm password not match");
    } else {
      setSuccessMsg(cpassword);
    }

    //validate full name
    if (fullnameVal === "") {
      setErrorMsg(fullname, "fullname cannot be blank");
    } else if (fullnameVal.length <= 2) {
      setErrorMsg(fullname, "fullname minimum 3  charector");
    } else {
      setSuccessMsg(fullname);
    }

    //validate phone
    if (phoneVal === "") {
      setErrorMsg(phone, "Phone number cannot be blank");
    } else if (phoneVal.length !== 10) {
      setErrorMsg(phone, "phone number must be 10");
    } else {
      setSuccessMsg(phone);
    }
    successMsg();
  };

  //java script form validation end
  return (
    <>
      <div className="signup">
        <div className="signup__header">
          <h2>Create an account</h2>
        </div>
        <form onSubmit={handleSubmit} className="signup__form" id="form">
          <div className="signup__formcontrol">
            <label>Your email address</label>
            <input
              type="text"
              name="email"
              id="email"
              autocomplete="off"
              value={user.email}
              onChange={handleChange}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>

          <div className="signup__formcontrol">
            <label>Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="off"
              value={user.password}
              onChange={handleChange}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>

          <div className="signup__formcontrol">
            <label> Confirm your password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              autocomplete="off"
              value={user.cpassword}
              onChange={handleChange}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>

          <div className="signup__formcontrol">
            <label>Your full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              autocomplete="off"
              value={user.fullname}
              onChange={handleChange}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>

          <div className="signup__formcontrol">
            <label>Your phone number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              autocomplete="off"
              value={user.phone}
              onChange={handleChange}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>

          <input type="submit" value="Create account" className="signup__btn" />
        </form>
      </div>
    </>
  );
};

export default Signup;
