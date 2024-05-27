import React from 'react';
import user from '../Img/user.png';  
import doc from '../Img/doc.png';  
import tech from '../Img/tech.png'; 
import '../CSS/home.css' 


function Who() {
    return (
        <div className='RU-Bg-color' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <h1 style={{fontWeight:'bold' ,color:'#110942'}}>Your Role</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'nowrap', width: '100%', gap: '20px' }}>
                <br></br><br></br>
               <a href='/user/signup' style={{ textDecoration:'none' }}> <div className="card text-bg-light mb-3" style={{ maxWidth: '35rem' , height:'35rem' }}>
                    <div className="card-body">
                        <a className="card-title" href='/user/signup'><img src={user} alt="User" style={{height:'28rem'}} /></a>
                        <h3 style={{ textAlign: 'center' }}>Normal User</h3>
                    </div>
                </div></a>
                <a href='/Doctor/signup' style={{ textDecoration:'none' }}><div className="card text-bg-light mb-3" style={{ maxWidth: '35rem' , height: '35rem'}}>
                    <div className="card-body">
                        <a className="card-title" href='/Doctor/signup'><img src={doc} alt="User" style={{height:'450px'}}/></a>
                        <h3 style={{ textAlign: 'center' }}>Doctor</h3>
                    </div>
                </div></a>
                <a href='/technician/signup' style={{ textDecoration:'none' }}><div className="card text-bg-light mb-3" style={{ maxWidth: '40rem' , height: '35rem'}}>
                    <div className="card-body">
                        <a className="card-title" href='/Technician/signup'><img src={tech} alt="User" style={{height:'450px'}}/></a>
                        <h3 style={{ textAlign: 'center'}}>Technician</h3>
                    </div>
                </div></a>
            </div>
        </div>
    );
}

export default Who;
