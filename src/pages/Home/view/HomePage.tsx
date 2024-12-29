import {useHomeViewModel} from "../viewModel/useHomeViewModel.ts";
import {Container} from "./HomePage.style.ts";

const HomePage = () => {
    const {count, loading, onIncrement} = useHomeViewModel();

    return (<>
        <Container>
            <h1>Home Page</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Count: {count}</p>
                    <button onClick={onIncrement}>Increment</button>
                </>
            )
            }
        </Container>
    </>);
}

export default HomePage;
