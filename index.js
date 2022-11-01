let homeScoreText = document.querySelector("#homeScoreText");
let guestScoreText = document.querySelector("#guestScoreText");
const add1PointHomeButton = document.querySelector("#add1PointHomeButton");
const add2PointsHomeButton = document.querySelector("#add2PointsHomeButton");
const add3PointsHomeButton = document.querySelector("#add3PointsHomeButton");
const add1PointGuestButton = document.querySelector("#add1PointGuestButton");
const add2PointsGuestButton = document.querySelector("#add2PointsGuestButton");
const add3PointsGuestButton = document.querySelector("#add3PointsGuestButton");

let homeScore = 0;
let guestScore = 0;

homeScoreText.textContent = homeScore;
guestScoreText.textContent = guestScore;

add1PointHomeButton.onclick = () => {
  homeScore += 1;
  homeScoreText.textContent = homeScore;
};

add2PointsHomeButton.onclick = () => {
  homeScore += 2;
  homeScoreText.textContent = homeScore;
};

add3PointsHomeButton.onclick = () => {
  homeScore += 3;
  homeScoreText.textContent = homeScore;
};

add1PointGuestButton.onclick = () => {
  guestScore += 1;
  guestScoreText.textContent = guestScore;
};

add2PointsGuestButton.onclick = () => {
  guestScore += 2;
  guestScoreText.textContent = guestScore;
};

add3PointsGuestButton.onclick = () => {
  guestScore += 3;
  guestScoreText.textContent = guestScore;
};
