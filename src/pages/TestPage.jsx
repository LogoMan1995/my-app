import { useEffect, useState } from "react";

const TestPage = () => {
    const [visible, setvisible] = useState(false);

    const handleClick = () => { setvisible(!visible); };

    return (
        <div>
            {visible ? <TestButton /> : null}

            <button onClick={handleClick}>
                {visible ? "Hide" : "Show"}
            </button>
        </div>
    );
};





const TestButton = () => {

    useEffect(() => {
        console.log("TestButton mounted");
        console.log("TestButton mounted");
        console.log("TestButton mounted");
        console.log("TestButton mounted");
        console.log("TestButton mounted");
        
        return () => {
            console.log("TestButton unmounted");
        }
    }, []);

    return (
        <button className="bg-cyan-500 p-3">
            Button
        </button>
    );
};

export default TestPage;