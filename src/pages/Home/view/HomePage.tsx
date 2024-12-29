import {useHomeViewModel} from "../viewModel/useHomeViewModel.ts";
import {Container} from "./HomePage.style.ts";
import homeStore from "../model/homeStore.ts";
import {Provider} from "react-redux";

const HomePage = () => {
    const {count, loading, onIncrement} = useHomeViewModel();

    return (<>
        <Provider store={homeStore}>
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
        </Provider>
    </>);
}

export default HomePage;
