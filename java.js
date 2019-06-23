var lc = 1, fg = 3, p1, p2, elem = document.getElementById("display");
var a = [["","",""],["","",""],["","",""]] , string = "" ;

function register() 
{
      p1 = document.getElementById("p1").value ; 
      p2 = document.getElementById("p2").value ; 
	console.log(p1,p2)
}

function val(i,j)
{     
	elem.innerHTML = "p1 turn" ;

     if( lc%2 == 0)
     {
     	a[i][j] = 1 ;
        string = p1+ "'s turn" ;
     }
     else
     {
        a[i][j] = 0 ;	
        string = p2+ "'s turn" ;
     }
     
     document.getElementById(""+i+j).innerHTML = a[i][j] ;
     lc++ ;

     console.log(a[i][j],i,j,p1,p2); 
    
     if(a[1][2]==a[2][2])
     	{console.log("ok")}











 // if( lc>5 )
 // {
 //     for (var j = 0, i = 0; j < 2; j++) 
 //     {
 //     	if((a[i][j] == a[i+1][j] == a[i+2][j] == 0)||(a[i][j] == a[i+1][j] == a[i+2][j] == 1))
 //     	{
 //     		fg = a[i][j] + 1 ;
 //     		break ;
 //     	}
     
 //     	else if((a[j][i] == a[j][i+1] == a[j][i+2] == 0)||(a[j][i] == a[j][i+1] == a[j][i+2] == 1))
 //     	{
 //     		fg = a[i][j] + 1 ;
 //     		break ;
 //     	}
 //     }
 
 //     if(fg == 3)
 //     { 	
 //    	j = 0 ; 

 //        if((a[i][i] == a[i+1][i+1] == a[i+2][i+2] == 0)||(a[i][i] == a[i+1][i+1] == a[i+2][i+2] == 1))
 //        {
 //     	   fg = a[i][j] + 1 ;
 //        }

 //        else if((a[2][0] == a[1][1] == a[0][2] == 0)||(a[2][0] == a[1][1] == a[0][2] == 1))
 //        {
 //        	fg = a[i][j] + 1 ;
 //        }
 //     }
 // }

 // if( fg == 3 && lc == 10)
 // {
 // 	string = "TIE" ; 
 // }

 // else if(fg == 1 || fg == 2)
 // {
 // 	string = "player"+fg+"wins" ; 
 // }

  elem.innerHTML = string ;

}
         










   
