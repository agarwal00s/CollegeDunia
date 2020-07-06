import React from "react";
import "./App.css";
import collegeImg from './college_02.jpg';

function College() {
  return (
    <div
      style={{
        width: "50%",
        marginTop: "2%",
        borderRadius: "3px",
        padding: "2%",
        display: 'inline-block',
      }}
    >
      <div
        style={{
          zIndex: 1,
          background: `url(${collegeImg}) no-repeat center center/cover`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderTopLeftRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "17px 0 17px 20px",
                borderColor:
                  "cornflowerblue cornflowerblue cornflowerblue transparent",
                marginTop: "-2.3%",
              }}
            />
            <div
              style={{
                color: "#ffffff",
                backgroundColor: "cornflowerblue",
                padding: "1% 5% 1% 5%",
                marginTop: "-2.3%",
              }}
            >
              PROMOTED
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                backgroundColor: "goldenrod",
                padding: "1.5%",
                margin: "1.5%",
                borderRadius: "5px",
                width: "10%",
                marginBottom: "18%",
              }}
            >
              <h3 style={{ margin: "0px", textAlign: "center" }}>3.9/5</h3>
              <h5 style={{ margin: "0px", textAlign: "center" }}>Very Good</h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "1%",
              width: "unset",
              paddingBottom: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "8%",
                  borderRadius: "20px",
                  display: "flex",
                  marginRight: "2%",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    margin: "0px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Best college 2018
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "8%",
                  borderRadius: "20px",
                  display: "flex",
                  marginLeft: "2%",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    margin: "0px",
                    whiteSpace: "nowrap",
                  }}
                >
                  2Km Away
                </p>
              </div>
            </div>
            <div style={{ marginRight: "1%" }}>
              <div style={{ padding: "4%", display: "flex" }}>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "11px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    whiteSpace: "nowrap",
                  }}
                >
                  #7 in 260 colleges in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "0.1px solid #ccc",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
          padding: "2%",
          display: "flex",
        }}
      >
        <div style={{ width: "65%" }}>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "16px", margin: "0px" }}>
              Hansraj College Delhi University
            </p>
            <div style={{ marginLeft: "2%", fontSize: "16px" }}>
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star-o" />
              <span className="fa fa-star-o" />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "1%", marginBottom: "1%" }}>
            <p style={{ fontSize: "12px" }}>
              Near Vishwavidyalaya Metro Station
            </p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>&nbsp;|&nbsp;</p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>
              2Km away from Bus Stand
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "2%", marginBottom: "2%" }}>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>93% Match</p>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>&nbsp;:&nbsp;</p>
            <p
              style={{ fontSize: "12px", color: "#000000", fontWeight: "bold" }}
            >
              2.5km&nbsp;
            </p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>from GTB Nagar ,</p>
            <p
              style={{ fontSize: "12px", color: "#000000", fontWeight: "bold" }}
            >
              &nbsp;7km&nbsp;
            </p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>from Rajiv Chowk</p>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1%",
              marginBottom: "1%",
              backgroundColor: "#ccf5e7",
              padding: "2%",
              paddingLeft: "3%",
              marginLeft: "-3%",
              width: "75%",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <p style={{ fontSize: "12px" }}>Flat&nbsp;</p>
            <p style={{ fontSize: "12px" }}>Rs&nbsp;</p>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>2000</p>
            <p style={{ fontSize: "12px" }}>&nbsp;off + upto Rs&nbsp;</p>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>500</p>
            <p style={{ fontSize: "12px" }}>&nbsp;wallet! To avail&nbsp;</p>
            <div
              style={{ color: "#1999d2", fontSize: "12px", fontWeight: "bold" }}
            >
              LOGIN
            </div>
          </div>
        </div>
        <div style={{ width: "35%", paddingRight: "3%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p
              style={{ fontSize: "12px", display: "flex", paddingRight: "5%" }}
            >
              <del>₹6.8756</del>
            </p>
            <p
              style={{
                color: "#ffffff",
                backgroundColor: "#dd1c26",
                padding: "1% 2% 1% 2%",
              }}
            >
              20
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "#dd1c26", fontWeight: 700, margin: "0px" }}>
              ₹5,768
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "12px" }}>Per Semester (3 months)</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "5%",
              fontSize: "14px",
              color: "#4bb89e",
            }}
          >
            <p>Free Cancellation</p>
            <p>&nbsp;.&nbsp;</p>
            <p>Free Wi-Fi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default College;
