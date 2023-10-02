import React from 'react'
import "./Expense.css";
import "./Expensedate.css"

export default function ExpenseDate(props) {

    const month=props.date.toLocaleString('en-US',{month:'long'});
   const year=props.date.getFullYear();
   const day=props.date.toLocaleString('en-US',{day:'2-digit'});
  return (
      <>     
    
       <div className='monthdate'>{month}  </div> 
       <div className='yeardate'> {year}  </div> 
       <div className='daydate'> {day}   </div>
      
       {/* <div className='expensedate'>{props.date}</div> */}

   </>
  )
}
 