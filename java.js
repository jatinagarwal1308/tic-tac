var lc = 1, fg = 3, p1 = "", p2 = "", elem = document.getElementById("display");
var a = [["","",""],["","",""],["","",""]] , string = "" ;

function register() 
{
      p1 = document.getElementById("p1").value ; 
      p2 = document.getElementById("p2").value ; 

      elem.innerHTML = p1+ "'s turn" ;
}

function restart()
{
    document.location.reload();
}

function val(a,b)
{
    if(p1 == "" || p2 == "")
    {
        alert("Enter your names first");
    }

    else
    {
        value(a,b);
    }
}

function value(i,j)
{    
   
    if(a[i][j] == "")
    { 
        if( lc%2 == 0)
        {
          a[i][j] = "X" ;
          string = p1+ "'s turn" ;
        }

        else
        {
          a[i][j] = "O" ;	
          string = p2+ "'s turn" ;
        }

     document.getElementById(""+i+j).innerHTML = a[i][j] ;
     lc++ ;

    }

 if( lc>5 )
 {    
     for (var j = 0, i = 0; j <= 2; j++) 
     {
     	if((a[i][j] == a[i+1][j]) && (a[i+1][j] == a[i+2][j]) && (a[i][j] != ""))    //column
     	{
     		fg = a[i][j] ;
     		break ;
     	}
     
     	else if((a[j][i] == a[j][i+1]) && (a[j][i+1] == a[j][i+2]) && (a[j][i] != ""))    //row
     	{
     		fg = a[i][j] ;
     		break ;
     	}
     }
 
     if(fg == 3)
     { 	
    	j = 0 ; 

        if((a[i][i] == a[i+1][i+1]) && (a[i+1][i+1] == a[i+2][i+2]) && (a[i][i] != ""))   //diagonal
        {
     	   fg = a[i][j] ;
        }

        else if((a[2][0] == a[1][1]) && (a[1][1] == a[0][2]) && (a[1][1] != ""))     //diagonal
        {
        	fg = a[i][j] ;
        }
     }
 }

 if( fg == 3 && lc == 10)
 {
 	string = "TIE" ; 
 }

 else if(fg == "O" || fg == "X")
 {
    if(fg == "O")
 	{
        string = p1 + " wins" ;
    }

    else
    {
        string = p2 + " wins" ;
    }
 }

  elem.innerHTML = string ;

}
         










   
