
import React from 'react'

class Demo1 extends React.Component {
    
    constructor(props) 
    {
        super(props);
        this.state=
        {
            firstname:'Nisarg',
            lastname:'',
            username:'',
            email:'',
            phno:'',
            subject1:'',
            subject2:'',
            subject3:'',
            total:0
        };
        this.InputhandleChange=this.InputhandleChange.bind(this); // old to new reference of objects
        this.handleSubmit=this.handleSubmit.bind(this); // old to new reference of objects
    }
    InputhandleChange(event)
    {
        // debugger;
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event)
        {
           
           event.preventDefault();
           console.log(this.state);
            // alert("FirstName:"+this.state.firstname);
            // alert("LastName:"+this.state.lastname);
            // alert("Username:"+this.state.username);
            // alert("Email:"+this.state.email);
            // alert("Phone no:"+this.state.phno);
            // alert("Subject1:"+this.state.subject1);
            // alert("Subject2:"+this.state.subject2);
            // alert("Subject3:"+this.state.subject3);
            
            
            const a=parseInt(this.state.subject1);
            const b=parseInt(this.state.subject2);
            const c=parseInt(this.state.subject3);
            const total=(a+b+c)/3;
            
            console.log(total);
                if(total>70 && total <=100)
                {
                    console.log(this.state.subject1);
                    console.log(this.state.subject2);
                    console.log(this.state.subject3);
                    <h1>{`FirstClass with distinction and perentage is:${total}`}</h1>;
                }
                else if(total>50 && total<=70)
                {
                    console.log(this.state.subject1);
                    console.log(this.state.subject2);
                    console.log(this.state.subject3);
                    <h1>Second class and perentage is:{total}</h1>;
                }
                else if(total>35 && total<=50)
                {
                    console.log(this.state.subject1);
                    console.log(this.state.subject2);
                    console.log(this.state.subject3);
                    <h1>Third class and perentage is:{total}</h1>;
                }
                else if(total>0 && total<35)
                {
                    console.log(this.state.subject1);
                    console.log(this.state.subject2);
                    console.log(this.state.subject3);
                    <h1>Duffer you are failand perentage is:{total}</h1>;
                }
                else
                {
                    console.log(this.state.subject1);
                    console.log(this.state.subject2);
                    console.log(this.state.subject3);
                    return <h1>{total}Invalid input</h1>
                }
    }
    render() 
    {
        debugger;
        return (
            <div>
                <center><header><h3><marquee>This is student's portal to check marks</marquee></h3> </header></center>
                <form onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter firstname" name="firstname" onChange={this.InputhandleChange} value={this.state.firstname}/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter lastname" name="lastname" onChange={this.InputhandleChange} value={this.state.lastname}/>
                    </div>

                     <div className="form-group">
                     <label htmlFor="username">Username</label>
                     <input type="text" className="form-control" id="username" placeholder="Username" name="username" onChange={this.InputhandleChange} value={this.state.username}/>
                    </div>

                    <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={this.InputhandleChange} value={this.state.email}/>
                    </div>

                    <div className="form-group">
                     <label htmlFor="phno">Phone Number</label>
                     <input type="number" className="form-control" id="phno" placeholder="Phonenumber" name="phno" onChange={this.InputhandleChange} value={this.state.phno} />
                    </div>

                    <div className="form-group">
                     <label htmlFor="subject1">Subject1 </label>
                     <input type="number" className="form-control" id="subject1" placeholder="Enter your marks" name="subject1" onChange={this.InputhandleChange} value={this.state.subject1}/>
                    </div>

                    <div className="form-group">
                     <label htmlFor="subject2">Subject2 </label>
                     <input type="number" className="form-control" id="subject2" placeholder="Enter your marks" name="subject2" onChange={this.InputhandleChange} value={this.state.subject2}/>
                    </div>

                    <div className="form-group">
                     <label htmlFor="subject3">Subject3 </label>
                     <input type="number" className="form-control" id="subject3" placeholder="Enter your marks" name="subject3" onChange={this.InputhandleChange} value={this.state.subject3}/>
                    </div>

                    <button type="submit"  className="btn btn-primary mb-5" >Submit</button>
                    
                </form>
                <div>  
                    <h1>
                    total:{this.state.total}  
                    

                    </h1>
            </div>
            </div>
        );
    }
}
export default Demo1