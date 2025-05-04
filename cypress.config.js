const { defineConfig } = require("cypress");
//const XLSX = require("xlsx");
const path = require("path");
const { env } = require("process");
module.exports = {
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // on('task', {
      //   // readExcelFile(filePath) {
      //   //   const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
      //   //   const workbook = XLSX.readFile(absolutePath);
      //   //   const sheetName = workbook.SheetNames[0];
      //   //   const worksheet = workbook.Sheets[sheetName];
      //   //   const data = XLSX.utils.sheet_to_json(worksheet);
      //   //   return data;
      //   // }
      // });
      
    },
    env:
      {
        "baseUrl" : "https://rahulshettyacademy.com/seleniumPractise/#/"
      }
      
  }
};


