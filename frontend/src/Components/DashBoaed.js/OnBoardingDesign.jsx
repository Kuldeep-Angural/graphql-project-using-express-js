import React, { useState } from "react";

import BasicModal from "../Modal";
import { Button } from "bootstrap";
import { Card, CardContent, Fab, Grid, Link, Typography } from "@mui/material";


export const OnBoardingDesign = (props) => {
 

  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const text=props.text;
  return (
    <Card
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(156 221 235 / 19%), rgb(148 241 238 / 22%));",
        border: "1px solid #e9dddd",
      }}
    >
      <CardContent style={{ minHeight: "100px", color: "black" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={2}
                md={2}
                style={{ display: "flex", alignItems: "center" }}
              >
              <Typography
              variant="h6"
              component="h6"
              color={props.componentColor && props.componentColor}
              style={{
                color: props.color,
                lineHeight: '30px'
              }}
            >
            
                </Typography>
              </Grid>
              <Grid item xs={10} md={10}>
                <Typography>
                  <p>{props.title}</p>
                </Typography>
                <div>
                  <Typography
                    variant="p"
                    component="p"
                    color="secondary"
                    style={{
                      lineHeight: "28px",
                      display: "flex",
                    }}
                  >
                <p> 
                   {!isShowMore?text.slice(30,100)+"....":text}<button style={{ border:"none",backgroundColor:'transparent', color:'green' ,fontWeight:'520'}} onClick={toggleReadMoreLess}>
                   {isShowMore ? "Read Less" : "Read More"}
                 </button>  </p>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={12} style={{ display: "flex", justifyContent: "end" }}>
            <Fab
              size="small"
              aria-label="Add"
              style={{
                color: "#b2c4d5",
                lineHeight: "30px",
                boxShadow: "none",
              }}
              // title={btnTitle}
              // onClick={onclickButton}
            ></Fab>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
