$(function(){
	var your_period = $('#period').val();
	console.log(your_period);
	var your_sal = parseFloat($('#salary-control').val());
	console.log(your_sal);
	var your_stat = $('#status').val();
	console.log(your_stat);
	
	// < less than
	// > greater than
	var test2 = your_sal + 200;
	console.log(test2);

	function emp_half(){
		$('#monthly-prem').val(monthly_deduc);
		var eemp_half = monthly_deduc / '2'+'.'+'0';
		$('#emp-shr, #empr-shr').val(eemp_half);
	}

	if(your_sal <= 8999.99 ){
		//alert();
		$('#base-salary').val('8000');
		var monthly_deduc = '200';
		emp_half();
		console.log("lest than");
	}
	if ((your_sal >= 9000) & (your_sal <= 9999.99)) {
		//alert();
		$('#base-salary').val('9000');
		var monthly_deduc = '225';
		console.log("more than");
	}
	if ((your_sal >= 10000) & (your_sal <= 10999.99)) {
		//alert();
		$('#base-salary').val('10000');
		var monthly_deduc = '250';
		console.log("more than");
	}
	if ((your_sal >= 11000) & (your_sal <= 11999.99)) {
		//alert();
		$('#base-salary').val('11000');
		var monthly_deduc = '275';
		console.log("more than");
	}
	if ((your_sal >= 12000) & (your_sal <= 12999.99)) {
		//alert();
		$('#base-salary').val('12000');
		var monthly_deduc = '300';
		console.log("more than");
	}
	if ((your_sal >= 13000) & (your_sal <= 13999.99)) {
		//alert();
		$('#base-salary').val('13000');
		var monthly_deduc = '325';
		console.log("more than");
	}
	if ((your_sal >= 14000) & (your_sal <= 14999.99)) {
		//alert();
		$('#base-salary').val('14000');
		var monthly_deduc = '350';
		console.log("more than");
	}
	if ((your_sal >= 15000) & (your_sal <= 15999.99)) {
		$('#base-salary').val('15000');
		var monthly_deduc = '375';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 16000) & (your_sal <= 16999.99)) {
		$('#base-salary').val('16000');
		var monthly_deduc = '400';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 17000) & (your_sal <= 17999.99)) {
		$('#base-salary').val('17000');
		var monthly_deduc = '425';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 18000) & (your_sal <= 18999.99)) {
		$('#base-salary').val('18000');
		var monthly_deduc = '450';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 19000) & (your_sal <= 19999.99)) {
		$('#base-salary').val('19000');
		var monthly_deduc = '475';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 20000) & (your_sal <= 20999.99)) {
		$('#base-salary').val('20000');
		var monthly_deduc = '500';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 22000) & (your_sal <= 22999.99)) {
		$('#base-salary').val('22000');
		var monthly_deduc = '525';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 23000) & (your_sal <= 23999.99)) {
		$('#base-salary').val('23000');
		var monthly_deduc = '575';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 24000) & (your_sal <= 24999.99)) {
		$('#base-salary').val('24000');
		var monthly_deduc = '600';
		emp_half();
		console.log(emp_half);
	}
	if ((your_sal >= 25000) & (your_sal <= 25999.99)) {
		$('#base-salary').val('25000');
		var monthly_deduc = '625';
		emp_half();
		console.log(emp_half);
	}
	
	//console.log(basic_sal);
	//alert('basic_sal');
});