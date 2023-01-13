import React from "react";
import "./WelcomeBack.css";

function WelcomeBack(props) {
  const { illustration, welcomeBack, enterYourMobileNu, yourName, phone, createAccount, spanText1, spanText2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome-back screen">
        <div className="overlap-group2-12">
          <div className="illustration" style={{ backgroundImage: `url(${illustration})` }}></div>
          <img className="base-2" src="/img/base-1@1x.svg" alt="Base" />
          <div className="form">
            <div className="welcome">
              <div className="welcome-back-1 aeroport-medium-cloud-burst-24px">{welcomeBack}</div>
              <p className="enter-your-mobile-nu aeroport-regular-normal-manatee-14px">{enterYourMobileNu}</p>
            </div>
            <div className="country-1">
              <div className="overlap-group-27">
                <img className="object-9" src="/img/object-13@2x.svg" alt="Object" />
                <div className="your-name aeroport-regular-normal-storm-gray-16px">{yourName}</div>
              </div>
            </div>
            <div className="phone-3">
              <div className="overlap-group-27">
                <img className="object-10" src="/img/object-14@2x.svg" alt="Object" />
                <div className="phone-4 aeroport-regular-normal-storm-gray-16px">{phone}</div>
              </div>
            </div>
            <div className="bottom-buttons">
              <div className="button-2">
                <img className="object-11" src="/img/object-12@2x.svg" alt="Object" />
              </div>
              <div className="button-3">
                <div className="content-5">
                  <div className="create-account aeroport-medium-white-16px">{createAccount}</div>
                </div>
              </div>
            </div>
            <div className="new-user aeroport-regular-normal-white-14px-2">
              <span className="aeroport-regular-normal-manatee-14px">{spanText1}</span>
              <span className="span1-2 aeroport-regular-normal-bittersweet-14px">{spanText2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBack;
