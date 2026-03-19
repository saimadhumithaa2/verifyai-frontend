export default function UploadBox({ file, setFile, onVerify, loading }) {
  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  return (
    <div className="upload-card">
      <h3>Upload Document</h3>

      <label className="upload-box">
        <input type="file" accept="image/*,.pdf" onChange={handleChange} hidden />
        {!file ? (
          <>
            <div className="upload-icon">↑</div>
            <p>Drag & drop your document here</p>
            <span>or click to browse</span>
            <small>Supports Aadhaar, PAN, Passport, Voter ID, Driving License</small>
          </>
        ) : (
          <>
            <p><strong>{file.name}</strong></p>
            <small>{(file.size / 1024).toFixed(1)} KB</small>
          </>
        )}
      </label>

      <button className="verify-btn" onClick={onVerify} disabled={loading}>
        {loading ? "Verifying..." : "Verify Document"}
      </button>
    </div>
  );
}