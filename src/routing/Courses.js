const Courses=()=>
{

    return (
    <div>
        <hr></hr>
    <img src={require('../img/logo.png')}alt=""/>
    <hr></hr>
     <table class="table table-sm" border="2">
  
                <tr border="2">
                    <th scope="col"> Course Name </th>
                    <th scope="col">Duration</th>
                    
                </tr>
                <tr>
                    <td>FSD</td>
                    <td>6 M</td>
                    
                </tr>

                <tr>
                    <td>Python</td>
                    <td>2 M</td>
                    
                </tr> 
                <tr>
                    <td>Java</td>
                    <td>2 M</td>
                    
                </tr>  
        </table>
    </div>)
}
export default Courses;