import React from "react";

function GMap() {
  return (
    <div className="map-section">
      <div id="myMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.425419518246!2d90.39687871402342!3d23.76786069402807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c763e0555551%3A0x3d93a0e0b2d254a5!2z4KaH4Kau4Kaq4Ka-4Kay4Ka4IOCmueCmvuCmuOCmquCmvuCmpOCmvuCmsg!5e0!3m2!1sbn!2sbd!4v1635235103056!5m2!1sbn!2sbd"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          width="100%"
          height="100%"
          frameBorder={0}
          title="iframe"
        />
      </div>
    </div>
  );
}

export default GMap;
