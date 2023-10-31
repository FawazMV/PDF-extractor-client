import axios from "./axiosInstance";

// Function to export a PDF based on selected pages
export const exportPdf = async (pdfFile, selectedPages) => {
  try {
    // Create a FormData object to send the PDF file and selected pages
    const formData = new FormData();
    formData.append("pdfFile", pdfFile);
    formData.append("selectedPages", JSON.stringify(selectedPages));

    // Make a POST request to the server to extract the PDF
    const result = await axios.post("/pdf/extract-pdf", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
      },
    });

    return result; // Return the result of the request
  } catch (error) {
    console.error(error);
    return error.response; // Return the error response in case of an error
  }
};

// Function to fetch saved PDFs
export const fetchSavedPdf = async () => {
  try {
    // Make a GET request to the server to fetch saved PDFs
    const result = await axios.get("/pdf/saved-pdfs");

    return result; // Return the result of the request
  } catch (error) {
    console.error(error);
    return error.response; // Return the error response in case of an error
  }
};
