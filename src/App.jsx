import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UploadBox from "./components/UploadBox";
import InfoCard from "./components/InfoCard";

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (!file) {
      alert("Please upload a document first.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const validDoc = file.name.toLowerCase().includes("aadhaar");

      if (validDoc) {
        setResult({
          success: true,
          name: "Rajesh Kumar Verma",
          document: "Aadhaar Card",
          dob: "15-08-1990",
          id: "XXXX XXXX 4829",
          address: "42, MG Road, Sector 14, Gurgaon, Haryana 122001",
          confidence: "96.4%",
          fraudRisk: "Low"
        });
      } else {
        setResult({
          success: false,
          message:
            "Invalid document. Please upload Aadhaar, PAN, Passport, Voter ID or Driving License."
        });
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        <section className="page">
          <h1>AI KYC Verification</h1>
          <p className="subtitle">
            Upload an Indian KYC document for AI-powered identity verification and fraud analysis
          </p>

          <UploadBox
            file={file}
            setFile={setFile}
            onVerify={handleVerify}
            loading={loading}
          />

          {result && result.success && (
            <div className="result-grid">
              <InfoCard label="Document Type" value={result.document} />
              <InfoCard label="Full Name" value={result.name} />
              <InfoCard label="Date of Birth" value={result.dob} />
              <InfoCard label="ID Number" value={result.id} />
              <InfoCard label="Address" value={result.address} full />
              <InfoCard label="OCR Confidence" value={result.confidence} />
              <InfoCard label="Fraud Risk Level" value={result.fraudRisk} />
            </div>
          )}

          {result && !result.success && (
            <div className="error-box">
              <h3>Verification Failed</h3>
              <p>{result.message}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}