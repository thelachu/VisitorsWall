import { AlertCircle, CheckCircle, X } from "lucide-react";
import { useEffect } from "react";
import "./Toast.css";

function Toast() {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  const isSuccess = type === "success";
  return (
    <div
      className={`custom-toast ${isSuccess ? "toast-success" : "toast-error"}`}>
      <div className="toast-icon">
        {isSuccess ?
          <CheckCircle size={21} />
        : <AlertCircle size={21} />}
      </div>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>
        <X size={18} />
      </button>
    </div>
  );
}

export default Toast;
