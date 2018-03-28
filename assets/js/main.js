/**
 * @file main.js
 *
 * @author Muhammad Kaudeer - 100656085
 * @date 2018-02-05
 *
 * @version 1.0
 * @copyright Copyright © 2017 DC. All rights reserved.
 *
 * @description Rock Paper Scissors Game
 */

// Everything goes inside
(function(){

	// var person = prompt("What is your name?");

    // Variable that help to define the inner HTML path
    var imgPrefix = "<img src='./assets/img/";
    var imgSuffix = ".png'>";

    //Variables for the rock, paper, scissor img
    var rpsBasket = ["rock", "paper", "scissor"];

    var showUserRPS = document.getElementById("userResult");
    var numberOfRounds = document.getElementById("roundsNum");
    var computerScore = document.getElementById("computerScore");
    var myScore = document.getElementById("myScore");

    var scoreMine = 1;
    var scoreComputer = 1;
    var roundNumber = 1;

    var computerResult = document.getElementById('computerResult');
    var userResult = document.getElementById('userResult');

    var showComputerRPS = document.getElementById("computerResult");
    var showUserRPS = document.getElementById("userResult");

    var userWin = document.getElementById('userResult');
    var cpuWin = document.getElementById('computerResult')

    var isPlaying = true;
    var myAudio = document.getElementById("sound");
    var countDownAudio = document.getElementById('numCount');
    var buttonClick = document.getElementById('btnClick');
    var winSound = document.getElementById('winAudio');
    var loseSound = document.getElementById('loseAudio');
    var drawSound = document.getElementById('drawAudio');

    var volumeControl =	document.getElementById("volume");
    var myAudioTab = document.getElementById('audioTab');



	window.onload = function (){

        document.getElementById('rockBtn').onclick = rockButton;
        document.getElementById('paperBtn').onclick = paperButton;
        document.getElementById('scissorsBtn').onclick = scissorsButton;
        document.getElementById('mute').onclick = audio;

        document.getElementById("sound").play();


        //	use change handler on volume slider
        document.getElementById('volume').addEventListener("change",changeVolume);

        //	reset volume slider to mid way point
    	volumeControl.value	= (volumeControl.max - volumeControl.min)/2;

    	//	reset volume to mid level
        // drawSound.volume = .5;
        winSound.volume = .5;
        loseSound.volume = .5;
        buttonClick.volume = .5;
        countDownAudio.volume = .5;
    	myAudio.volume = .5;



    };

    function rockButton() {
        document.getElementById("btnClick").play();

        setTimeout(function(){

            // Show scissors on selection
            showUserRPS.innerHTML = imgPrefix + rpsBasket[0] + imgSuffix;

            showComputerRPS.innerHTML = "<img id='threeNum' src='./assets/img/three.png'>"

            // Disable btns
            document.getElementById('rockBtn').disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;


            // Increase rounds num
            numberOfRounds.innerHTML = "Round" + " - " + roundNumber++ ;

            document.getElementById("numCount").play();

        },500)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='twoNum' src='./assets/img/two.png'>"
            document.getElementById("numCount").play();
        },1000)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='oneNum' src='./assets/img/one.png'>"
            document.getElementById("numCount").play();
        },1500)

        setTimeout(function(){

            // Creating & Showing random variable and I put it inside the play button to get new random values for the computer
            var randSelection = rpsBasket[Math.floor(Math.random() * rpsBasket.length)];
            showComputerRPS.innerHTML =imgPrefix + randSelection + imgSuffix;

            // Decisions
            if(rpsBasket[0] === randSelection){

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                // alert('tie')
                document.getElementById("drawAudio").play();

            } else if (randSelection === "paper") {

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                computerScore.innerHTML = "Computer - " +  scoreComputer++ ;
                // computerResult.style.backgroundColor = "beige";
                document.getElementById("loseAudio").play();

            } else if (randSelection === "scissor") {


                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                myScore.innerHTML = "User - " + scoreMine++ ;
                document.getElementById("winAudio").play();

            }

            // Unable Btns
            document.getElementById('rockBtn').disabled = false;
            document.getElementById("paperBtn").disabled = false;
            document.getElementById("scissorsBtn").disabled = false;

        },2000)


    }

    function paperButton() {
        document.getElementById("btnClick").play();

        setTimeout(function(){

            // Show scissors on selection
            showUserRPS.innerHTML = imgPrefix + rpsBasket[1] + imgSuffix;

            showComputerRPS.innerHTML = "<img id='threeNum' src='./assets/img/three.png'>"

            // Disable btns
            document.getElementById('rockBtn').disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;


            // Increase rounds num
            numberOfRounds.innerHTML = "Round" + " - " + roundNumber++ ;

            document.getElementById("numCount").play();

        },500)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='twoNum' src='./assets/img/two.png'>"
            document.getElementById("numCount").play();
        },1000)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='oneNum' src='./assets/img/one.png'>"
            document.getElementById("numCount").play();
        },1500)

        setTimeout(function(){

            // Creating & Showing random variable and I put it inside the play button to get new random values for the computer
            var randSelection = rpsBasket[Math.floor(Math.random() * rpsBasket.length)];
            showComputerRPS.innerHTML =imgPrefix + randSelection + imgSuffix;

            // Decisions
            if(rpsBasket[1] === randSelection){

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                // alert('tie')
                document.getElementById("drawAudio").play();

            } else if (randSelection === "scissor") {

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                computerScore.innerHTML = "Computer - " +  scoreComputer++ ;
                // computerResult.style.backgroundColor = "beige";
                document.getElementById("loseAudio").play();

            } else if (randSelection === "rock") {


                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                myScore.innerHTML = "User - " + scoreMine++ ;
                document.getElementById("winAudio").play();

            }

            // Unable Btns
            document.getElementById('rockBtn').disabled = false;
            document.getElementById("paperBtn").disabled = false;
            document.getElementById("scissorsBtn").disabled = false;

        },2000)

    }

    function scissorsButton() {
        document.getElementById("btnClick").play();

        setTimeout(function(){

            // Show scissors on selection
            showUserRPS.innerHTML = imgPrefix + rpsBasket[2] + imgSuffix;

            showComputerRPS.innerHTML = "<img id='threeNum' src='./assets/img/three.png'>"

            // Disable btns
            document.getElementById('rockBtn').disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;


            // Increase rounds num
            numberOfRounds.innerHTML = "Round" + " - " + roundNumber++ ;

            document.getElementById("numCount").play();

        },500)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='twoNum' src='./assets/img/two.png'>"
            document.getElementById("numCount").play();
        },1000)

        setTimeout(function(){
            showComputerRPS.innerHTML = "<img id='oneNum' src='./assets/img/one.png'>"
            document.getElementById("numCount").play();
        },1500)

        setTimeout(function(){

            // Creating & Showing random variable and I put it inside the play button to get new random values for the computer
            var randSelection = rpsBasket[Math.floor(Math.random() * rpsBasket.length)];
            showComputerRPS.innerHTML =imgPrefix + randSelection + imgSuffix;

            // Decisions
            if(rpsBasket[2] === randSelection){

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                // alert('tie')
                document.getElementById("drawAudio").play();

            } else if (randSelection === "rock") {

                TweenLite.fromTo(cpuWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                computerScore.innerHTML = "Computer - " +  scoreComputer++ ;
                // computerResult.style.backgroundColor = "beige";
                document.getElementById("loseAudio").play();

            } else if (randSelection === "paper") {


                TweenLite.fromTo(userWin, 3, { rotation: -7}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
                myScore.innerHTML = "User - " + scoreMine++ ;
                document.getElementById("winAudio").play();

            }

            // Unable Btns
            document.getElementById('rockBtn').disabled = false;
            document.getElementById("paperBtn").disabled = false;
            document.getElementById("scissorsBtn").disabled = false;

        },2000)

    }


    function audio(){
        if (isPlaying) {
            myAudio.pause()
        } else {
            myAudio.play();
        }
    }

    myAudio.onplaying = function() {
      isPlaying = true;

      document.getElementById("mute").src = "./assets/img/pauseAudio.png"
    };

    myAudio.onpause = function() {
      isPlaying = false;
      document.getElementById("mute").src = "./assets/img/playAudio.png"
    };

    function changeVolume()	{

        drawSound.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);
        winSound.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);
        loseSound.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);
        buttonClick.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);
        countDownAudio.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);
    	myAudio.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);

    }


}());
