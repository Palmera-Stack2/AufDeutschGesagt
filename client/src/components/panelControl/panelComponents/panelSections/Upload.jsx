import panelUploadStyle from "../panelCss/panelUploadStyle.module.css";
import PanelNavbar from "./../../UI/PanelNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Upload() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchFileNames();
  }, []);

  const fetchFileNames = async () => {
    try {
      const res = await axios.get(`/api/files/list`);
      setOptions(res.data.Files);
      console.log("this is options Array", options);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const onSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    //POST request to the server with the filedata
    try {
      const res = await axios.post(`/api/files/create`, formData);

      console.log(uploadedImage);
      console.log("the response is ", res);
    } catch (error) {
      console.error(error);
    }
  };
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setUploadedImage(event.target.value);
  };
  return (
    <div className={panelUploadStyle.hero_upload}>
      <div className={panelUploadStyle.upload_container}>
        <PanelNavbar />
        <h2 className={panelUploadStyle.upload_heder}>
          Administrator Panel-Upload
        </h2>
        <hr />
        <h2 className={panelUploadStyle.h2}>Upload a file</h2>
        <div className={panelUploadStyle.upload_wrapper}>
          <form
            className={panelUploadStyle.upload_form}
            onSubmit={onSubmitForm}
          >
            {/* set the name of input to image  */}
            <input
              className={panelUploadStyle.upload_input}
              type="file"
              name="image"
              multiple={false}
            />
            <button className={panelUploadStyle.upload_button}>Upload</button>
          </form>
          <h3 className={panelUploadStyle.upload_subheader}>Hero Image</h3>
          <select
            name="files"
            id="files-select"
            onChange={onOptionChangeHandler}
          >
            <option>Please choose one option</option>
            {Array.isArray(options) &&
              options.map((option) => {
                return (
                  <option key={option._id} value={option.filePath}>
                    {option.originalname}
                  </option>
                );
              })}
          </select>
          <h3 className={panelUploadStyle.upload_subheader}>Hero Image</h3>
          <select
            name="files"
            id="files-select"
            onChange={onOptionChangeHandler}
          >
            <option>Please choose one option</option>
            {Array.isArray(options) &&
              options.map((option) => {
                return (
                  <option key={option._id} value={option.filePath}>
                    {option.originalname}
                  </option>
                );
              })}
          </select>

          {/* {uploadedImage && <img src={uploadedImage} />} */}
        </div>
      </div>
    </div>
  );
}
