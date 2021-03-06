import React from "react";

const CertificateList = ({ certificates }) => {

  return (
    <ul className="certificate-list">
      {certificates.map((certificate) => {

        const issuedDate = new Date(certificate.dateIssued);
        const issuedYear = `${issuedDate.getFullYear()}`;
        const issuedMonth = `${(issuedDate.getMonth() + 1) < 10 ? `0${issuedDate.getMonth() + 1}` : issuedDate.getMonth() + 1}`; // add one because .getMonth starts counting months at 0 for Jan
        let expiresDate, expiresYear, expiresMonth;
        if (certificate.expires) {
          expiresDate = new Date(certificate.expires);
          expiresYear = `${expiresDate.getFullYear()}`;
          expiresMonth = `${(expiresDate.getMonth() + 1) < 10 ? `0${expiresDate.getMonth() + 1}` : expiresDate.getMonth() + 1}`; // add one because .getMonth starts counting months at 0 for Jan
        }

        return (
          <article className="certificate" key={certificate.title}>
            <h3 className="certificate-title">{certificate.title}</h3>
            <p className="certificate-issuer"><a href={certificate.orgLink} target="_blank">{certificate.issuingOrg}</a></p>
            <div className="certificate-dates">
              <p className="certificate-dateissued"><time dateTime={`${issuedYear}-${issuedMonth}`}>Issued {certificate.dateIssued}</time></p>
              <p className="certificate-dateexpires">{certificate.expires
                ? <time dateTime={`${issuedYear}-${issuedMonth}`}>Expires {certificate.expires}</time>
                : "No Expiration Date"}
              </p>
            </div>
            {certificate.credentialID ? <p className="certificate-id">Credential ID: <span aria-label="Case-sensitive certificate ID.">{certificate.credentialID}</span></p> : ""}
            <p className="certificate-link"><a href={certificate.credentialURL} rel="external noopener" target="_blank">See certificate</a></p>
          </article>
        );

      })}
    </ul>
  );
}

export default CertificateList;
