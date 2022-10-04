import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./css/home.css"

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Профиль</h1>

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

export default Profile;