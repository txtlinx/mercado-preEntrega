
import {useState} from "react";


function App() {
    const [isFree, setIsFree] = useState(true);

    function handleUpgradeClick() {
        setIsFree(false);
    }

    if (isFree) {
        return <button onClick={handleUpgradeClick}>Upgrade</button>;
    }
    return <h2>Welcome Paid user!</h2>;
}