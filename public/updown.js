one=false;
  two=false;
  three=false;

window.onload= function(){
  

  function up(id,state){
    if(state==false){
      console.log('upstate1 is= ', state);
      document.getElementById(id).classList.remove('slide-bottom');
      document.getElementById(id).classList.add('slide-top'); 
    }
  };
  
  function down(id,state){
    if(state==true){
      document.getElementById(id).classList.remove('slide-top');
      document.getElementById(id).classList.add('slide-bottom'); 
    }
  };

    document.getElementById("head1").addEventListener("click", function(){
      console.log('click1');
       if (one==true&&two==true){
         down('tab2',two);
         down('tab3',three);
         two=false;
         three=false;
       }else{if(one==true){
         down('tab1',one)
         one=false;
       }else{up('tab1',one)
              one=true;
        
      console.log('state1= ',one);
      }

       }
      });


      document.getElementById("head2").addEventListener("click", function(){
        console.log('click2');
        if (two==true&&three==true){
          down('tab3',three);
          three=false;
        }else{if(two==true&&three==false){
          console.log('i tried');
          down('tab2',two);
          two=false;
        }else{
          up('tab1',one);
          up('tab2',two);
         one=true;
         two=true;
       }
        }
       });

       document.getElementById("head3").addEventListener("click", function(){
        console.log('click3');
        if (three==true){
          down('tab3',three);
          three=false;
        }else{up('tab1',one);
        up('tab2',two);
        up('tab3',three);
        one=true;
        two=true;
        three=true;
      }
       });

}