 const user=[
		     { Alex:"Raja",
			 Ram:"Kumar"},
			 {   T:"Raja",
			  Tamil:"Nadu"},
			 {   A:"B",
			 price:3000},
		 ];
			let b=[];
		var x=user.forEach(function (key){
		
			for(a in key){
			 b.push(a+key[a]);
			}
			
		})
		console.log(b);
		
	