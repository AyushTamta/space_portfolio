import React from "react";
import "./Organizations.css";
import iciciLogo from "./organization-logos/icici.png";
import turingLogo from "./organization-logos/turing.ico";
import nabLogo from "./organization-logos/nab.png";
import oyoLogo from "./organization-logos/oyo.png";
import cloudThatLogo from "./organization-logos/cloudthat.ico";

const organizations = [
  { name: "ICICI Bank", logo: iciciLogo, className: "icici" },
  { name: "Turing", logo: turingLogo, className: "turing" },
  { name: "National Australia Bank", logo: nabLogo, className: "nab" },
  { name: "OYO Rooms", logo: oyoLogo, className: "oyo" },
  { name: "CloudThat Technologies", logo: cloudThatLogo, className: "cloudthat" },
];

const Organizations = () => (
  <section className="organizations-section" id="organizations" aria-label="Organizations and industry experience">
    <div className="organizations-glow" aria-hidden="true"></div>
    <div className="organization-planet" aria-hidden="true">
      <span></span>
    </div>
    <div className="organizations-content">
      <p className="organizations-kicker">Experience across industries</p>
      <div className="organizations-marquee">
        <div className="organizations-track">
        {[...organizations, ...organizations].map((organization, index) => (
          <article
            className="organization-card"
            key={`${organization.name}-${index}`}
            aria-hidden={index >= organizations.length}
            aria-label={index < organizations.length ? organization.name : undefined}
          >
            <div className={`organization-mark ${organization.className}`} aria-hidden="true">
              <img src={organization.logo} alt="" />
            </div>
          </article>
        ))}
        </div>
      </div>
    </div>
  </section>
);

export default Organizations;
