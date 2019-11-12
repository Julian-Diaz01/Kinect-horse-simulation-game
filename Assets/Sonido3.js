#pragma strict

var StepSound:AudioClip;

function Start () {

}

function Update () {
    if (Input.GetKeyDown(KeyCode.W))
    {
        GetComponent.<AudioSource>().loop = true;
        GetComponent.<AudioSource>().clip = StepSound;
        GetComponent.<AudioSource>().Play();
    }
    else if (Input.GetKeyUp(KeyCode.W))
    {
        GetComponent.<AudioSource>().Stop();
    }
}