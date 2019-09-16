//環境設定
var Address = "0xB550B8CbaCa87C7660066091960cBb058e32775a";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );

//metamask login処理
ethereum.enable().then(console.log);


//---------------------read--------------------------
//コントラクトのread処理は次の書式に統一します。
//定義
//function r_functionN( r_resultN ){ javascriptの処理内容...console.log(read_resultN)など }
//
//利用
//mycontract.methods.getnumber().call().then(r_functionN);
//...solidityの関数呼出の結果が、r_functionNで処理される。
//---------------------------------------------------

function r_function1( r_result1 ){ console.log( "ans1:" +  r_result1); }
function r_function2( r_result2 ){ console.log( "ans2:" +  r_result2); }
function r_function3( r_result3 ){ console.log( "ans3:" +  r_result3); }
function r_function4( r_result4 ){ console.log( "ans4:" + r_result4); }

function getAnswer1( hiki ){
	mycontract.methods.getAnswer(1).call({from: hiki[0]}).then(r_function1);
}


function getAnswer2( hiki ){
	mycontract.methods.getAnswer(2).call({from: hiki[0]}).then(r_function2);
}


function getAnswer3( hiki ){
	mycontract.methods.getAnswer(3).call({from: hiki[0]}).then(r_function3);
}


function getAnswer4( hiki ){
	mycontract.methods.getAnswer(4).call({from: hiki[0]}).then(r_function4);
}

//addr = web3js.eth.getAccounts().then(console.log);

web3js.eth.getAccounts().then( getAnswer1 );
web3js.eth.getAccounts().then( getAnswer2 );
web3js.eth.getAccounts().then( getAnswer3 );
web3js.eth.getAccounts().then( getAnswer4 );


//mycontract.methods.getTrue().call().then(r_function1);
//addr = web3js.eth.getAccounts().then(console.log);
//mycontract.methods.getAnswer(1).call({from: '0xE35B827177398D8d2FBA304d9cF53bc8fC1573B7' }).then(r_function1);
