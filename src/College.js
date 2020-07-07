import React from "react";
import "./App.css";
import collegeImg from "./college_02.jpg";

function College(props) {
  return (
    <div
      style={{
        width: "43%",
        marginTop: "2%",
        borderRadius: "3px",
        padding: "2%",
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
          {props.college.promoted && (
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
          )}
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
              <h3 style={{ margin: "0px", textAlign: "center" }}>
                {props.college.rating}/5
              </h3>
              <h5 style={{ margin: "0px", textAlign: "center" }}>
                {props.college.rating_remarks}
              </h5>
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
              {props.college.tags.map((tag) => {
                return (
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
                      {tag}
                    </p>
                  </div>
                );
              })}
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
                  {props.college.ranking}
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
              {props.college.college_name.split("-")[0]}
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
            <p style={{ fontSize: "12px" }}>{props.college.nearest_place[0]}</p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>&nbsp;|&nbsp;</p>
            <p style={{ fontSize: "12px", color: "#bbb" }}>
              {props.college.nearest_place[1]}
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "2%", marginBottom: "2%" }}>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>93% Match</p>
            <p style={{ fontSize: "12px", color: "#4bb89e" }}>&nbsp;:&nbsp;</p>

            <p style={{ fontSize: "12px", color: "#bbb" }}>
              {props.college.famous_nearest_places.split(",")[0]}
            </p>

            <p style={{ fontSize: "12px", color: "#bbb" }}>
              {props.college.famous_nearest_places.split(",")[1]}
            </p>
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
            <p style={{ fontSize: "12px" }}>{props.college.offertext}</p>
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
              <del>₹{props.college.original_fees}</del>
            </p>
            <p
              style={{
                color: "#ffffff",
                backgroundColor: "#dd1c26",
                padding: "1% 2% 1% 2%",
              }}
            >
              {props.college.discount}
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
              ₹{props.college.discounted_fees}
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "12px" }}>{props.college.fees_cycle}</p>
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
            {props.college.amenties.map((amenities) => {
              return (
                <>
                  <p>{amenities}</p>
                  <p>&nbsp;</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default College;
