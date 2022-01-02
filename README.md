# About the Project

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/1Tolv2/FrontEnd3-CRM">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">FrontEnd3 CRM</h3>

  <p align="center">
    CRM app built in React as my Front End 3 examination project
    <br />
    <a href="https://github.com/1Tolv2/FrontEnd3-CRM"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/1Tolv2/FrontEnd3-CRM/issues">Propose Feature</a>
    <a href="https://github.com/1Tolv2/FrontEnd3-CRM/issues">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
	<li><a href="#graded-requirements">Graded requirements<a>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This Customer Relationship Management app, CRM, is my examination project for my Front End 3 course.
The project determines my final grade, we have a grade system of G, good, and VG, very good so I will have the parts marked with VG that were needed to be incorporated to get that specific grade. The API is provided by our teacher.
The features progress bars are just dummies and not functioning bars.

### Graded requirements

Following are the requirements of the examination project and what we needed to show that we were able to use.
* React
* JSX
* React Router DOM
* useState
* useEffect
* VG: useContext (save customer list and logged in user in Context)
* Styled Components
** Create styled components
** VG: inherit CSS-properties from other components

#### 1. Log in user
Here there will be input field displayed for email and password with a log in button. When the button is pressed a call is
made to /api-token-auth/ with the email and password. In response we will receive a token.

#### 2. Home page
When the user logged in successfully, we navigate to /home
Features on the home page:
* List all customers which is connected to the user (GET /api/v1/customers)
* Give the user the ability to add customers (POST /api/v1/customers)
  - The user is going to need to register the following values to create a customer:
    - name: string (required by the API)
    - organisationNr: string
    - vatNr: string
      - VG: Validate the input field so that it follows the format SE followed by 10 numbers
    - reference: string
    - paymentTerm: integer (If not added will automatically be put to 30)
    - website: string
    - email: string
    - phoneNumber: string
  - When the new customer has been created the customer list will be updated
* Show what user is logged in (api/v1/me) with the following information:
  - email, firstName and lastName

#### 3. Detail view of specific customer
* The specific customers information will be displayed:
  - name
  - organisationNr
  - vatNr
  - reference
  - paymentTerm
  - website
  - email
  - phoneNumber
* VG: Have a delete button that removes the customer (DELETE /api/v1/customers/${id}). After the customer is deleted navigate to the home page. (/home)
* VG: Give the user the possibility to change the customers information (PUT/PATCH)

#### 4. VG: Create a user
Add the feature to create a user (PUT /auth/users).
The email that is used will receive an activation email, so you need to be able to access that email.

#### 5. VG: Activate user
In the email you receive you get a link with a uid and a token. When clicked we get to our /login page, use useLocation and URLSearchParams to get the uid and token.
When we have those we will POST the uid and token to auth/users/activate.
After successfully activating the user, navigate to /login without the uid and token parameter.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow the information down below.

### Prerequisites

These are the softwares that I have used during the building of this project
* npm
  ```sh
  npm install npm@latest -g
  ```
* React Router DOM (installed locally in the app)
  ```sh
  npm install react-router-dom
  ```
  * Styled Components (installed locally in the app)
  ```sh
  npm install styled-components
  ```

### Installation
 
1. First start cloning the repo by entering the below command in your terminal.
   ```sh
   git clone https://github.com/1Tolv2/FrontEnd3-CRM.git
   ```
2. After cloning the repository, cd in to the new folder and type the below command.
   ```sh
   npm install
   ```
3. Type the following command to begin development mode.
   ```sh
   npm start
   ```
4. Open <a href="http://http://localhost:3000/">http://http://localhost:3000/</a> in your prefered browser.
The page reloads as you make changes and save your code.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are som links to that I've found very helpful during the development and I would like to give credit to.

* [Regex cheat sheet](https://www.rexegg.com/regex-quickstart.html)
* [UX Collective: Dark mode guide](https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129)
* [Medium](https://medium.com/) *I just generally found all the information posted by users here extremly helpful!*
* [README template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>
