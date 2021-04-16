import React from 'react'
import "./card.css"

function Card({ id, name, email, phone, batch, date}) {
    return (
        <div className="card" key={id}>
            <div className="card_header">
                <h3 className="ch_title">{name}</h3>
            </div>

            <div className="card_body">
                <img src={`https://picsum.photos/seed/${name}/500`} alt="" loading='lazy' />
                <p className="cb_content">
                    email : {email} <br/>
                    phone : {phone} <br/>
                    batch : {batch} <br/>
                </p>
            </div>

            <div className="card_footer">
                <small className="cf_text">
                    {date.replace('T', "/").replace('000Z', " ")}
                </small>
            </div>
        </div>
    )
}

export default Card
