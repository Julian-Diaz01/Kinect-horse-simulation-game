#pragma strict

var StepSound:AudioClip;

function Start () {

}

function Update () {

}

function OnTriggerEnter(){
            //GetComponent.<AudioSource>().loop = true;
    GetComponent.<AudioSource>().clip = StepSound;
    GetComponent.<AudioSource>().Play();
}