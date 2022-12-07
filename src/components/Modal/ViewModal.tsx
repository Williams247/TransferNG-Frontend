import CancelCircleIcon from "../icons/CancelCircle";
import UploadIcon from "../icons/Upload";

interface ViewModalProps {
  isOpen: boolean;
  url: string;
  loading: boolean;
  onClose: () => void;
  onUpload: () => void;
}

const ViewModal = ({
  isOpen,
  url,
  onClose,
  onUpload,
  loading,
}: ViewModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={`
          bg-[rgba(0,0,0,0.6)] w-full z-10 fixed flex
          justify-center bottom-0 left-0 h-screen`}
        >
          <div className={`bg-white rounded-md pt-1 mt-7 w-[40%] h-[400px]`}>
            <p className="text-[16px] px-3 py-2">Preview</p>
            <div className="flex pb-3 px-3">
              <button
                disabled={loading}
                className="flex hover:underline"
                onClick={onUpload}
              >
                {!loading && <UploadIcon />}
                <span className="text-[12px] px-1">
                  {loading ? "Loading...." : "Upload"}
                </span>
              </button>
              <button
                disabled={loading}
                className="flex hover:underline"
                onClick={onClose}
              >
                <CancelCircleIcon />
                <span className="text-[12px] px-1">Cancel</span>
              </button>
            </div>
            <div className="h-[400px] overflow-auto">
              <img src={url} alt="Upload" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewModal;
