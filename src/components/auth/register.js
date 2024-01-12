import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import url from "../../services/url";
import api from "../../services/api";
function Register(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
      });
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city:'',
        password: '',
    });
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerResponse = await api.post(url.USER.REGISTER, user);
            setRegisterSuccess(true);
            setTimeout(() => {
                window.alert('Register success!');
                navigate('/login');
            }, 2000);
        } catch (error) {
            setFormErrors({
                email: "Email already in use",
                password: "Invalid email or password.",
              });
        }
    };
    return(
        <main className="register-page">
        <section className="register-content paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Register</span></h2>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="form-contact">
                            <div className="row">
                                <form accept-charset="UTF-8" onSubmit={formSubmit} className="contact-form" method="POST">
                                    <div className="col-xs-12 col-md-12 col-sm-12">
                                        <input name="form_type" type="hidden" value="contact"/>
                                        <input name="utf8" type="hidden" value="✓"/>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon15">Name</span>
                                            <input type="text" onChange={handleChange} name="name"
                                                value={user.name} className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon16">Email</span>
                                            <input type="email" onChange={handleChange} name="email"
                                                value={user.email} className="form-control" aria-describedby="basic-addon3"/>
                                                {formErrors.email && <div className="invalid-feedback">{formErrors.email}
                                        </div>}
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">Phone</span>
                                            <input type="text" onChange={handleChange} name="phone"
                                                value={user.phone} className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">Address</span>
                                            <input type="text" onChange={handleChange} name="address"
                                                value={user.address} className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">City</span>
                                            <input type="text" onChange={handleChange} name="city"
                                                value={user.city} className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon14">Password</span>
                                            <input
                                            name="password"
                                            onChange={handleChange}
                                            value={user.password}
                                                type={showPassword ? 'text' : 'password'}
                                                className="form-control"
                                                aria-describedby="basic-addon3"
                                            />
                                            <span style={{minWidth:"50px"}} className="input-group-addon eye-icon" onClick={togglePasswordVisibility}>
                                                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                                </span>
                                        </div>
                                        <div className="for-pass full-width">
                                            <button type="submit" className="btn btn-primary btn-lg">Create An Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="creat-account">
                            <h4 className="margin-clear">Already have a account?</h4>
                            <a href="login" className="btn btn-lg btn-success margin-top-15">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}
export default Register;