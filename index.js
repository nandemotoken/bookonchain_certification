const http = require('http');
const fs = require('fs');
const url = require('url');

const index = fs.readFileSync('./01.html' , 'utf8');
const readerjs = fs.readFileSync('./reader.js' , 'utf8');
const writerjs =  fs.readFileSync('./writer.js' , 'utf8');
const abijs = fs.readFileSync('./abi.js' , 'utf8');

var server = http.createServer(very_simple_dapps);
server.listen(80);
console.log('server start');


function very_simple_dapps(request , response){
	var url_parts = url.parse(request.url , true );
	switch(url_parts.pathname) {

		//取得ファイルがreader.jsの場合
	case '/reader.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(readerjs);
		response.end();
	break;

		//取得ファイルがwriter.jsの場合
	case '/writer.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(writerjs);
		response.end();
	break;

		//取得ページがabi.jsの場合
	case '/abi.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(abijs);
		response.end();
	break;

		//メインページの描画処理
	case '/':
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write(index);
		response.end();
	break;

		//トランザクション送信用ページの描画処理
	case '/tx_sender':
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>book on chain Certification</title><script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js"></script><script src="./abi.js"></script><script src="./writer.js"></script></head>');
		response.write("<body><h1>very simple dapps</h1><p>トランザクションを送信します。ウォレットを操作してください。</p><p>その後、ウォレットからの完了処理が出るまでお待ちください。</p><p>処理が完了したら、元ページにお戻りください。</p></body>");
		//ユーザのブラウザ上のmetamaskからトランザクションを送るためのhtml文
		if ( url_parts.query.q1 != undefined ){ 
			if ( url_parts.query.q1 == "true" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer1true ); </script>" ); 
			}
			if ( url_parts.query.q1 == "false" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer1false ); </script>" ); 
			}
		 }

		if ( url_parts.query.q2 != undefined ){ 
			if ( url_parts.query.q2 == "true" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer2true ); </script>" ); 
			}
			if ( url_parts.query.q2 == "false" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer2false ); </script>" ); 
			}
		 }
		
		if ( url_parts.query.q3 != undefined ){ 
			if ( url_parts.query.q3 == "true" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer3true ); </script>" ); 
			}
			if ( url_parts.query.q3 == "false" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer3false ); </script>" ); 
			}
		 }

		if ( url_parts.query.q4 != undefined ){ 
			if ( url_parts.query.q4 == "true" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer4true ); </script>" ); 
			}
			if ( url_parts.query.q4 == "false" ) {
				response.write( "<script> web3js.eth.getAccounts( sendanswer4false ); </script>" ); 
			}
		 }


		if ( url_parts.query.sendanswer != undefined ){ 
			response.write( "<script> alert('回答を送付します。全問正解なら合格証明トークンを取得します'); </script>" );
			response.write( "<script> web3js.eth.getAccounts( sendanswer ); </script>" );
		 }

		response.end();
	break;


	default:
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write("404");
		response.end();
	break;
	}

}




