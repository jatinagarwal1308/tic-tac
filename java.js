// var p1 = document.getElementById("p1").value ; 
// var p2 = document.getElementById("p2").value ; 
var lc = 1, fg = 3, elem = document.getElementById("display");
var a = [["","",""],["","",""],["","",""]] , string = "" ;

function val(i,j)
{     
	elem.innerHTML = "p1 turn" ;

     if( lc%2 == 0)
     {
     	a[i][j] = 1 ;
        string = "p1 turn" ;
     }
     else
     {
        a[i][j] = 0 ;	
        string = "p2 turn" ;
     }
     
     document.getElementById(""+i+j).innerHTML = a[i][j] ;
     lc++ ; 
     
 if( lc>0 )
 {
     for (var j = 0, i = 0; j < 2; j++) 
     {
     	if(a[i][j] == a[i+1][j] == a[i+2][j])
     	{
     		fg = a[i][j] + 1 ;
     		console.log(fg) ;
     		break ;
     	}
     
     	else if(a[j][i] == a[j][i+1] == a[j][i+2])
     	{
     		fg = a[i][j] + 1 ;
     		console.log(fg) ;
     		break ;
     	}
     }
 
     if(fg == 3)
     { 	
    	j = 0 ; 

        if(a[i][i] == a[i+1][i+1] == a[i+2][i+2])
        {
     	   fg = a[i][j] + 1 ;
     	   console.log(fg) ;
        }

        else if(a[2][0] == a[1][1] == a[0][2])
        {
        	fg = a[i][j] + 1 ;
        	console.log(fg) ;
        }
     }
 }

 if( fg == 3 && lc == 10)
 {
 	string = "TIE" ; 
 }

 else if(fg == 1 || fg == 2)
 {
 	string = "player"+fg+"wins" ; 
 }

 elem.innerHTML = string ;

}
         










   
