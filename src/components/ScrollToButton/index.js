import "./ScrollToButton.css";

function ScrollToButton() {
    const handleClik = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button onClick={handleClik}>&#9650;</button>
    );
}

export default ScrollToButton;