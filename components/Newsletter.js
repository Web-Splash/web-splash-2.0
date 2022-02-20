import React from "react";
function Index() {
    return (
        <div>
            <form className="float-right flex">
                <input
                    className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder="your@mail.com"/>
                <button
                    className="px-8 rounded-r-lg dark:bg-gray-800 dark:text-gray-300 bg-blue-500 text-gray-100 font-bold p-4 uppercase border-t border-b border-r">Subscribe
                </button>
            </form>
        </div>
    );
}

export default Index;
