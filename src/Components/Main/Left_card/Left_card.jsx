import './Left_card.css'

export function Left_card() {
    return (
        <div className="left_card">
            <h3 className="left_card_h3">Monthly Subscription</h3>
            <div className="price">
                <p>$29</p>
                <span className='per_month'>per month</span>
            </div>
            <p className='left_card_main_text'>Full access for less than $1 a day</p>
            <button className='btn'>Sign Up</button>
        </div>
    );
}