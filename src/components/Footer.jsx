

const Footer = () => {
    return (
        <footer className= "fixed bottom-0 w-full mb-0 py-2">
            <p className = "text-xs text-black-500 text-center px-4">
                @ {new Date().getFullYear()} All rights reserved..
            </p>
        </footer>
    )
}

export default Footer;