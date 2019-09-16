//環境設定
var Address = "0xB550B8CbaCa87C7660066091960cBb058e32775a";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );

//metamask login
ethereum.enable().then(console.log);


//---------------------write-------------------------
//コントラクトのwrite処理は次の書式に統一します。
//定義
//function w_functionN( hidari , migi ){ mycontract.methods.setnumber(setnum).send({from: migi[0] });}
//
//利用
//web3js.eth.getAccounts( w_functionN );
//...metamaskの準備が出来たらw_functionNを実行する
//--------------------------------------------------


//var tmp_info;
//function w_function1( hidari , migi ){ mycontract.methods.setnumber(tmp_info).send({from: migi[0] });}
//function simple_test(){ web3js.eth.getAccounts( w_function1 ); }
//function w_f1( t ){ 
//	tmp_info = Number(t);
//	simple_test();
//}


function sendanswer1true( hidari , migi ){ mycontract.methods.setAnswer( 1, true ).send({from: migi[0]}); }
function sendanswer1false( hidari , migi ){ mycontract.methods.setAnswer( 1, false ).send({from: migi[0]}); }
function sendanswer2true( hidari , migi ){ mycontract.methods.setAnswer( 2, true ).send({from: migi[0]}); }
function sendanswer2false( hidari , migi ){ mycontract.methods.setAnswer( 2, false ).send({from: migi[0]}); }
function sendanswer3true( hidari , migi ){ mycontract.methods.setAnswer( 3, true ).send({from: migi[0]}); }
function sendanswer3false( hidari , migi ){ mycontract.methods.setAnswer( 3, false ).send({from: migi[0]}); }
function sendanswer4true( hidari , migi ){ mycontract.methods.setAnswer( 4, true ).send({from: migi[0]}); }
function sendanswer4false( hidari , migi ){ mycontract.methods.setAnswer( 4, false ).send({from: migi[0]}); }

function sendanswer( hidari , migi ){ mycontract.methods.challangeCertification( ).send({from: migi[0]}); }



//web3js.eth.getAccounts( sendanswer1 );



