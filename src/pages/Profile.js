import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./css/home.css"

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>profile</p>

            <Button
            style={{marginLeft:"10px"}}
            variant="primary"
            onClick={() => {
                navigate("/singin");
            }}>
                Войти
            </Button>

            <Button
            style={{marginLeft:"10px"}}
            variant="primary"
            onClick={() => {
                navigate("/singup");
            }}>
                Зарегистироваться
            </Button>

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