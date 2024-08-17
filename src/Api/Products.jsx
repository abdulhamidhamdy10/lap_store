import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import ScrollToTop from 'react-scroll-to-top';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
function Page() {
    const { addItem } = useCart();

    const products = [
        {
            price: 25,
            title: "DELL",
            description: "A powerful laptop designed for multitasking and productivity, equipped with the latest processor, ample RAM, and high-speed storage for seamless performance.",
            id: "1",
            image_url: "/images/Api/4MdfxeCXns9oQps7zkmXjf.png",
            social_rank: 100,
            publisher_url: "http://www.101cookbooks.com"
        },
        {
            price: 40,
            title: "APPLE",
            description: "Sleek and lightweight laptop, perfect for students and professionals, featuring a stunning display and long battery life for all-day use.",
            id: "2",
            image_url: "/images/Api/51EYQmHQ0KL._AC_SX522_.jpg",
            social_rank: 100,
            publisher_url: "http://thepioneerwoman.com"
        },
        {
            price: 30,
            title: "APPLE",
            description: "This laptop is built for gaming and creative professionals, offering powerful graphics and high processing speed to handle demanding applications.",
            id: "3",
            image_url: "/images/Api/61aUBxqc5PL._AC_SX522_.jpg",
            social_rank: 99.99999999999994,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 50,
            title: "DELL",
            description: "Versatile and robust, this laptop is designed for heavy-duty applications, making it an excellent choice for professionals in need of reliable performance.",
            id: "4",
            image_url: "/images/Api/61d-FDjn8LL._AC_SL1083_.jpg",
            social_rank: 99.9999999999994,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 35,
            title: "HP",
            description: "Ideal for on-the-go productivity, this laptop features a compact design without compromising on power, perfect for traveling professionals.",
            id: "4",
            image_url: "/images/Api/713XTyObMWL._AC_SL1500_.jpg",
            social_rank: 99.99999999999835,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 45,
            title: "HP",
            description: "A premium laptop with a sharp display, extensive connectivity options, and a durable build, making it suitable for both work and entertainment.",
            id: "5",
            image_url: "/images/Api/716tQiN+dNL._AC_SL1500_.jpg",
            social_rank: 99.9999999991673,
            publisher_url: "http://www.twopeasandtheirpod.com"
        },
        {
            price: 20,
            title: "HP",
            description: "Compact yet powerful, this laptop offers a perfect balance of portability and performance, ideal for students and everyday tasks.",
            id: "6",
            image_url: "/images/Api/71jcs5zlkzL._AC_SL1500_.jpg",
            social_rank: 99.99999999826605,
            publisher_url: "http://www.mybakingaddiction.com"
        },
        {
            price: 55,
            title: "HP",
            description: "Featuring advanced cooling technology, this laptop is engineered for extended gaming sessions, ensuring optimal performance without overheating.",
            id: "7",
            image_url: "/images/Api/71ZTaGB9e7L._AC_SL1500_.jpg",
            social_rank: 99.99999999760887,
            publisher_url: "http://thepioneerwoman.com"
        },
        {
            price: 60,
            title: "HP",
            description: "This laptop stands out with its ultra-high-definition display and immersive audio, making it perfect for multimedia consumption and creative work.",
            id: "8",
            image_url: "/images/Api/818vEGdvS+S._AC_SL1500_.jpg",
            social_rank: 99.99999999743466,
            publisher_url: "http://www.bonappetit.com"
        },
        {
            price: 28,
            title: "HP",
            description: "Designed for professionals, this laptop offers top-notch security features and enterprise-grade performance, making it ideal for business use.",
            id: "9",
            image_url: "/images/Api/81b-ANnpkRL._AC_SL1500_.jpg",
            social_rank: 99.99999998833789,
            publisher_url: "http://simplyrecipes.com"
        },
        {
            price: 22,
            title: "HP",
            description: "A budget-friendly laptop that doesn’t compromise on essential features, offering reliable performance for basic tasks and web browsing.",
            id: "10",
            image_url: "/images/Api/81b-ANnpkRL._AC_SL1500_.jpg",
            social_rank: 99.99999998319973,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 48,
            title: "HP",
            description: "Engineered for creative professionals, this laptop boasts a powerful processor and high-quality display for seamless video editing and graphic design.",
            id: "11",
            image_url: "/images/Api/81JaA+TabBL._AC_SL1500_.jpg",
            social_rank: 99.99999997246182,
            publisher_url: "http://allrecipes.com"
        },
        {
            price: 34,
            title: "HP",
            description: "A versatile 2-in-1 laptop that can be used as both a laptop and a tablet, offering flexibility and mobility for diverse work scenarios.",
            id: "12",
            image_url: "/images/Api/81TuWAD8tfS._AC_SL1500_.jpg",
            social_rank: 99.99999990783806,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 44,
            title: "HP",
            description: "Designed with portability in mind, this laptop is lightweight yet powerful, making it ideal for frequent travelers who need to stay connected.",
            id: "13",
            image_url: "/images/Api/81ZtiFciwrL._AC_SL1500_.jpg",
            social_rank: 99.99999990525365,
            publisher_url: "http://thepioneerwoman.com"
        },
        {
            price: 38,
            title: "APPLE",
            description: "This laptop offers exceptional battery life and energy efficiency, ensuring you stay productive all day without needing to recharge frequently.",
            id: "14",
            image_url: "/images/Api/apple-macbook-air-quot-skins-custom-laptop-skins-30.png",
            social_rank: 99.99999990065892,
            publisher_url: "http://closetcooking.com"
        },
        {
            price: 52,
            title: "DELL",
            description: "Featuring a spacious and ergonomic keyboard, this laptop is designed for long typing sessions, making it perfect for writers and coders.",
            id: "15",
            image_url: "/images/Api/Dell-Laptop-PNG-Image-Background.png",
            social_rank: 99.99999981149679,
            publisher_url: "http://thepioneerwoman.com"
        },
        {
            price: 27,
            title: "DELL",
            description: "A rugged laptop built to withstand harsh conditions, with military-grade durability and water resistance, ideal for outdoor use.",
            id: "16",
            image_url: "/images/Api/Dell_G15_open_right_color-1-1536x1020.png",
            social_rank: 99.99999980232263,
            publisher_url: "http://www.twopeasandtheirpod.com"
        },
        {
            price: 19,
            title: "DELL",
            description: "Affordable yet capable, this laptop is perfect for students, offering a smooth user experience for note-taking, research, and online learning.",
            id: "17",
            image_url: "/images/Api/laptop_PNG101778.png",
            social_rank: 99.99999978548222,
            publisher_url: "http://realsimple.com"
        },
        {
            price: 46,
            title: "HP",
            description: "Equipped with the latest security features, this laptop ensures your data is protected, making it a secure choice for professionals handling sensitive information.",
            id: "18",
            image_url: "/images/Api/laptop_PNG101812.png",
            social_rank: 99.99999973183757,
            publisher_url: "http://www.mybakingaddiction.com"
        }
        
    ];



    return (
        <div className="products mt-5">
            <Container>
                <Row>
                    {products.map((element) => (
                        <Col md='4' key={element.id} className="text-center mb-5">
                            <div className="item">
                                <img src={element.image_url} className="img-fluid" />
                                <div className="discription">
                                    <h1>{element.price}$</h1>
                                    <h3>{element.title}</h3>
                                    <div>
                                    <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />
                                    <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />
                                    <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />
                                    <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />
                                    <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />

                                    </div>
                                    <p>{element.description}</p>
                                    <button  onClick={() => addItem(element)}>Add to cart</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


            
        </div>
    );
}



function Products() {
    return (
        <CartProvider>
            <Navbar />
            <Page />
            <Footer />

            <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(255, 106, 0)"}}
        />
        </CartProvider>
    );
}
export default Products;