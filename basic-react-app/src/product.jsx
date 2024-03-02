import PropTypes from 'prop-types';
import "./product.css";
import Price from "./Price.jsx";
function Product({ title, idx }) {
    let oldPrices = ["12,000", "8,000", "5,000", "9,999"];
    let newPrices = ["23,000", "15,000", "90,000", "24000"];
    let description = [["8,000 DPI", "5 programmable buttons"], ["intuitive surface", "designed for ipad"], ["wireless", "intuitive surface"], ["optical-orientation", "wireless"]]




    return (
        <div className="Product">
            <h4>{title}</h4>

            <p>{description[idx][0]} </p>
            <p>{description[idx][1]} </p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />


        </div>
    );
}




Product.propTypes = {
    title: PropTypes.string.isRequired, // Ensure 'title' is a required string
    idx: PropTypes.number.isRequired,// Ensure 'price' is a required number

};
export default Product;