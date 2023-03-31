import React, { useState } from "react";
import "../Style/InnerPage.css";
import form from "../Images/form.svg"
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container c">
      <div className="Tab-box">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Existing
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            New
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="row">
              <div className="col-4 col1 head">Content</div>
              <div className=" col-4 col1 head">Link</div>
            </div>
            <hr/>
            <div className="row tab_row">
            <div className="col-4 col1">Cloud Testing Master Test Strategy</div>
              <div className="col-4 col1"><a href="https://capgemini.sharepoint.com/sites/CloudTestingCapabilityUnit/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=GfgIce&xsdata=MDV8MDF8fDM1ZWM5YmQyMzEzMzRhZGFlZjJmMDhkYjMwNDA2NTI3fDc2YTJhZTVhOWYwMDRmNmI5NWVkNWQzM2Q3N2M0ZDYxfDB8MHw2MzgxNTY4MjUzMzYyMTMyOTV8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVFk0TURBNE5UY3pNekUzTlRzeE5qZ3dNRGcxTnpNek1UYzFPekU1T2pWak56RmtaR1U1TFdVM09URXROR0l3TlMxaFpXTXlMVGhrTldWalpqTmpZV1F5TVY5bE5XWTBPR00yWlMxak9ESTVMVFEyT0RjdFlUWXlNUzAyWldKbFlUSTBORFpqTldaQWRXNXhMbWRpYkM1emNHRmpaWE09fGU2ZDRhNmI0OWIwNjQ5MmRlZjJmMDhkYjMwNDA2NTI3fDExYjgwMTNkM2MzMDRiZjY4NzhmZWI1MzZkY2U5ZTM4&sdata=a1RiNUVwVktCUnIzMGdWLzFCQjV2Yk9rNENNdGRHdm9xZndnaG9UbkhVTT0%3D&ovuser=76a2ae5a%2D9f00%2D4f6b%2D95ed%2D5d33d77c4d61%2Cjuhi%2Dvijay%2Ea%2Egupta%40capgemini%2Ecom&OR=Teams%2DHL&CT=1680245584755&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzAzMDUwMTExMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&cid=c88409eb%2D14c7%2D4a7d%2D8662%2D9daeef8b5755&RootFolder=%2Fsites%2FCloudTestingCapabilityUnit%2FShared%20Documents%2FGeneral%2FCloud%20Testing%20Materials%2FCase%20Studies&FolderCTID=0x01200049F89AEF30440047BD427C70CE3744C1" target="_blank" className="link_form">Teams Link<span><img src={form}/></span></a></div>
          </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="row tab_row">
            <div className="col-4 col1">Cloud Testing Master Test Strategy</div>
              <div className="col-4 col1 "><a href="https://forms.office.com/e/jWbunUKjdx" target="_blank" className="link_form">Open Link<span><img src={form}/></span></a></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab
