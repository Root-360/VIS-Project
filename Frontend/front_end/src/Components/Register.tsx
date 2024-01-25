import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2500/api/register",
        formData
      );
      console.log("Registration successful:", response.data);
      toast.success("Login Successfully");
      navigate("/login");

      // Handle success, e.g., redirect the user or show a success message
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <section className="fxt-template-animation fxt-template-layout6 loaded">
        <div className="fxt-content">
          <div className="fxt-form">
            <h2 className="text-center">Register Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-4">
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-5">
                  <div className="fxt-content-between text-center">
                    <button type="submit" className="fxt-btn-fill">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="fxt-footer">
            <div className="fxt-transformY-50 fxt-transition-delay-10">
              <p>
                Don't have an account?
                <a href="/login" className="switcher-text2 inline-text">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterComponent;
