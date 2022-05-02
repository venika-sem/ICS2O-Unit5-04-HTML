/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit5-03-HTML/",
  })
}

/**
 * This function determines if a person is eligible for movie rates.
 */
function myButtonClicked() {
  //input
  const seventeenAbove = document.getElementById("seventeenAbove").checked
  const thirteenToSixteen = document.getElementById("thirteenToSixteen").checked
  const fiveToTwelve = document.getElementById("fiveToTwelve").checked
  //process
  if (seventeenAbove == true) {
    document.getElementById("answers").innerHTML = "You are eligible to watch R rated movies alone."
  } else if (thirteenToSixteen == true) {
      document.getElementById("answers").innerHTML = "You are eligible to watch PG 13 rated movies alone."
  } else if (fiveToTwelve == true) {
      document.getElementById("answers").innerHTML = "You are eligible to watch G and PG rated movies alone."
  } else {
      document.getElementById("answers").innerHTML = "You are too young to watch any rated movies alone."
  }
}