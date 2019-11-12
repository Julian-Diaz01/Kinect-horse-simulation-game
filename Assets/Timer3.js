#pragma strict
 
private var startTime : float;
private var textTime : String;
 
private var guiTime: float;

private var minutos : int;
private var segundos : int;
private var milisegundos : int;

private var textField : UI.Text;
var init:boolean=false;

function Start() {
    
    //startTime = Time.time;
    //textField = GetComponent(UI.Text);
}
function Update () {
    
    if(init==true){
        guiTime = Time.time - startTime;
    
        minutos = guiTime / 60;
        segundos = guiTime % 60;
        milisegundos = (guiTime * 100) % 100;
 
        textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutos, segundos, milisegundos);
    
        GetComponent.<GUIText>().text = textTime;
    }
    
}

function OnTriggerEnter(){
    init=true;
    startTime = Time.time;
    textField = GetComponent(UI.Text);
}