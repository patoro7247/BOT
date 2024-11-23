import React, {useState} from "react";
import Papa from "papaparse";

interface DataPoint {
  postingDate: string,
  amount: string, 
  balance: balance
}


const FileUploadModal = ({ isOpen, onClose, onSubmit }) => {
    const [file, setFile] = useState(null);
    const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    }

    const readFile = (results, parser) => {
      console.log("Row data: ", results.data);
      console.log("results type: "+typeof(results) +", results.data type: "+typeof(results.data) )

      results.data.forEach((element) => {
        let date = "";
        let newAmount;
        let newBalance;
        let realRow = false;
        element.forEach((row, index) => {
          if(index == 1){
            date = row;
          } else if (index == 4) {
            console.log("index = 4, row is: ", row);
            console.log("type of row: ", typeof(row));
            newAmount = row;
          } else if (index == 9) {
            newBalance = row;
            realRow = true
          }
          
        })

        if(realRow){
          let newDataPoint : DataPoint = {
            postingDate : date,
            amount : newAmount,
            balance: newBalance 
          };
          console.log(newDataPoint);
          setDataPoints((prevPoints) => [...prevPoints, newDataPoint]);
          console.log(dataPoints);
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