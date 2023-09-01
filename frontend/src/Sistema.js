import {
    BrowserRouter,
    Routes
} from 'react-router-dom';

export default function Sistema(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {props.children}
                </Routes>
            </BrowserRouter>
        </div>
    );
}