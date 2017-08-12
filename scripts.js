//---- eth -----------
//eth.accounts - show all addresses
//eth.getBalance(account_address) - show balance of account; account_address - address of account;
//eth.coinbase - return address of account f

//---- personal ------
//personal.newAccount("123") - create new account with pass 123
//personal.unlockAccount(address, "password") - unlock account using account_address and "password"

//---- miner ---------
//miner.setEtherbase(account_address) - set account like account for mining
//miner.start() - start mining from account for mining
//miner.stop() - stop mining from account for mining

//---- web3 ----------
//web3.fromWei(wei_amount, "ether") - convert from wei to ether
//web3.toWei(10, "ether") - convert from ether to wei

//loadScript('/full/path/to/js/file.js'); - load file with your own scripts

function checkAll() {
  web3.eth.getAccounts(function(err, accounts) {
   accounts.forEach(function(id) {
    web3.eth.getBalance(id, function(err, balance) {
     console.log("" + id + ":\tbalance: " + web3.fromWei(balance, "ether") + " ether");
   });
  });
 });
};

function createAccounts(count){
	if(typeof count == 'number' && count%1 ==0 && count >=0){
		for (var i=0; i<count; i++){
			personal.newAccount();
		}
		for (var i in eth.accounts){
			console.log(eth.accounts[i]);
		}
	}else{
		console.log("Wrong argument");
	}
}

function sendEtherToAll(){
	for (var i in eth.accounts){
		if(eth.accounts[i] != eth.coinbase){
			eth.sendTransaction({ from: eth.coinbase, to: eth.accounts[i], value: web3.toWei(10, "ether")})	
		}		
	}
}

function unlockAllAccounts(){
	for (var i in eth.accounts){
		personal.unlockAccount(eth.accounts[i], "");
	}
}