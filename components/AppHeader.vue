<template>
  <header v-html="headerView"></header>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted () {
      let self = this;
      axios.get('/api/header.json')
        .then(function (response) {
          // handle success
          console.log(response);
          self.headerView = response.data.view;
        });
    },
    data () {
      return {
        headerView : '',
      }
    }
  }
</script>

<style>
  /* Sub Navigation Bar */
  .new-sub-nav {
    /* End of Sub Navigation Bar */
    /* Screens <768px */ }
  .new-sub-nav .nav > li > a {
    padding: 6px 15px;
    color: #0066cc; }
  .new-sub-nav .nav > li > a:hover {
    color: #ff9000;
    background-color: transparent; }
  .new-sub-nav .sub-nav {
    position: relative;
    display: block;
    z-index: 999;
    height: 115px;
    border-bottom: 1px solid #f6f5f6;
    background-color: #ffffff;
    box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.2);
    margin-bottom: 68px; }
  .new-sub-nav .sub-nav .slogan {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 32px;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-left: 6px;
    margin-bottom: 5px;
    color: #999999;
    font-size: 14px; }
  @media (max-width: 1200px) {
    .new-sub-nav .sub-nav .slogan {
      font-size: 12px; } }
  .new-sub-nav .sub-nav .container {
    position: relative;
    height: inherit; }
  .new-sub-nav .sub-nav .nav-menu {
    margin-top: 15px;
    width: 100%;
    font-size: 16px; }
  .new-sub-nav .sub-nav .nav-menu .category-header {
    display: block;
    font-size: 24px; }
  .new-sub-nav .sub-nav .nav-menu .nav-item {
    font-size: 1.2em; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-category {
    position: relative;
    display: table-cell;
    float: none;
    padding: 0;
    border-right: 2px solid transparent; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-category:last-child {
    border-right: 0; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-category .nav-links {
    overflow: hidden;
    padding: 10px 8px 16px;
    font-weight: 700;
    font-size: 14px;
    color: #4d4d4d;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #ffffff;
    border-radius: 0;
    border-top: 3px solid #f5f5f5; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box {
    position: absolute;
    top: 47px;
    z-index: 2;
    display: none;
    width: 900px;
    padding: 4px 0 0 0;
    font-size: 90%;
    background-color: transparent;
    border: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box .nav-columns:before {
    left: 280px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box .nav-columns:after {
    left: 560px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box .nav-content {
    padding: 20px;
    background-color: #ffffff;
    border-top: 2px solid #00acee;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box.no-ads {
    width: 580px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box.no-ads .nav-columns:after {
    display: none; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box .nav-box-before {
    content: "";
    position: absolute;
    display: inline-block;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #000000;
    border-left: 9px solid transparent;
    box-shadow: none;
    top: -4px;
    left: 4px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-box .nav-box-after {
    content: "";
    position: absolute;
    display: inline-block;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    border-left: 8px solid transparent;
    box-shadow: none;
    top: -2px;
    left: 5px; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-category:hover .nav-links {
    background-color: #F5F6F7; }
  .new-sub-nav .sub-nav .nav-menu .nav-pills .nav-category:hover .nav-box {
    display: block; }
  .new-sub-nav .sub-nav hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #cad3df; }
  .new-sub-nav .sub-nav .nav-columns {
    position: relative;
    padding-top: 18px;
    margin: 0 -18px 0 -19px;
    overflow: hidden; }
  .new-sub-nav .sub-nav .nav-columns .flex-menu {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .new-sub-nav .sub-nav .nav-columns .flex-menu .padding-sub-menu {
    padding-right: 5px; }
  .new-sub-nav .sub-nav .nav-columns .child-menu .flex-menu {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center; }
  .new-sub-nav .sub-nav .nav-columns .column {
    display: block;
    float: left;
    padding: 0 18px 0 19px; }
  .new-sub-nav .sub-nav .nav-columns .column .menu-logo {
    width: 32px;
    color: #4d4d4d;
    margin: 0 4px 0 0;
    font-size: 32px; }
  .new-sub-nav .sub-nav .nav-columns .column.type-1 {
    width: 280px; }
  .new-sub-nav .sub-nav .nav-columns .column.type-2 {
    width: 327px; }
  .new-sub-nav .sub-nav .nav-columns .column span {
    display: block;
    margin-bottom: 12px;
    font-size: 24px; }
  .new-sub-nav .sub-nav .nav-columns::before, .new-sub-nav .sub-nav .nav-columns::after {
    content: '';
    position: absolute;
    top: 18px;
    left: -100px;
    display: block;
    background-color: #cad3df;
    width: 1px;
    height: 100%; }
  .new-sub-nav .sub-nav .detail-section {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 12px;
    height: 32px; }
  @media (max-width: 1200px) {
    .new-sub-nav .sub-nav .detail-section {
      right: 22%; } }
  .new-sub-nav .sub-nav .detail-section .telephone-sect {
    display: -ms-grid;
    display: grid;
    padding-right: 20px; }
  .new-sub-nav .sub-nav .detail-section .telephone-sect .contact-day {
    font-size: 12px;
    font-weight: 400;
    color: #4d4d4d;
    text-align: right; }
  .new-sub-nav .sub-nav .detail-section .telephone-sect .telephone {
    font-size: 18px;
    font-weight: 600;
    color: #ff9000;
    text-align: right; }
  .new-sub-nav .sub-nav .detail-section .social-sect {
    border-left: 1px solid #f5f5f5;
    padding-left: 15px;
    padding-right: 15px;
    height: 42px; }
  .new-sub-nav .sub-nav .detail-section .social-sect .logo-link {
    text-decoration: none; }
  .new-sub-nav .sub-nav .detail-section .social-sect .logo {
    display: inline-block;
    vertical-align: middle;
    height: 42px;
    width: 42px;
    padding: 0 5px;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out; }
  .new-sub-nav .sub-nav .detail-section .social-sect .logo:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1); }
  .new-sub-nav .sub-nav .detail-section .login-sect {
    display: none;
    padding-left: 20px;
    margin-top: 2px; }
  .new-sub-nav .sub-nav .detail-section .login-sect .logo-link {
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #4d4d4d; }
  .new-sub-nav .sub-nav .detail-section .login-sect .logo {
    display: inline-block;
    vertical-align: middle;
    height: 37px;
    width: 37px;
    padding-right: 5px;
    margin-top: 2px; }
  .new-sub-nav .sub-nav .detail-section .login-sect .logo.no-margin {
    margin-top: 0; }
  .new-sub-nav .sub-nav .detail-section .login-sect #user-detail {
    height: 50px; }
  .new-sub-nav .sub-nav .detail-section .login-sect #user-detail:hover + .dropdown-menu {
    display: block; }
  .new-sub-nav .sub-nav .detail-section .login-sect .ricon-arrow-small-down {
    background-color: #e6e7e8;
    color: #ffffff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    margin-top: 10px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    float: right;
    font-size: 7px;
    text-align: center;
    vertical-align: middle; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu {
    display: none;
    clear: both;
    margin-top: 19px;
    min-width: 230px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 1px 5px #cccccc; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu:hover {
    display: block; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu::after, .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu::before {
    bottom: 100%;
    left: 36px;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu::after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu::before {
    border-color: rgba(221, 221, 221, 0);
    border-bottom-color: #ddd;
    border-width: 11px;
    margin-left: -11px; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu .sub-login-block {
    border-bottom: 1px solid #f6f5f6;
    margin: 5px 0; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu .sub-login-block:last-child {
    border-bottom: 0; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu .sub-login-block .sub-login-menu {
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 600; }
  .new-sub-nav .sub-nav .detail-section .login-sect .dropdown-menu .sub-login-block .sub-login-menu:hover {
    background-color: #ffffff;
    color: #0066cc; }
  .new-sub-nav .sub-nav .nav-links-article {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    font-size: 16px;
    font-weight: normal; }
  .new-sub-nav .sub-nav .nav-logo-section {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 11px; }
  .new-sub-nav .sub-nav.navbar-fixed-top {
    position: fixed;
    top: 39px;
    margin: 0; }
  .new-sub-nav .sub-nav .nav-block-right {
    position: absolute;
    right: 0; }
  .new-sub-nav .sub-nav .nav-block-left {
    padding-left: 0px; }
  .new-sub-nav .sub-nav ul {
    display: table;
    width: 100%;
    font-size: 16px;
    font-weight: normal; }
  .new-sub-nav .sub-nav #logo-link {
    display: inline-block;
    vertical-align: top;
    height: 65px;
    width: auto;
    padding: 20px 0 0 0; }
  .new-sub-nav .sub-nav .logo {
    display: inline-block;
    vertical-align: middle;
    height: 32px; }
  .new-sub-nav .sub-nav .partner-logo {
    display: inline-block;
    vertical-align: top;
    max-height: 40px;
    max-width: 40px; }
  .new-sub-nav .list-inline {
    font-weight: bold;
    color: #737373;
    text-transform: uppercase;
    margin: 0;
    white-space: nowrap; }
  .new-sub-nav .list-inline > li {
    vertical-align: top; }
  .new-sub-nav .list-inline .lang-switch {
    position: relative;
    line-height: 60px;
    padding: 0 0 0 20px; }
  .new-sub-nav .list-inline .lang-switch a img {
    border-radius: 4px; }
  .new-sub-nav .list-inline .lang-switch:before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1px;
    height: 23px;
    left: 0;
    top: 20px;
    background-color: #f7f8fa; }
  .new-sub-nav .list-inline .phone {
    position: relative;
    display: inline-block;
    height: 68px;
    background-color: #fe811d;
    right: -15px; }
  .new-sub-nav .list-inline .phone a {
    display: block;
    color: #ffffff;
    padding: 5px 15px 15px 50px;
    width: 100%;
    height: 100%;
    text-align: center; }
  .new-sub-nav .list-inline .phone a:hover .ricon {
    -webkit-transform: scale(1.2);
    transform: scale(1.2); }
  .new-sub-nav .list-inline .phone a .ricon {
    position: absolute;
    left: 10px;
    top: 15px;
    display: block;
    font-size: 35px;
    width: 35px;
    height: 35px;
    transition: all 0.2s linear; }
  .new-sub-nav .list-inline .phone a .number {
    font-size: 28px;
    line-height: 0;
    margin: 20px 0 5px;
    position: relative; }
  .new-sub-nav .list-inline .phone a .time {
    text-transform: capitalize;
    font-size: 15px;
    line-height: 34px; }
  .new-sub-nav.mobile-nav-header .logo {
    max-height: none; }
  .new-sub-nav .logo-rewards {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-left: 15px;
    max-height: 30px;
    margin-top: 10px; }
  .new-sub-nav .navbar-nav {
    color: #000000; }
  .new-sub-nav .navbar-nav .border-line {
    border-right: 1px solid #dddddd; }
  .new-sub-nav .navbar-nav a {
    color: #808080; }
  .new-sub-nav .navbar-nav a .nav-icon {
    width: 25px;
    height: 25px; }
  .new-sub-nav .navbar-nav a:hover {
    color: #80bd01;
    background-color: #ffffff; }
  .new-sub-nav #subnav-padding {
    height: 115px; }
  .new-sub-nav.new-sub-nav--hidden-menu .sub-nav,
  .new-sub-nav.new-sub-nav--hidden-menu #subnav-padding {
    height: 63px; }
  @media only screen and (max-width: 768px) {
    .new-sub-nav #rabbit-header {
      display: none; }
    .new-sub-nav #subnav-padding {
      height: 57px; }
    .new-sub-nav #submenu-mobile {
      position: relative;
      top: 57px; }
    .new-sub-nav #navbar-collapse-sub a {
      color: #dddddd; }
    .new-sub-nav .sub-nav {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      height: 57px;
      width: 100%;
      top: 0;
      padding: 0; }
    .new-sub-nav .sub-nav.navbar-fixed-top {
      top: 0; }
    .new-sub-nav .sub-nav .subnav-mobile {
      margin: 0; }
    .new-sub-nav .sub-nav .subnav-mobile .logo-container {
      width: auto;
      max-width: calc(100% - 130px);
      position: relative;
      cursor: pointer; }
    .new-sub-nav .sub-nav .subnav-mobile .logo-container .navbar-brand {
      padding: 0;
      margin: 8px auto;
      height: 40px; }
    .new-sub-nav .sub-nav .subnav-mobile .nav-phone {
      color: #fe811d;
      display: block;
      text-align: center;
      width: 57px;
      height: 57px;
      font-size: 34px;
      line-height: 63px; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle {
      background-color: #dddddd;
      margin: 11px;
      width: auto;
      border-radius: 0; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle:hover {
      background-color: #000000; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle .icon-bar {
      background-color: #ffffff; } }
  @media only screen and (max-width: 768px) {
    .new-sub-nav #rabbit-header {
      display: none; }
    .new-sub-nav #subnav-padding {
      height: 57px; }
    .new-sub-nav #submenu-mobile {
      position: relative;
      top: 57px; }
    .new-sub-nav #navbar-collapse-sub a {
      color: #dddddd; }
    .new-sub-nav .sub-nav {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      height: 57px;
      width: 100%;
      top: 0;
      padding: 0; }
    .new-sub-nav .sub-nav.navbar-fixed-top {
      top: 0; }
    .new-sub-nav .sub-nav .subnav-mobile {
      margin: 0; }
    .new-sub-nav .sub-nav .subnav-mobile .logo-container {
      width: auto;
      max-width: calc(100% - 130px);
      position: relative;
      cursor: pointer; }
    .new-sub-nav .sub-nav .subnav-mobile .logo-container .navbar-brand {
      padding: 0;
      margin: 8px auto;
      height: 40px; }
    .new-sub-nav .sub-nav .subnav-mobile .nav-phone {
      color: #fe811d;
      display: block;
      text-align: center;
      width: 57px;
      height: 57px;
      font-size: 34px;
      line-height: 63px; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle {
      background-color: #dddddd;
      margin: 11px;
      width: auto;
      border-radius: 0; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle:hover {
      background-color: #000000; }
    .new-sub-nav .sub-nav .subnav-mobile .navbar-toggle .icon-bar {
      background-color: #ffffff; } }
</style>