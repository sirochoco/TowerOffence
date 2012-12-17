private var target:Transform;

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(collider:Collider){
	if(collider.gameObject.tag=="enemy"){
		transform.LookAt(collider.gameObject.transform);
	}
	
	print(collider.gameObject.name);
}