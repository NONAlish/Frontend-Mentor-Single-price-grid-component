import { Left_card } from "./Left_card/Left_card";
import { Right_card } from "./Right_card/Right_card";

import './Main.css'

export function Main() {
    return (
        <div className="wrapper">
            <header>
                <h1 className="wrapper_h1">Join our community</h1>
                <h3 className="wrapper_h3">30-day, hassle-free money back guarantee</h3>
                <p className="wrapper_p">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
            </header>
            <main>
                <Left_card />
                <Right_card />
            </main>
        </div>
    )
}