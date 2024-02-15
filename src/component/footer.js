function Footer() {
    const hour = new Date().getHours;
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    console.log(hour);
    // if (hour >= openHour && hour <= closeHour) alert("we are open");
    // else alert("sorry we are close");
    return <footer className="footer">
        {new Date().toLocaleTimeString()} we are curretntly open
    </footer>
}

export default Footer;