import React from 'react';
import Grid from '@mui/material/Grid';
import Heart from '../../assets/Heart';
import './Post.css';
import Container from '@mui/system/Container';

function Posts() {

  return (
    <Container>
      <Grid container>
        <div className="postParentDiv">
          <div className="moreView">
            <div className="heading">
              <span>Quick Menu</span>
              <span>View more</span>
            </div>
            <div className="cards">
              <div
                className="card"
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src="../../../Images/R15V3.jpg" alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; 250000</p>
                  <span className="kilometer">Two Wheeler</span>
                  <p className="name"> YAMAHA R15V3</p>
                </div>
                <div className="date">
                  <span>Tue May 04 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="recommendations">
            <div className="heading">
              <span>Fresh recommendations</span>
            </div>
            <div className="cards">
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src="../../../Images/R15V3.jpg" alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; 250000</p>
                  <span className="kilometer">Two Wheeler</span>
                  <p className="name"> YAMAHA R15V3</p>
                </div>
                <div className="date">
                  <span>10/5/2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default Posts;
