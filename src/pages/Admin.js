import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./css/home.css"

const Admin = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Админ панель</h1>

            <Button
            style={{marginLeft:"10px"}}
            onClick={() => {
                navigate("/");
            }}>
                Выйти
            </Button>

    </div>
    )
};

export default Admin;