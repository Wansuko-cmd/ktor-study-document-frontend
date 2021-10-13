import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MessageCard({text}){
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-primary">{text}</button>
                </div>
            </div>
        </>
    )
}
