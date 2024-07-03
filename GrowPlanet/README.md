# GrowPlanet

Project for Google Cloud India Hackathon in Collaboration with GFG

## Grow Planet

By Team Aogiri Tree IIIT Allahabad

- **Video**: [Grow Planet](https://www.youtube.com/watch?v=s6tjEqioBhg)
- **Live Demo**: [Grow Planet Website](https://grow-planet.cyclic.app/)

Our vision is to help farmers with every information required to grow crops in a single place to assist growth of crops. Though we are primarily focusing on India now, we have a greater vision to help farmers all over the world at a later stage. That’s where Grow Planet kicked in.

### Project-Theme: Agro-Tech

---

## Project Description:

Farmers face a lot of problems in finding correct fertilizers for crops, and correct crops for their fields. Even if they manage to grow crops successfully, they fail to sell them at a proper price. Moreover, they miss out on important news related to government subsidies on crops or new farming methods like organic farming, terrace farming, etc. Our project aims to solve all these problems and become a one-stop solution for all farmers.

### Key Features:

1. **Plantopedia**:
   - Provides comprehensive information about growing specific crops.
   - Details include crop description, soil type, water and fertilizer requirements, temperature, growth time, nutrition, and cost per unit area.

2. **PlantLab**:
   - Uses latitudinal and longitudinal data to determine the best possible crop for a location.
   - Analyzes nitrogen, phosphorus, potassium, humidity, rainfall, pH, and temperature data.

3. **SellHere**:
   - Helps farmers find the most economic mandi to sell their crops at a profitable price based on their location and crop type.

4. **News**:
   - Delivers the latest news related to farming, including government subsidies and new farming techniques.

5. **Disease-Predictor**:
   - Uses PlantId API to identify crop diseases from photos and provides measures to take for each identified disease.

6. **Produce Bidding System**:
   - Allows farmers to list their crops and quantity with a base price.
   - Buyers (mainly wholesalers) can place bids, and farmers can choose to sell based on the bids.
   - Contact information is provided for both farmers and buyers to facilitate negotiations.

---

## Technology Used:

1. **Front-End**: EJS, CSS, HTML, JavaScript
2. **Back-End**: NodeJs, ExpressJs
3. **Database**: MySQL
4. **APIs**: PlantId, NewsAPI
5. **Machine Learning Model**: SVM

---

## How to Run GrowPlanet Software

### Pre-requisite Software:

- Node.js (version 16 or above)
- NPM (version 8 or above)
- MySQL

### Steps to Set Up Environment:

1. Download Node.js from the official Node.js website for Windows. On Ubuntu, run `sudo apt install nodejs`.
2. Verify Node.js installation with `node -v`.
3. Download NPM from the official NPM website for Windows. On Ubuntu, run `sudo apt-get install npm`.
4. Download the SQL files from the grow_planet.zip.
5. Run the SQL queries in MySQL to create the database.
   - Note: The database name should be `grow_planet`, and the username and password for connecting to MySQL should be adjusted in the code accordingly.

### Steps to Run:

1. Unzip `grow_planet.zip` to get all content in a folder.
2. Change directory to the `src` directory.
3. Open terminal in the `src` directory.
4. Run `npm install`. If there is an error, run `npm install ejs body-parser express mysql2`.
5. Start the server with `node server.js`.
6. Access the project in your browser at `localhost:3000`.

---

## Important Notes:

- Ubuntu might install older versions of Node.js and NPM. Ensure that you are using the latest versions.
- Some browsers may not allow JavaScript to run. Adjust your browser settings to enable JavaScript.
- If the program crashes, close the browser window and re-run `node server.js` in the `src` directory.

