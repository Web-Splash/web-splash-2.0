const Background = ({children}) => {
    return (
        // Remove transition-all to disable the background color transition.
        <body className="bg-white dark:bg-gray-800">
            {children}
        </body>
    )
}

export default Background;