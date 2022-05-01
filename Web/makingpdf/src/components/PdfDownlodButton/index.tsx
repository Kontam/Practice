import React, {useEffect} from 'react';
import { jsPDF } from "jspdf";

export const PdfDownloadButton = () => {
  const doc = new jsPDF();
  useEffect(() => {
    doc.html(document.querySelector("html").outerHTML);
  })
  const handleClick = () => {
    doc.save();
  };
  return (
  <button onClick={handleClick} type="button">dl</button>

  );
}

export default PdfDownloadButton;
