import { pdfjs } from "react-pdf";

// Configure the PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

/**
 * Function to download a PDF file.
 * @param {string} pdfUrl - The URL of the PDF file to download.
 */
export const downloadPdf = (pdfUrl) => {
  // Create a hidden link element to trigger the download
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "exported.pdf";
  link.target = "_blank"; // Opens the link in a new tab
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
