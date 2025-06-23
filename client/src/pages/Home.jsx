import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div
        className="d-flex justify-content-center align-items-center text-center flex-grow-1 py-5"
        style={{
          backgroundImage: `url("/images/bg2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-4 fw-bold">SDLC Analyzer</h1>
          <p className="lead">
            Transform your SDLC documents into actionable insights with
            AI-powered analysis.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => {
              window.location.href = "/login";
              localStorage.removeItem("token");
              localStorage.removeItem("user");
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4">Project Overview</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Summary Generation</h5>
                <p className="card-text">
                  Generate concise summaries of SDLC documents, highlighting key
                  points and essential information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Resource Allocation</h5>
                <p className="card-text">
                  Optimize resource allocation based on project priorities and
                  AI-driven recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Task Prioritization</h5>
                <p className="card-text">
                  Identify high-priority tasks and streamline project workflows
                  for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Risk Analysis</h5>
                <p className="card-text">
                  Detect potential risks early and minimize impact with
                  comprehensive risk analysis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Error & Rework Analysis</h5>
                <p className="card-text">
                  Analyze errors and rework to identify bottlenecks and enhance
                  project quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Business Cost Optimization</h5>
                <p className="card-text">
                  Reduce project costs by leveraging AI-driven cost analysis and
                  optimization strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
