import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import url from "../../services/url";

function Login(){
    
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const [formErrors, setFormErrors] = useState({
  email: "",
  password: "",
});
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setFormErrors({ ...formErrors, [name]: "" });
};
const validateForm = () => {
  let valid = true;
  const newErrors = {};

  if (!formData.email) {
      newErrors.email = "Please enter your email address.";
      valid = false;
  }

  if (!formData.password) {
      newErrors.password = "Please enter your password.";
      valid = false;
  } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
  } else if (formData.password.length > 50) {
      newErrors.password = "Password must be less than 50 characters.";
      valid = false;
  }

  setFormErrors(newErrors);
  return valid;
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loginResponse = await api.post(url.USER.LOGIN, formData,config);
        const token = loginResponse.data.token;
        localStorage.setItem("accessToken", token);
        navigate("/",1500);
        window.location.reload();
    } catch (error) {
      setFormErrors({
        email: "Invalid email or password.",
        password: "Invalid email or password.",
      });
    }
  }
};
    return(
        <main className="login-page">
        <section className="login-content paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Login</span></h2>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="form-contact">
                            <div className="row">
                                <form accept-charset="UTF-8" className="contact-form" method="post" onSubmit={handleSubmit}>
                                    <div className="col-md-12 col-xs-12 col-sm-12">
                                        <input name="form_type" type="hidden" value="contact"/>
                                        <input name="utf8" type="hidden" value="✓"/>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">Email</span>
                                            <input name="email" onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon30"/>
                                            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon14">Password</span>
                                            <input name="password" onChange={handleChange} type={showPassword ? 'text' : 'password'} className="form-control" aria-describedby="basic-addon3"/>
                                            <span style={{minWidth:"50px"}} className="input-group-addon eye-icon" onClick={togglePasswordVisibility}>
                                                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                                </span>
                                        </div>
                                        <div className="for-pass full-width">
                                            <button type="submit" className="btn btn-primary btn-lg">Login Account</button>
                                            <div className="new-customer overflow full-width display-inline-b margin-top-15">
                                                <h5 className="text-capitalize display-inline-b position-r pop-light">Forget password?</h5>
                                                <a href="reset-password" className="forget margin-top-15 text-color-1 brand-color text-underline">Reset Password</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="creat-account">
                            <h4 className="margin-clear">Are you new Customer?</h4>
                            <a href="/register" className="btn btn-lg btn-success margin-top-15">Create An Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}
export default Login;