import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PdfAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const analyzePDF = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setData(null);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await axios.post("http://localhost:7000/analyze-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setData(response.data);
    } catch (err) {
      setError("Error analyzing PDF");
    } finally {
      setLoading(false);
    }
  };

  const extractPoints = (text) => {
    return text.split(/\d+\.\s/).filter(point => point.trim() !== "");
  };

  const downloadTxtFile = () => {
    if (!data) return;

    const formatPoints = (points) => extractPoints(points).map((point, index) => `${index + 1}. ${point}`).join("\n");

    const textContent = `
📌 Summary:
${formatPoints(data.summary)}

✅ Task Prioritization:
${formatPoints(data.taskPrioritization)}

📦 Resource Allocation:
${formatPoints(data.resourceAllocation)}

⚠️ Risk Analysis:
${formatPoints(data.riskAnalysis)}

🛠️ Error & Rework Analysis:
${formatPoints(data.errorRework)}

💰 Business Cost Optimization:
${formatPoints(data.businessCost)}
`;

    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Analysis_Report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-gradient text-center py-4" style={{ background: "linear-gradient(135deg, #4c84ff, #6b5b95)" }}>
                <h2 className="mb-0">📄 PDF Analysis Report</h2>
              </div>
              <div className="card-body p-5">
                <div className="mb-4">
                  <input type="file" className="form-control" accept="application/pdf" onChange={handleFileChange} />
                </div>
                <button className={`btn btn-primary w-100 py-2 mb-3 ${loading && "disabled"}`} onClick={analyzePDF}>
                  {loading ? "🔍 Analyzing..." : "📊 Analyze PDF"}
                </button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}

                {data && (
                  <div className="mt-5">
                    <h3 className="text-center mb-4">📊 Analysis Report</h3>
                    {[
                      { title: "📌 Summary", text: data.summary, icon: "📌" },
                      { title: "✅ Task Prioritization", text: data.taskPrioritization, icon: "📝" },
                      { title: "📦 Resource Allocation", text: data.resourceAllocation, icon: "📊" },
                      { title: "⚠️ Risk Analysis", text: data.riskAnalysis, icon: "⚡" },
                      { title: "🛠️ Error & Rework Analysis", text: data.errorRework, icon: "⚙️" },
                      { title: "💰 Business Cost Optimization", text: data.businessCost, icon: "💸" },
                    ].map((item, index) => (
                      <div className="card bg-light mb-4 shadow-sm" key={index}>
                        <div className="card-body">
                          <h5 className="card-title">
                            {item.icon} {item.title}
                          </h5>
                          <ul>
                            {extractPoints(item.text).map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                    <button className="btn btn-success mt-4 w-100 py-2 shadow-sm" onClick={downloadTxtFile}>
                      📥 Download Report as TXT
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfAnalyzer;
