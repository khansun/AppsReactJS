import React, {useState} from 'react';
import { Card, Alert, Button, Container } from 'react-bootstrap';
import {useAuth} from './../contexts/AuthContext';
import {Link, useHistory} from  'react-router-dom';

const Dashboard = ()=>{
    const [error, setError] = useState("");
    const {currentUser, signOut} = useAuth();
    const history = useHistory();
    const handleSignOut = async()=>{
        setError('');
        try{

            await signOut().then(()=>{
                 history.push('/signin');

            });
           
        }
        catch(error){
            setError(error);
        }
    }
return(   <Container className = 'd-flex align-items-center justify-content-center' style = {{minHeight: '100vh'}}>
<div className = 'w-100' style = {{maxWidth: '400px'}}>
     <Card>
         <Card.Body>
             <h2 className = 'text-center mb-4'>
                 User Profile
             </h2>
             {error?
                     (<Alert variant = 'danger'>{JSON.stringify(error)}</Alert>
                     ):(
                     ""
                    )}
                    <strong>
                        Email: 
                    </strong>
                   
                    {currentUser.email}
                    <Link to = '/update-profile' className = 'btn btn-primary w-100 mt-3'> Update Profile</Link>
         </Card.Body>
     </Card>
     <div className = 'w-100 text-center mt-2'>
         <Button variant= 'Link' onClick = {handleSignOut} >
             Sign Out
         </Button>

     </div>
 </div>
 </Container>
);    
};

export default Dashboard;