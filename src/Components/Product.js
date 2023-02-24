import "./Product.css";
import Card from "./Card.js";
import WBCC from "../wbcc.jpeg";

function Product(props) {

    return (
        <div>
            <main>
                <section className="cards">
                    <Card name="Kitty" imageURL={WBCC} description="Just a cute kitty.  " />
                    <Card name="Doggie" imageURL={WBCC} description="Just a cute doggy.  " />
                </section>



            </main>

        </div>


    );



}

export default Product;