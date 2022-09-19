import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>profile</p>

            <Button
            variant="primary"
            onClick={() => {
                navigate("/");
            }}>
                Выйти
            </Button>

    </div>
    )
};

export default Profile;