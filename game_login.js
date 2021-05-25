function add_user(){
    player1=document.getElementById("player1name").value;
    player2=document.getElementById("player2name").value;

    localStorage.setItem("player 1 name",player1);
    localStorage.setItem("player 2 name",player2);
window.location="game_page.html";


}