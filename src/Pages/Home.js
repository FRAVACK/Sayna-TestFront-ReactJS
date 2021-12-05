import React, { Component } from 'react'; 
import Carousel from 'react-elastic-carousel';
import Chart from 'react-apexcharts';
import { BsArrowDownLeft } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";


const breakPoints = [
    {with: 1 , itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 800, itemsToShow: 3},
];
    


function Home(){

  const options = {
      series: [3,9],
      colors: ["#fff", "#2f357a"],
      plotOptions: {
          pie: {
              expandOnClick: false,
              donut: {
                  size:"22px",
                  labels: {
                      show: false
                  }
              }
          }
      }
      
  };
  const series = [3,9]

  const chart2 = {
    series: [1,5],
    colors: ["#fff", "#2f357a"],
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size:"22px",
                labels: {
                    show: false
                }
            }
        }
    }
    
};
const series2 = [2,15]

    return (
        <div>
        <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Klamma</span>
        </div>
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class='bx bx-home' ></i>
                <span class="links_name">Overview</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-credit-card-front' ></i>
                <span class="links_name">Cards</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-repost' ></i>
                <span class="links_name">Payments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-bar-chart-square' ></i>
                <span class="links_name">Repots</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class='bx bxs-contact' ></i>
                <span class="links_name">Contacts</span>
              </a>
            </li>
            <li class="settings">
              <a href="#">
                <i class='bx bx-cog' ></i>
                <span class="links_name">Setting</span>
              </a>
            </li>
            <li class="">
              <a href="#">
                <i class='bx bx-user' ></i>
                <span class="links_name">Account</span>
              </a>
            </li>
          </ul>
      </div>
      <div>
    <section class="home-section">
    <div class="head-section" >
        <span class="title">Your Cards </span>
          <span>
              <button class="btn-card" >
                <span class="txt-activities" >New Card</span>
                <i class='bx bx-plus'></i>
              </button>
          </span>
          <span class="icon-right" >
            <i class='bx bx-bell'></i>
          </span>
    </div>

    <div class="home-content">
    <div>
        <Carousel breakPoints={breakPoints}>
        <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">
                <img src="assets/images/card2.png" class="img-box" alt="" /> 
                <p class="centered">1242.42 <span>USD</span><br />
                <span>5495 7381 3759 2321</span><br />04 / 24</p>
            </div>  
          </div>  
        </div>
        </div>
        <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">
                <img src="assets/images/card5.png" class="img-box" alt="" /> 
                <p class="centered">249.00 <span>EUR</span><br />
                <span>4535 8933 1673 6770</span><br />05 / 25</p>
            </div>  
          </div>  
        </div>
        </div>
        <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">
                <img src="assets/images/card6.png" class="img-box" alt="" /> 
                 <p class="centered">249.00 <span>EURO</span><br />
                <span>5363 7205 7398 4138</span><br />01 / 25</p>
            </div>  
          </div>  
        </div>
        </div>
        <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">
                <img src="assets/images/card2.png" class="img-box" alt="" /> 
                <div class="centered">CRAD2</div>
            </div>  
          </div>  
        </div>
        </div>
        </Carousel>
    </div>

    <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="sales-details">
            <div class="chart-flex-container">
                 <div class="chart-flex-item"> 
                   <div class="chart-flex-subcontainer" >
                      <div>
                      <Chart 
                      options={options}
                      series={series}
                      type="donut"
                      width="60%"
                      height={300}
                      />
                      </div>
                      <div>
                        <p class="title-chart">Credit limit</p>
                        <p><span class="cost-left">1500</span><span class="cost-right"> / 2000 USD</span></p>
                      </div>
                    </div>
                  </div>
                 
                 
                <div class="chart-flex-item">
                   <div class="chart-flex-subcontainer" >
                     <div>
                        <Chart 
                        options={chart2}
                        series={series2}
                        type="donut"
                        width="60%"
                        height={300}
                        />
                      </div>
                      <div>
                        <p class="title-chart">Online limit</p>
                        <p><span class="cost-left">1324</span><span class="cost-right"> / 1500 USD</span></p>
                    </div>
                   </div>
                </div>
               
            </div>  
          </div>
          <div class="container-number">
            <span class="title">Int. Payments</span> <span class="title-right">the last 30 days</span>
            <div class="flex-container">
                <div class="flex-item">
                    <p class="number-style">8</p>
                    <p class="text-payment">Awaiting</p>
                </div>
                <div class="flex-item">
                    <p class="number-style">5</p>
                    <p class="text-payment">In Progress</p>
                </div>
                <div class="flex-item">
                    <p class="number-style">12</p>
                    <p class="text-payment">Completed</p>
                </div>
                <div class="flex-item">
                    <p class="number-style"> 4</p>
                    <p class="text-payment">Canceled</p>
                </div>              
            </div>
          </div> 
          <div class="flex-container-sub">
              <div class="box-edit left">
                <div>
                  <BsArrowDownLeft />
                  <span class="left-txt">   Money In</span>
                </div>
                <div class="box-subcontain">
                   <span class="title">   + 10,435.00</span><span>      USD</span>
                </div>
              </div>
              <div class="box-edit right">
                <div >
                  <BsArrowUpRight />
                  <span class="right-txt">   Money Out</span>
                </div>
                <div class="box-subcontain">
                   <span class="title">   - 4,640.00</span><span>    USD</span>
                </div>
              </div>
          </div>     
          </div>
        <div class="top-sales box">
          <span class="title">Recent activities </span>
          <span>
              <button class="btn-cart" >
                <p class="txt-activities" >View a report</p>
              </button>
          </span>
          <p class="title-box-activities">Today</p>
          <br />
           <div>
            <img src="assets/images/send-icon.png" class="img-icon" alt="" /> 
            <span class="text">
                <p class="txt-activities" >To Martin Mitchel</p>
                <p class="txt-status">Sent</p>
            </span>
            <span class="text-right">
                <p class="txt-activities">-3,004.52 <span><strong>USD</strong></span></p>
            </span>
            </div>
            <div>
            <img src="assets/images/send-icon.png" class="img-icon" alt="" /> 
            <span class="text">
                <p class="txt-activities">To Jane Klamberberg</p>
                <p class="txt-status">Sent</p>
            </span>
            <div class="text-right">
                <p class="txt-activities">-1,023.19 <span><strong>USD</strong></span></p>
            </div>
            </div>
            <div>
            <img src="assets/images/exchange.png" class="img-icon" alt="" /> 
            <span class="text">
                <p class="txt-activities">EUR TO USD</p>
                <p class="txt-status">Sent</p>
            </span>
            <div class="text-right">
                <p class="txt-activities">+1,456.00 <span><strong>USD</strong></span></p>
            </div>
            </div>

            <p class="title-box-activities">Yesterday</p>
            <br />
           <div>
            <img src="assets/images/credit-pay.png" class="img-icon" alt="" /> 
            <span class="text">
                <p class="txt-activities" >Starbucks</p>
                <p class="txt-status">Cafe & Restaurant</p>
            </span>
            <span class="text-right">
                <p class="txt-activities">-3,99<span><strong>USD</strong></span></p>
            </span>
            </div>
            <div>
            <img src="assets/images/icon-plus.png" class="img-icon" alt="" /> 
            <span class="text">
                <p class="txt-activities">Deposite to yout USD balance</p>
                <p class="txt-status">Sent</p>
            </span>
            <div class="text-right">
                <p class="txt-activities">4,000.00 <span><strong>USD</strong></span></p>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  </section>
  </div>
  
  </div>
  
        );
      }



export default Home;