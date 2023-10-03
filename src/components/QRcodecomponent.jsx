import "./QRcodecomponent.css";
import QRImage from "../assets/images/image-qr-code.png";

function QRcodecomponent() {
  return (
    <article className="QRCODE">
      <img src={QRImage} alt="" />
      <div className="desciption">
        <h1> Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}

export default QRcodecomponent;
