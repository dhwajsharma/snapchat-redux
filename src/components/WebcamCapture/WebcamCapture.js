import { RadioButtonUnchecked } from "@material-ui/icons";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setCameraImage } from "../../features/cameraSlice"
import { useHistory } from "react-router-dom";
import "./WebcamCapture.css"

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
};


const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const dispatch = useDispatch(null);
    const history = useHistory();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");

    }, [webcamRef, history]);

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUnchecked
                className="webcamCapture_button"
                onClick={capture}
                fontSize="large"
            />
        </div>
    )
}

export default WebcamCapture
