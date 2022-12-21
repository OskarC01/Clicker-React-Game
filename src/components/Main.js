import React from "react";

import Timer from "./Timer";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [clickPower, setClickPower] = React.useState(1000000);
  const [clickUpgradeCost, setClickUpgradeCost] = React.useState(10);
  const [showInfoDiv, setShowInfoDiv] = React.useState(false);
  const [powerLevel, setPowerLevel] = React.useState(0);
  const [showEndGameDiv, setShowEndGameDiv] = React.useState(false);
  const [showAchievementsDiv, setShowAchievementsDiv] = React.useState(false);

  // const [achievement, setAchievement] = React.useState(false);
  const [firstAchievement, setFirstAchievement] = React.useState(false);
  const [secondAchievement, setSecondAchievement] = React.useState(false);
  const [thirdAchievement, setThirdAchievement] = React.useState(false);
  const [fourthAchievement, setFourthAchievement] = React.useState(false);
  const [fifthAchievement, setFifthAchievement] = React.useState(false);
  const [sixthAchievement, setSixthAchievement] = React.useState(false);
  const [seventhAchievement, setSeventhAchievement] = React.useState(false);
  const [eightAchievement, setEightAchievement] = React.useState(false);

  let info = document.getElementById("info-div");

  function IncreaseCounter() {
    if (counter < 999999) {
      setCounter((prevValue) => prevValue + clickPower);
      HandleClickAchievements();
      info.innerText = " ";
    } else if (counter >= 999999) {
      setCounter(1000000);
      EndGame();
    }
  }

  function Reset() {
    setClickPower(1);
    setClickUpgradeCost(10);
    setCounter(0);
    setPowerLevel(0);
    setShowEndGameDiv(false);
    setFirstAchievement(false);
    setSecondAchievement(false);
    setThirdAchievement(false);
    setFourthAchievement(false);
    setFifthAchievement(false);

    info.innerText = "Game has been reset.";
  }

  function AddPower() {
    if (counter >= clickUpgradeCost) {
      if (powerLevel < 15) {
        setCounter((prevValue) => prevValue - clickUpgradeCost);
        setClickPower((prevValue) => prevValue + 1);
        setClickUpgradeCost((prevValue) => prevValue * 2);
        setPowerLevel((prevValue) => prevValue + 1);
        HandleUpgradeAchievements();
      } else {
        setClickUpgradeCost("Max");
        setPowerLevel(16);
      }
    } else {
      info.innerText = "Not enough Clicks.";
    }
  }

  function StopTimer() {
    Timer.StopTimer()
  }

  function EndGame() {
    setShowEndGameDiv(true);
    setShowAchievementsDiv(true);
  }

  // const styles_ach = {
  //   backgroundColor: achievement ? "green" : "white",
  // }

  const styles_ach_1 = {
    backgroundColor: firstAchievement ? "green" : "white",
  };
  const styles_ach_2 = {
    backgroundColor: secondAchievement ? "green" : "white",
  };
  const styles_ach_3 = {
    backgroundColor: thirdAchievement ? "green" : "white",
  };
  const styles_ach_4 = {
    backgroundColor: fourthAchievement ? "green" : "white",
  };
  const styles_ach_5 = {
    backgroundColor: fifthAchievement ? "green" : "white",
  };
  const styles_ach_6 = {
    backgroundColor: sixthAchievement ? "green" : "white",
  };
  const styles_ach_7 = {
    backgroundColor: seventhAchievement ? "green" : "white",
  };
  const styles_ach_8 = {
    backgroundColor: eightAchievement ? "green" : "white",
  };

  function HandleClickAchievements() {
    if (counter >= 0) {
      setFirstAchievement(true);
    }
    if (counter >= 99) {
      setSecondAchievement(true);
    }
    if (counter >= 99999) {
      setThirdAchievement(true);
    }
    if (counter >= 499999) {
      setFourthAchievement(true);
    }
    if (counter >= 899000) {
      setFifthAchievement(true);
    }
  }

  function HandleUpgradeAchievements() {
    if (powerLevel > 4) {
      setSixthAchievement(true);
    }
    if (powerLevel > 14) {
      setSeventhAchievement(true);
    }
    if (powerLevel === 16) {
      setEightAchievement(true);
    }
  }

  return (
    <div>
      <h2 id="info-div" className="text-center mt-2">
        {" "}
      </h2>
      <div className="logic-div">
        <div className="clicks-counter">
          <h3 className="my-5">
            Current <span className="clicks-span">Clicks:</span> {counter}
          </h3>
        </div>
        <div className="reset-btn">
          <button className="btn btn-info" onClick={Reset}>
            Reset
          </button>
        </div>
        <div className="information-btn">
          <button
            className="btn btn-warning"
            onClick={() => setShowInfoDiv(!showInfoDiv)}
          >
            Information
          </button>
        </div>
        {showInfoDiv && (
          <div className="information-data">
            <h5 className="text-center mt-2">Game Information</h5>
            <div className="mx-2">
              <hr />
              <p>
                In this game Your goal is to reach 1 million Clicks as fast as
                You can.
              </p>
              <p>You can achieve it by clicking the big yellow button.</p>
              <p>
                There are also upgrades available which can boost your pace.
                Every upgrade cost Clicks.
              </p>
              <p>This game takes approximately x minutes to complete.</p>
              <p className="text-center fs-2">Have Fun!</p>
            </div>
          </div>
        )}
        <div className="click-div">
          <button
            className="btn btn-warning click-btn mt-4"
            onClick={IncreaseCounter}
          >
            Click
          </button>
        </div>
        <div className="upgrades-div">
          <p>
            <div className="btn-div">
              <button
                className="btn btn-primary upgrade-btn"
                onClick={AddPower}
              >
                Improve Click Power ({clickUpgradeCost})
              </button>
              <div className="btn-level ms-2 mt-1 text-center bg-primary">
                <h5 className="power-counter">{powerLevel}/16</h5>
              </div>
            </div>
          </p>
        </div>
        {showEndGameDiv && (
          <div className="endgame-div p-5">
            <h1 className="text-center">Congrats!</h1>
            <hr />
            <p className="fs-2">You have reached 1 million Clicks.</p>
            <br />
            <p className="fs-3 text-center">Your stats:</p>
            <div className="endgame-stats-div text-center">
              <p>
                <button className="btn btn-primary upgrade-btn disabled">
                  Click Power {powerLevel}/16
                </button>
              </p>
            </div>
            <div className="endgame-reset-btn">
              <button className="btn btn-info" onClick={Reset}>
                Reset
              </button>
            </div>
          </div>
        )}
        <div className="achievements-icon">
          <button onClick={() => setShowAchievementsDiv(!showAchievementsDiv)}>
            <i class="fa-solid fa-trophy"></i>
          </button>
        </div>
        {showAchievementsDiv && (
          <div className="achievements-div p-3">
            <h3 className="text-center">Achievements</h3>
            <hr />
            <div className="row g-3 p-2 ms-2">
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_1}
                >
                  <h5 className="single-achievement-title">First Click</h5>
                  <p className="single-achievement-description">
                    Reach 1 Click
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_2}
                >
                  <h5 className="single-achievement-title">So Fast</h5>
                  <p className="single-achievement-description">
                    Reach 100 Clicks
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_3}
                >
                  <h5 className="single-achievement-title">Don't stop now</h5>
                  <p className="single-achievement-description">
                    Reach 100000 Clicks
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_4}
                >
                  <h5 className="single-achievement-title">Halfway there</h5>
                  <p className="single-achievement-description">
                    Reach 500000 Clicks
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_5}
                >
                  <h5 className="single-achievement-title">Reset maybe?</h5>
                  <p className="single-achievement-description">
                    Reach 900000 Clicks
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_6}
                >
                  <h5 className="single-achievement-title">Upgrades!</h5>
                  <p className="single-achievement-description">
                    Acquire 5 upgrades
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_7}
                >
                  <h5 className="single-achievement-title">More upgrades!</h5>
                  <p className="single-achievement-description">
                    Acquire 15 upgrades
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-achievement text-center"
                  style={styles_ach_8}
                >
                  <h5 className="single-achievement-title">Gimme all of'em</h5>
                  <p className="single-achievement-description">
                    Max all upgrades
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
