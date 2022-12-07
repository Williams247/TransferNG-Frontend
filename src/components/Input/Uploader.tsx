import { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "../../utils/axios";
import ViewModal from "../Modal/ViewModal";
import "./styles.scss";

interface UploadFileProps {
  accept: string;
  urlCallBack: (url: string, publicId: string) => void;
}

const Uploader = ({ accept, urlCallBack }: UploadFileProps): JSX.Element => {
  const imageDOM = useRef<any>(null);

  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [objectURL, setObjectURL] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleSelect = (event: any) => {
    const file = event.target.files[0];
    setFileData(file);
    setObjectURL(URL.createObjectURL(file));
    setPreviewOpen(true);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const formData: FormData = new FormData();

      formData.append("file", fileData as any);
      const cloudinaryRes = await axios({
        method: "POST",
        url: "/upload-file",
        data: formData,
      });

      toast.success(cloudinaryRes.data.message);
      urlCallBack(cloudinaryRes.data.imageUrl, cloudinaryRes.data.public_id);
      setPreviewOpen(false);
      setIsUploaded(true);

      console.log(cloudinaryRes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <label>
        <div
          className={`w-full uploader py-6 cursor-pointer ${
            isUploaded ? "uploaded" : "upload-basic"
          }`}
        >
          <div>
            <input type={"file"} accept={accept} onChange={handleSelect} />
            <div className="flex justify-center">
              <span>Drag and Drop doument here or</span>
              <span className="cursor-pointer px-1">browse</span>
            </div>
          </div>
        </div>
      </label>
      <img ref={imageDOM} className={"hidden"} alt="Upload display" />
      <ViewModal
        url={objectURL}
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onUpload={handleUpload}
        loading={loading}
      />
    </>
  );
};

export default Uploader;
