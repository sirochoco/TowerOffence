//ヒットポイント
var health:int;
//駒の移動スピード
var speed:float;

function Start () {
health=100;
speed=0.1;
}

function Update () {
//前方に移動
transform.position+=transform.forward*speed;
}
//コリジョンに当たったとき
function OnCollisionEnter(collision:Collision){

if(collision.gameObject.tag=="wallRight"){
transform.Rotate(0,90,0);
}
else if(collision.gameObject.tag=="wallLeft"){
transform.Rotate(0,-90,0);
}
//print(collision.gameObject.tag);
}
