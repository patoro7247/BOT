import React, {useState, useEffect} from "react";
import Papa from "papaparse";

interface DataPoint {
  postingDate: Date,
  amount: number, 
  balance: number
}

function parseDate(dateString: string) {
  const [month, day, year] = dateString.split("/").map(Number);
  console.log(month, day, year);
  return new Date(year+100, month - 1, day).getDate(); 
}

const FileUploadModal = ({ isOpen, onClose, onSubmit }) => {
    const [file, setFile] = useState(null);
    const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

    useEffect(() => {
      console.log(dataPoints);
    }, [dataPoints]);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    }

    const readFile = (results, parser) => {
      console.log("Row data: ", results.data);

      results.data.forEach((element) => {
        let date;
        let newAmount;
        let newBalance;
        let realRow = false;
        element.forEach((row, index) => {
          if(index == 1){
            date = parseDate(row);
            //date = row;
          } else if (index == 4 && !isNaN(Number(row))) {
            newAmount = Number(row);
          } else if (index == 9 && !isNaN(Number(row))) {
            newBalance = Number(row);
            realRow = true
          }
          
        })
      
        if(realRow){
          let newDataPoint : DataPoint = {
            postingDate : date,
            amount : newAmount,
            balance: newBalance 
          };
          
          setDataPoints((prevDataPoints) => [...prevDataPoints, newDataPoint]);
        }
      });

      

    }

    const handleFileSubmit = () => {
        if (file) {
            onSubmit(file);
            // add header:true to get data as json; requires proper header
            Papa.parse(file, {complete:readFile})
            onClose();
        } else {
            alert("Please select a file.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
        <div className="modal-container">
          <h2>Upload a File</h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="file-input"
          />
          <div className="modal-actions">
            <button onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button onClick={handleFileSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>  
    );

}

export default FileUploadModal;