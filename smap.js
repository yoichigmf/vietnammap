function rePaint( dpurl,  year, month, date ) {
   
  
    const curl = dpurl + "?CMD=GETDATA&year=" + year + "&month=" + month + "&date=" + date;
   
      //  データ取得
      fetch( curl , {
          method: "GET",
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
             // 'Access-Control-Allow-Origin': '*'
          },
          mode: "no-cors"
       })
       .then(response => {
         console.log(response);
         if (response.ok) {
            console.log(response.json());
            return response.json();
         }
      // 404 や 500 ステータスならここに到達する
        throw new Error('Network response was not ok.');
        })
      .then(resJson => {
  
        LocationList = resJson;
        console.log(LocationList);
        }
      )
      .catch(error => {
        let err = error;
        //console.error('There has been a problem with your fetch operation:', error);
      });
  
  
    
  }