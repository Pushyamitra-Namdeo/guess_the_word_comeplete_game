player1_name= localStorage.getItem("player 1 name");
player2_name= localStorage.getItem("player 2 name");

score1= 0;
score2= 0;

document.getElementById("player1").innerHTML= player1_name +": ";
document.getElementById("player2").innerHTML= player2_name +": ";

document.getElementById("player1_score").innerHTML= score1 ;
document.getElementById("player2_score").innerHTML= score2 ;

document.getElementById("question").innerHTML= "question turn: "+ player1_name;
document.getElementById("answer").innerHTML= "answer turn: "+ player2_name;

function send(){
    word= document.getElementById("word").value;
    convert_word= word.toLowerCase();
    console.log(convert_word);
    
    letter1= convert_word.charAt(1);

    middle_index= Math.floor(word.length/2);
    letter2= convert_word.charAt(middle_index);

    last_index= word.length-1;
    letter3= convert_word.charAt(last_index);

    console.log(letter1);
    console.log(letter2);
    console.log(letter3);

    replace1= convert_word.replace(letter1,"_");
    replace2= replace1.replace(letter2,"_");
    replace3= replace2.replace(letter3,"_");

    console.log(replace3);

     question_word= "<h4 id='word_display'>Q."+ replace3+"</h4>";
    input_box= "<br> answer: <input type='text' id='input_check_box'>";
    check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word+ input_box+ check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= "";

}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    answer= get_answer.toLowerCase();

    if (answer== convert_word){
        if (answer_turn=="player1"){
            score1= score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else{
            score2= score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }

    if (question_turn== "player1"){
        question_turn="player2";
        document.getElementById("question").innerHTML="Question turn: "+player1_name;
    }
    else{
        question_turn="player1";
        document.getElementById("question").innerHTML="Question turn: "+player2_name;
    }

    if (answer_turn== "player1"){
        answer_turn="player2";
        document.getElementById("answer").innerHTML="Answer turn: "+player1_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answer").innerHTML="Answer turn: "+player2_name;
    }

    document.getElementById("output").innerHTML="";
}