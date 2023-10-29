

    function sum(limit){
        let k = 0
        let l = 0
        for (let i = 0; i <= limit; i++){
            if (i % 5 === 0){
                k = k + i
            }
            else if(i % 3 === 0){
                l = l + i
            }
            
        }
        console.log(l+k)
    }

    console.log(sum(10))