import Footer from "../../components/footer"
import Header from "../../components/header"

export default function BaseTemplate(props) {
    return (
        <div>
            <Header/>
            {props.children}
            {/* <h1>Meu template base</h1> */}
            <Footer/>
        </div>
    )
}